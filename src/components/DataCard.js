import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-top: 0;
`;

const CardContent = styled.p`
  color: #555;
`;

const DataCard = ({ title, content }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </Card>
);

export default DataCard;