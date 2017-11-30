import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

const StyledTitle = styled.h1( props => {
  return [
    `
    color: darkred;
    `
  ]
})

const HomePage = () => {
  return (
    <div>
      <StyledTitle>New Project Time</StyledTitle>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/juice">Juice</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
