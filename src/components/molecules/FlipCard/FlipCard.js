import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../../atoms/Card/Card';

const StyledCardContainer = styled.div`
  perspective: 1000px;
  width: 500px;
  height: 300px;
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  text-align: center;
`;

class FlipCard extends Component {
  state = {
    isFlipped: false,
  };

  handleCardFlip = () => {
    const { isFlipped } = this.state;
    this.setState({
      isFlipped: !isFlipped,
    });
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <StyledCardContainer
        className={`${isFlipped ? 'flipped' : ''}`}
        onClick={this.handleCardFlip}
      >
        <Card isFlipped={isFlipped} />
      </StyledCardContainer>
    );
  }
}

export default FlipCard;
