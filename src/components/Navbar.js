import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const NavContainer = styled.nav`
  background: #fff;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-right: 20px;
`;

const LogoutButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #c0392b;
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <NavContainer>
      {user && <UserInfo>Welcome, {user.name}</UserInfo>}
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </NavContainer>
  );
};

export default Navbar;