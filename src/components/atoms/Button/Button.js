import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  play: <i className="fas fa-play" />,
  edit: <i className="fas fa-cog" />,
  delete: <i className="fas fa-trash" />,
  apply: <i className="fas fa-check" />,
  cancel: <i className="fas fa-times" />,
};

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: block;
  font-size: 1.2rem;
`;

const Button = ({ icon }) => (
  <StyledButton>
    {icon === 'play' ? icons.play : null}
    {icon === 'edit' ? icons.edit : null}
    {icon === 'delete' ? icons.delete : null}
    {icon === 'apply' ? icons.apply : null}
    {icon === 'cancel' ? icons.cancel : null}
  </StyledButton>
);

Button.propTypes = {
  icon: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
};

export default Button;
