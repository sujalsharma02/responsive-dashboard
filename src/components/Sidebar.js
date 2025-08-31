import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background: #2c3e50;
  color: white;
  height: 100vh;
  position: fixed;
  padding-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
  }
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover, &.active {
    background: #34495e;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <h2>Dashboard</h2>
    <NavItem to="/dashboard" >Dashboard</NavItem>
    <NavItem to="/profile">Profile</NavItem>
  </SidebarContainer>
);

export default Sidebar;