import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  play: <i className="fas fa-play" />,
  edit: <i className="fas fa-cog" />,
  delete: <i className="fas fa-trash" />,
  apply: <i className="fas fa-check" />,
  cancel: <i className="fas fa-times" />,
  leftArrow: <i className="fas fa-arrow-left" />,
  rightArrow: <i className="fas fa-arrow-right" />,
  random: <i className="fas fa-random" />,
};

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: block;
  font-size: 1.2rem;
`;

const Button = ({ icon, addCollection, removeCollection, cardChange }) => {
  const buttonType = icon;
  if (buttonType === 'delete') {
    return <StyledButton onClick={removeCollection}>{icons.delete}</StyledButton>;
  }
  if (buttonType === 'play') {
    return <StyledButton>{icons.play}</StyledButton>;
  }
  if (buttonType === 'leftArrow') {
    return <StyledButton onClick={() => cardChange(buttonType)}>{icons.leftArrow}</StyledButton>;
  }
  if (buttonType === 'rightArrow') {
    return <StyledButton onClick={() => cardChange(buttonType)}>{icons.rightArrow}</StyledButton>;
  }
  if (buttonType === 'random') {
    return <StyledButton onClick={() => cardChange(buttonType)}>{icons.random}</StyledButton>;
  }

  return (
    <StyledButton onClick={addCollection}>
      {icon === 'edit' ? icons.edit : null}
      {icon === 'delete' ? icons.delete : null}
      {icon === 'apply' ? icons.apply : null}
      {icon === 'cancel' ? icons.cancel : null}
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  addCollection: PropTypes.func,
  removeCollection: PropTypes.func,
  cardChange: PropTypes.func,
};

Button.defaultProps = {
  icon: null,
  addCollection: null,
  removeCollection: null,
  cardChange: null,
};

export default Button;
