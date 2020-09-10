import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';
import startBackground from '../assets/images/startBackground.jpg';

const StyledWrapper = styled.div`
  padding: 10px;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.tertiaryColor};
  background: url(${startBackground});
  background-position: center;
  background-size: cover;

  @media (max-width: 550px) {
    display: flex;
    justify-content: center;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
`;

const StyledTitleWrapper = styled.div`
  perspective: 1000px;
  margin: 30px 30px;
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;

  @media (max-height: 600px) {
    margin: 10px auto;
  }
`;

const StyledLetterCard = styled.div`
  margin: 8px;
  width: 75px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;

  @media (max-width: 1000px) {
    height: 80px;
  }

  @media (max-width: 550px) {
    height: 50px;
    margin: 2px;
  }

  @media (max-height: 600px) {
    height: 50px;
    width: 30px;
  }

  &.flipped {
    transform: rotateX(180deg);
    box-shadow: 3px -3px 5px 1px rgba(0, 0, 0, 1);
  }
`;

const StyledCardFront = styled.div`
  width: 100%;
  height: 100%;
  &.showed {
    display: none;
  }
`;

const StyledCardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(-1);
  display: none;
  background: white;
  color: black;
  font-size: 4rem;

  @media (max-width: 1000px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }

  @media (max-height: 600px) {
    font-size: 2rem;
  }

  &.showed {
    display: flex;
  }
`;

const StyledStartCardsWrapper = styled.div`
  perspective: 1000px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    right: 0px;
    grid-gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-height: 600px) {
    width: 100%;
    right: 0px;
    bottom: 20px;
  }
`;

const StyledStartCard = styled(StyledLetterCard)`
  width: 300px;
  height: 150px;

  @media (max-width: 1000px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 120px;
    margin: 0 auto;
  }

  @media (max-width: 550px) {
    width: 150px;
    height: 100px;
  }

  @media (max-height: 600px) {
    width: 200px;
    height: 90px;
    margin: 0 auto;
  }
`;

const StyledStartCardFront = styled(StyledCardFront)`
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const StyledStartCardBack = styled(StyledCardBack)`
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
  }

  @media (max-height: 600px) {
    font-size: 1rem;
  }

  &.control {
    cursor: pointer;
    :after {
      content: '\f2f1  Flip';
      position: absolute;
      bottom: 10px;
      right: 15px;
      font-family: 'FontAwesome', 'Roboto Condensed', sans-serif;
      font-size: 0.8em;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const StyledCardSecondBack = styled(StyledCardBack)`
  height: 100%;
  width: 100%;
  transform: scaleY(-1) rotateX(180deg);
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 1);
`;

class StartView extends Component {
  state = {
    cards: [
      { cardText: 'F', cardFlipped: false, cardShowed: false, id: 0 },
      { cardText: 'L', cardFlipped: false, cardShowed: false, id: 1 },
      { cardText: 'A', cardFlipped: false, cardShowed: false, id: 2 },
      { cardText: 'S', cardFlipped: false, cardShowed: false, id: 3 },
      { cardText: 'H', cardFlipped: false, cardShowed: false, id: 5 },
      { cardText: 'C', cardFlipped: false, cardShowed: false, id: 6 },
      { cardText: 'A', cardFlipped: false, cardShowed: false, id: 7 },
      { cardText: 'R', cardFlipped: false, cardShowed: false, id: 8 },
      { cardText: 'D', cardFlipped: false, cardShowed: false, id: 9 },
      { cardText: 'S', cardFlipped: false, cardShowed: false, id: 10 },
      { cardText: 'Do you want to learn easier?', cardFlipped: false, cardShowed: false, id: 11 },
      { cardText: 'Do you want to learn faster?', cardFlipped: false, cardShowed: false, id: 12 },
      { cardText: 'Do you want to learn with fun?', cardFlipped: false, cardShowed: false, id: 13 },
      { cardText: 'Do you want to start?', cardFlipped: false, cardShowed: false, id: 14 },
    ],
    startCard: {
      isFlipped: false,
      isHidden: false,
    },
  };

  componentDidMount() {
    const { cards } = this.state;
    for (let i = 0; i < cards.length; i++) {
      setTimeout(() => {
        cards[i].cardFlipped = true;
        this.setState({
          cards,
        });
      }, i * 100);
      setTimeout(() => {
        cards[i].cardShowed = true;
        this.setState({
          cards,
        });
      }, i * 100 + 80);
    }
  }

  handleStartCardFlip = () => {
    const { cards, startCard, cardsFlipped } = this.state;
    startCard.isFlipped = true;
    cards[13].cardFlipped = false;
    this.setState({
      cardsFlipped,
      startCard,
    });
    setTimeout(() => {
      startCard.isHidden = true;
      this.setState({
        startCard,
      });
    }, 80);
  };

  render() {
    const { cards, startCard } = this.state;
    const welcomeStartCard = cards[cards.length - 1];
    const letterCards = cards.slice(0, 10).map((card) => {
      return (
        <StyledLetterCard className={card.cardFlipped ? 'flipped' : null} key={card.id}>
          <StyledCardFront className={card.cardShowed ? 'showed' : null} />
          <StyledCardBack className={card.cardShowed ? 'showed' : null}>
            {card.cardText}
          </StyledCardBack>
        </StyledLetterCard>
      );
    });
    const welcomeCards = cards.slice(10, 13).map((card) => {
      return (
        <StyledStartCard className={card.cardFlipped ? 'flipped' : null} key={card.id}>
          <StyledStartCardFront className={card.cardShowed ? 'showed' : null} />
          <StyledStartCardBack className={card.cardShowed ? 'showed' : null}>
            {card.cardText}
          </StyledStartCardBack>
        </StyledStartCard>
      );
    });

    return (
      <StyledWrapper>
        <StyledTitleWrapper>{letterCards}</StyledTitleWrapper>
        <StyledStartCardsWrapper>
          {welcomeCards}
          <StyledStartCard className={welcomeStartCard.cardFlipped ? 'flipped' : null}>
            <StyledStartCardFront className={welcomeStartCard.cardShowed ? 'showed' : null} />
            {welcomeStartCard.cardShowed ? (
              <>
                <StyledStartCardBack
                  className={startCard.isFlipped ? '' : 'showed control'}
                  onClick={this.handleStartCardFlip}
                >
                  {welcomeStartCard.cardText}
                </StyledStartCardBack>
                <StyledCardSecondBack className={startCard.isHidden ? 'showed' : null}>
                  <Link to="/collections">
                    <Button icon="start" />
                  </Link>
                </StyledCardSecondBack>
              </>
            ) : null}
          </StyledStartCard>
        </StyledStartCardsWrapper>
      </StyledWrapper>
    );
  }
}

export default StartView;
