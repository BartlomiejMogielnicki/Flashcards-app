import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../atoms/Button/Button';

const letters = ['F', 'L', 'A', 'S', 'H', 'C', 'A', 'R', 'D', 'S'];

const StyledNavWrapper = styled.div`
  width: 100%;
  height: 75px;
  background: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinksList = styled.div`
  margin-right: 20px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLogoContainer = styled.div`
  margin-left: 15px;
  display: flex;
`;

const StyledLetters = styled.div`
  margin: 3px;
  padding: 5px;
  border-radius: 2px;
  background-color: white;
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 1);
`;

const Navigation = () => {
  const lerrersEl = letters.map((letter, index) => (
    <StyledLetters key={index}>{letter}</StyledLetters>
  ));
  return (
    <StyledNavWrapper>
      <StyledLogoContainer>{lerrersEl}</StyledLogoContainer>
      <StyledLinksList>
        <li>
          <NavLink to="/collections">
            <Button icon="home" />
          </NavLink>
        </li>
      </StyledLinksList>
    </StyledNavWrapper>
  );
};

export default Navigation;
