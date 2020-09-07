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
  plus: <i className="fas fa-plus" />,
  home: <i className="fas fa-home" />,
};

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: block;
  background-color: ${({ theme }) => theme.tertiaryColor};
  color: #ddd;
  font-size: 1.2rem;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: white;
    transform: scale(1.1);
  }

  &:disabled {
    background-color: #555;

    &:hover {
      color: #ddd;
      transform: scale(1);
    }
  }
`;

const StylledStartButton = styled(StyledButton)`
  width: 80px;
`;

const StylledHomeBurron = styled(StyledButton)`
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
  }
`;

const Button = ({
  icon,
  addCollection,
  removeCollection,
  cardChange,
  addCard,
  cardsNum,
  title,
  disabled,
}) => {
  const buttonType = icon;
  if (buttonType === 'delete') {
    return <StyledButton onClick={(e) => removeCollection(e, title)}>{icons.delete}</StyledButton>;
  }
  if (buttonType === 'applyDelete') {
    return <StyledButton>{icons.apply}</StyledButton>;
  }
  if (buttonType === 'cancelDelete') {
    return (
      <StyledButton onClick={(e) => removeCollection(e, buttonType)}>{icons.cancel}</StyledButton>
    );
  }
  if (buttonType === 'play') {
    return <StyledButton>{icons.play}</StyledButton>;
  }
  if (buttonType === 'play-disabled') {
    return <StyledButton disabled>{icons.play}</StyledButton>;
  }
  if (buttonType === 'leftArrow') {
    return (
      <StyledButton disabled={disabled} onClick={() => cardChange(buttonType)}>
        {icons.leftArrow}
      </StyledButton>
    );
  }
  if (buttonType === 'rightArrow') {
    return (
      <StyledButton disabled={disabled} onClick={() => cardChange(buttonType)}>
        {icons.rightArrow}
      </StyledButton>
    );
  }
  if (buttonType === 'random') {
    return (
      <StyledButton disabled={disabled} onClick={() => cardChange(buttonType)}>
        {icons.random}
      </StyledButton>
    );
  }
  if (buttonType === 'save') {
    return <StyledButton>{icons.apply}</StyledButton>;
  }
  if (buttonType === 'home') {
    return <StylledHomeBurron>{icons.home}</StylledHomeBurron>;
  }
  if (buttonType === 'discard' && addCard) {
    return <StyledButton onClick={(e) => addCard(e, buttonType)}>{icons.cancel}</StyledButton>;
  }
  if (buttonType === 'discard') {
    return <StyledButton>{icons.cancel}</StyledButton>;
  }
  if (buttonType === 'edit' && cardsNum === 0) {
    return <StyledButton onClick={addCollection}>{icons.plus}</StyledButton>;
  }
  if (buttonType === 'edit') {
    return <StyledButton onClick={addCollection}>{icons.edit}</StyledButton>;
  }
  if (buttonType === 'start') {
    return <StylledStartButton>START</StylledStartButton>;
  }
  return (
    <StyledButton onClick={addCollection}>
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
  addCard: PropTypes.func,
  cardsNum: PropTypes.number,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  addCollection: null,
  removeCollection: null,
  cardChange: null,
  addCard: null,
  cardsNum: null,
  title: null,
  disabled: false,
};

export default Button;
