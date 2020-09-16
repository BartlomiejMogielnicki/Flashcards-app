import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import CardsCarousel from '../components/organisms/CardsCarousel/CardsCarousel';
import keysImage from '../assets/images/keys.png';

const StyledWrapper = styled.div`
  perspective: 1000px;
  min-height: 100vh - 75px;
  height: 100%;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};

  @media (max-height: 600px) {
    min-height: 100vh - 50px;
    padding-bottom: 5px;
  }
`;

const StyledHeading = styled.h2`
  font-size: 1.8rem;
  color: white;
  letter-spacing: 2px;

  @media (max-height: 600px) {
    font-size: 1.1rem;
  }
`;

const StyledButtonsContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 550px) {
    width: 300px;
  }
`;

const StyledParagraph = styled.p`
  color: white;
`;

const StyledArrowsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledInfo = styled.div`
  height: 140px;
  width: 220px;
  padding: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: 1px solid #777;
  color: #777;
  text-align: center;

  & img {
    margin-top: 10px;
    width: 90%;
  }

  & p > i {
    margin-right: 5px;
  }

  @media (max-width: 800px) {
    display: none;
  }
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

    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
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

  handleKeyPress = (e) => {
    const { cards, activeCard } = this.state;
    if (e.keyCode === 39 && activeCard !== cards.length - 1) {
      this.handleCardChange('rightArrow');
    } else if (e.keyCode === 37 && activeCard !== 0) {
      this.handleCardChange('leftArrow');
    } else if (e.keyCode === 17) {
      this.handleCardChange('random');
    }
  };

  render() {
    const { title, cards, activeCard } = this.state;
    let cardsNum;
    if (cards) {
      cardsNum = cards.length;
    }
    return (
      <StyledWrapper>
        <StyledHeading>{title}</StyledHeading>
        {cards && <CardsCarousel cards={cards} activeCard={activeCard} />}
        <StyledButtonsContainer>
          <StyledArrowsContainer>
            <Button
              disabled={activeCard === 0}
              icon="leftArrow"
              cardChange={this.handleCardChange}
            />
            <StyledParagraph>
              {activeCard + 1} / {cardsNum}
            </StyledParagraph>
            <Button
              disabled={activeCard + 1 === cardsNum}
              icon="rightArrow"
              cardChange={this.handleCardChange}
            />
          </StyledArrowsContainer>
          <div>
            <Button disabled={cardsNum === 1} icon="random" cardChange={this.handleCardChange} />
          </div>
        </StyledButtonsContainer>
        <StyledInfo>
          <p>
            <i className="fas fa-info-circle" />
            Navigate with keyboard
          </p>
          <img src={keysImage} alt="Keyboard arrow buttons" />
        </StyledInfo>
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
