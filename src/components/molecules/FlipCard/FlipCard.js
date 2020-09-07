import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../atoms/Card/Card';

const slideInLeft = keyframes`
from {
  transform: translateX(120%) rotateY(-20deg);
}

to {
  transform: translateX(0) rotateY(0);
}
`;

const slideInRight = keyframes`
from {
  transform: translateX(-120%) rotateY(20deg);
}

to {
  transform: translateX(0) rotateY(0);
}
`;

const slideOutLeft = keyframes`
from {
  transform: translateX(0) rotateY(0);
}

to {
  transform: translateX(-120%) rotateY(20deg);
}
`;

const slideOutRight = keyframes`
from {
  transform: translateX(0) rotateY(0);
}

to {
  transform: translateX(120%) rotateY(-20deg);
}
`;

const StyledCardContainer = styled.div`
  perspective: 1000px;
  width: 90%;
  max-width: 500px;
  height: calc(100vw * 0.9 * 0.6);
  max-height: 300px;
  position: relative;
  background-color: white;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;

  ${({ cardLeft }) =>
    cardLeft &&
    css`
      position: absolute;
      transform: translateX(-120%) rotateY(20deg);
    `};

  ${({ cardRight }) =>
    cardRight &&
    css`
      position: absolute;
      transform: translateX(120%) rotateY(-20deg);
    `};

  &.slideInLeft {
    animation: ${slideInLeft} 0.5s ease forwards;
  }

  &.slideInRight {
    animation: ${slideInRight} 0.5s ease forwards;
  }

  &.slideOutLeft {
    animation: ${slideOutLeft} 0.5s ease forwards;
  }

  &.slideOutRight {
    animation: ${slideOutRight} 0.5s ease forwards;
  }
`;

class FlipCard extends Component {
  state = {
    isFlipped: false,
  };

  componentDidUpdate(prevProps) {
    const { activeCard } = this.props;
    const { isFlipped } = this.state;
    if (prevProps.activeCard !== activeCard && isFlipped === true) {
      this.handleCardFlip();
    }
  }

  handleCardFlip = () => {
    const { isFlipped } = this.state;
    this.setState({
      isFlipped: !isFlipped,
    });
  };

  render() {
    const { isFlipped } = this.state;
    const { card, cardLeft, cardRight, swapDirection } = this.props;
    const cardLeftEl = (
      <StyledCardContainer
        className={`${isFlipped ? 'flipped' : ''} ${
          swapDirection === 'right' ? 'slideOutLeft' : 'cardLeft'
        }`}
        onClick={this.handleCardFlip}
        cardLeft
      >
        <Card isFlipped={isFlipped} card={card} />
      </StyledCardContainer>
    );
    const cardActiveEl = (
      <StyledCardContainer
        className={`${isFlipped ? 'flipped' : ''} ${
          swapDirection === 'right' ? 'slideInLeft' : 'slideInRight'
        }`}
        onClick={this.handleCardFlip}
      >
        <Card isFlipped={isFlipped} card={card} />
      </StyledCardContainer>
    );
    const cardRightEl = (
      <StyledCardContainer
        className={`${isFlipped ? 'flipped' : ''} ${
          swapDirection === 'right' ? 'cardRight' : 'slideOutRight'
        }`}
        onClick={this.handleCardFlip}
        cardRight
      >
        <Card isFlipped={isFlipped} card={card} />
      </StyledCardContainer>
    );
    return (
      <>
        {cardLeft && cardLeftEl}
        {!cardLeft && !cardRight && cardActiveEl}
        {cardRight && cardRightEl}
      </>
    );
  }
}

FlipCard.propTypes = {
  card: PropTypes.object,
  activeCard: PropTypes.number,
  cardLeft: PropTypes.bool,
  cardRight: PropTypes.bool,
  swapDirection: PropTypes.string,
};

FlipCard.defaultProps = {
  card: null,
  activeCard: null,
  cardLeft: false,
  cardRight: false,
  swapDirection: null,
};

export default FlipCard;
