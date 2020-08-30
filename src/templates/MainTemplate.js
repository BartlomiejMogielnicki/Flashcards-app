import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/GlobalStyle';
import theme from '../theme/MainTheme';
import Navigation from '../components/organisms/Navigation';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
