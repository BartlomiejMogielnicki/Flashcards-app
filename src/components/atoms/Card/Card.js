import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 0.3s ease;

  &.flipped {
    transform: rotateX(180deg);
  }
`;

const StyledCardFront = styled.div`
  &.flipped {
    display: none;
  }

  :after {
    content: '\f2f1  Flip';
    font-family: 'FontAwesome', 'Roboto Condensed', sans-serif;
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledCardBack = styled(StyledCard)`
  transform: scaleY(-1);
  display: none;

  &.flipped {
    display: flex;
  }

  :after {
    content: '\f2f1  Flip';
    font-family: 'FontAwesome', 'Roboto Condensed', sans-serif;
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 0.9em;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const StyledCardText = styled.p`
  font-size: 1.3rem;
`;

const Card = ({ isFlipped, cards, activeCard }) => {
  const { question, answer } = cards[activeCard];
  return (
    <>
      <StyledCard className={`${isFlipped ? 'flipped' : ''}`}>
        <StyledCardFront className={`${isFlipped ? 'flipped' : ''}`}>
          <StyledCardText>{question}</StyledCardText>
        </StyledCardFront>
        <StyledCardBack className={`${isFlipped ? 'flipped' : ''}`}>
          <StyledCardText>{answer}</StyledCardText>
        </StyledCardBack>
      </StyledCard>
    </>
  );
};

Card.propTypes = {
  isFlipped: PropTypes.bool,
  cards: PropTypes.instanceOf(Array),
  activeCard: PropTypes.number,
};

Card.defaultProps = {
  isFlipped: false,
  cards: null,
  activeCard: null,
};
export default Card;
