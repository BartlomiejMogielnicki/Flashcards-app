import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import FlipCard from '../components/molecules/FlipCard/FlipCard';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledButtonsContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledParagraph = styled.p``;

const StyledOutsideButton = styled.div``;

const StyledArrowsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

class PracticeView extends Component {
  state = {};

  componentDidMount() {
    const { location } = this.props;
    const { cards, title } = location.state;
    const activeCard = 0;
    this.setState({
      title,
      cards,
      activeCard,
    });
  }

  handleCardChange = (buttonType) => {
    let { activeCard } = this.state;
    const { cards } = this.state;
    if (buttonType === 'leftArrow') {
      activeCard -= 1;
    } else if (buttonType === 'rightArrow') {
      activeCard += 1;
    } else if (buttonType === 'random') {
      const prevCard = activeCard;
      do activeCard = Math.floor(Math.random() * cards.length);
      while (activeCard === prevCard);
    }
    if (activeCard < 0) {
      activeCard = 0;
    } else if (activeCard >= cards.length) {
      activeCard = cards.length - 1;
    }
    this.setState({
      activeCard,
    });
  };

  render() {
    const { title, cards, activeCard } = this.state;
    let cardsNum;
    if (cards) {
      cardsNum = cards.length;
    }
    return (
      <StyledWrapper>
        <Heading>{title}</Heading>
        {cards ? <FlipCard cards={cards} activeCard={activeCard} /> : null}
        <StyledButtonsContainer>
          <StyledArrowsContainer>
            <Button icon="leftArrow" cardChange={this.handleCardChange} />
            <StyledParagraph>
              {activeCard + 1} / {cardsNum}
            </StyledParagraph>
            <Button icon="rightArrow" cardChange={this.handleCardChange} />
          </StyledArrowsContainer>
          <StyledOutsideButton>
            <Button icon="random" cardChange={this.handleCardChange} />
          </StyledOutsideButton>
        </StyledButtonsContainer>
      </StyledWrapper>
    );
  }
}

PracticeView.propTypes = {
  location: PropTypes.any,
};

PracticeView.defaultProps = {
  location: null,
};

export default PracticeView;
