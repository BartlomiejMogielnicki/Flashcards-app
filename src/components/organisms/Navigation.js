import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../atoms/Button/Button';

const StyledNavWrapper = styled.div`
  width: 100%;
  height: 75px;
  background: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLinksList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Navigation = () => (
  <StyledNavWrapper>
    <StyledLinksList>
      <li>
        <NavLink to="/">
          <Button text="Home" />
        </NavLink>
      </li>
    </StyledLinksList>
  </StyledNavWrapper>
);

export default Navigation;
