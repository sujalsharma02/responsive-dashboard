import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

const AppLayoutContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 250px; /* Same as sidebar width */

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

// Layout for protected pages
const AppLayout = () => (
  <AppLayoutContainer>
    <Sidebar />
    <MainContent>
      <Navbar />
      <Outlet /> {/* This will render the nested route component (Dashboard, Profile) */}
    </MainContent>
  </AppLayoutContainer>
);

// A wrapper for routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }
  
  return user ? children : <Navigate to="/" />;
};


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route element={<AppLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                  </Route>
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;