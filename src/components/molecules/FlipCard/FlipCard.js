import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

  componentDidUpdate(nextProps) {
    const { activeCard } = this.props;
    const { isFlipped } = this.state;
    if (nextProps.activeCard !== activeCard && isFlipped === true) {
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
    const { cards, activeCard } = this.props;

    return (
      <StyledCardContainer
        className={`${isFlipped ? 'flipped' : ''}`}
        onClick={this.handleCardFlip}
      >
        <Card isFlipped={isFlipped} cards={cards} activeCard={activeCard} />
      </StyledCardContainer>
    );
  }
}

FlipCard.propTypes = {
  cards: PropTypes.instanceOf(Array),
  activeCard: PropTypes.number,
};

FlipCard.defaultProps = {
  cards: null,
  activeCard: null,
};

export default FlipCard;
