import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUsers } from '../services/api';
import DataCard from '../components/DataCard';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  padding: 0 20px;
`;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch users", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <Title>Users Overview</Title>
      <DashboardGrid>
        {users.map(user => (
          <DataCard key={user.id} title={user.name} content={`Username: ${user.username}`} />
        ))}
      </DashboardGrid>
    </div>
  );
};

export default Dashboard;