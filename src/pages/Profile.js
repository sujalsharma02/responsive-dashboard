import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const ProfileContainer = styled.div`
  padding: 20px;
  background: #fff;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Detail = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <ProfileContainer>
      <Title>{user.name}'s Profile</Title>
      <Detail><b>Email:</b> {user.email}</Detail>
      <Detail><b>Phone:</b> {user.phone}</Detail>
      <Detail><b>Website:</b> {user.website}</Detail>
      <Detail><b>Company:</b> {user.company.name}</Detail>
    </ProfileContainer>
  );
};

export default Profile;