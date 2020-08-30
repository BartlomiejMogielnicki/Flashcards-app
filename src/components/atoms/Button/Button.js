import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  display: block;
`;

const Button = ({ text }) => <StyledButton>{text}</StyledButton>;

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: null,
};

export default Button;
