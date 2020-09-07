import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';
import startBackground from '../assets/images/startBackground.jpg';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${({ theme }) => theme.tertiaryColor};
  background: url(${startBackground});
  background-position: center;
  background-size: cover;

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
  margin: 30px 30px;
  perspective: 1000px;
  display: flex;
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;
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

  &.flipped {
    transform: rotateX(180deg);
    box-shadow: 3px -3px 5px 1px rgba(0, 0, 0, 1);
  }
`;

const StyledStartCard = styled(StyledLetterCard)`
  width: 300px;
  height: 150px;
`;

const StyledCardFront = styled.div`
  width: 100%;
  height: 100%;
  &.showed {
    display: none;
  }
`;
const StyledCardBack = styled.div`
  width: 75px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(-1);
  display: none;
  background: white;
  color: black;
  font-size: 4rem;

  &.showed {
    display: flex;
  }
`;

const StyledStartCardBack = styled(StyledCardBack)`
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;

  &.control {
    cursor: pointer;
    :after {
      content: '\f2f1  Flip';
      font-family: 'FontAwesome', 'Roboto Condensed', sans-serif;
      position: absolute;
      bottom: 10px;
      right: 15px;
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
          <StyledCardFront className={card.cardShowed ? 'showed' : null} />
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
            <StyledCardFront className={welcomeStartCard.cardShowed ? 'showed' : null} />
            {welcomeStartCard.cardShowed ? (
              <>
                <StyledStartCardBack
                  className={startCard.isFlipped ? '' : 'showed control'}
                  onClick={this.handleStartCardFlip}
                >
                  {welcomeStartCard.cardText}
                </StyledStartCardBack>
                <StyledCardSecondBack className={startCard.isHidden ? 'showed' : null}>
                  <Link to="/home">
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
