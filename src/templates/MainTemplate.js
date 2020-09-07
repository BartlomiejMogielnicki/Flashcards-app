import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/GlobalStyle';
import theme from '../theme/MainTheme';
import Navigation from '../components/organisms/Navigation';

const StyledWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 75px 1fr;
  background-color: ${theme.primaryColor};

  @media (max-width: 550px) {
    grid-template-rows: 50px 1fr;
  }

  @media (max-height: 600px) {
    grid-template-rows: 50px 1fr;
  }
`;

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledWrapper>
      <Navigation />
      {children}
    </StyledWrapper>
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
