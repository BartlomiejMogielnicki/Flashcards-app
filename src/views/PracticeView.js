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
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledParagraph = styled.p``;

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
          <Button icon="leftArrow" />
          <StyledParagraph>
            {activeCard + 1} / {cardsNum}
          </StyledParagraph>
          <Button icon="rightArrow" />
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
