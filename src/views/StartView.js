import React, { Component } from 'react';
import styled from 'styled-components';
import startBackground from '../assets/images/startBackground.jpg';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${startBackground});
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const StyledTitleWrapper = styled.div`
  margin: 30px 30px;
  perspective: 1000px;
  display: flex;
  position: relative;
  cursor: pointer;
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

const StyledCardFront = styled.div`
  width: 75px;
  height: 125px;
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

const StyledCardLetter = styled.p``;

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

const StyledStartCard = styled.div`
  width: 300px;
  height: 150px;
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

const StyledStartCardFront = styled.div`
  height: 100%;
  width: 100%;
  &.showed {
    display: none;
  }
`;
const StyledStartCardBack = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(-1);
  display: none;
  background: white;
  color: black;
  text-align: center;
  font-size: 1.2rem;

  &.showed {
    display: flex;
  }

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

const StyledCardSecondBack = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scaleY(-1) rotateY('180deg');
  display: none;
  background: white;
  color: black;
  text-align: center;
  font-size: 1.2rem;

  &.showed {
    display: flex;
  }
`;

class StartView extends Component {
  state = {
    cardsFlipped: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    cardsShowed: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    startCard: {
      isFlipped: false,
      isHidden: false,
    },
  };

  componentDidMount() {
    const { cardsFlipped, cardsShowed } = this.state;
    for (let i = 0; i < cardsFlipped.length; i++) {
      setTimeout(() => {
        cardsFlipped[i] = true;
        this.setState({
          cardsFlipped,
        });
      }, i * 150);
      setTimeout(() => {
        cardsShowed[i] = true;
        this.setState({
          cardsShowed,
        });
      }, i * 150 + 80);
    }
  }

  handleStartCardFlip = () => {
    const { startCard, cardsFlipped } = this.state;
    startCard.isFlipped = true;

    cardsFlipped[13] = false;
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
    const { cardsFlipped, cardsShowed, startCard } = this.state;
    return (
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLetterCard className={cardsFlipped[0] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[0] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[0] ? 'showed' : null}>
              <StyledCardLetter>F</StyledCardLetter>
            </StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[1] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[1] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[1] ? 'showed' : null}>L</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[2] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[2] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[2] ? 'showed' : null}>A</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[3] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[3] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[3] ? 'showed' : null}>S</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[4] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[4] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[4] ? 'showed' : null}>H</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[5] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[5] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[5] ? 'showed' : null}>C</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[6] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[6] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[6] ? 'showed' : null}>A</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[7] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[7] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[7] ? 'showed' : null}>R</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[8] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[8] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[8] ? 'showed' : null}>D</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={cardsFlipped[9] ? 'flipped' : null}>
            <StyledCardFront className={cardsShowed[9] ? 'showed' : null} />
            <StyledCardBack className={cardsShowed[9] ? 'showed' : null}>S</StyledCardBack>
          </StyledLetterCard>
        </StyledTitleWrapper>
        <StyledStartCardsWrapper>
          <StyledStartCard className={cardsFlipped[10] ? 'flipped' : null}>
            <StyledStartCardFront className={cardsShowed[10] ? 'showed' : null} />
            <StyledStartCardBack className={cardsShowed[10] ? 'showed' : null}>
              Do you want to learn easier?
            </StyledStartCardBack>
          </StyledStartCard>
          <StyledStartCard className={cardsFlipped[11] ? 'flipped' : null}>
            <StyledStartCardFront className={cardsShowed[11] ? 'showed' : null} />
            <StyledStartCardBack className={cardsShowed[11] ? 'showed' : null}>
              Do you want to learn faster?
            </StyledStartCardBack>
          </StyledStartCard>
          <StyledStartCard className={cardsFlipped[12] ? 'flipped' : null}>
            <StyledStartCardFront className={cardsShowed[12] ? 'showed' : null} />
            <StyledStartCardBack className={cardsShowed[12] ? 'showed' : null}>
              Do you want to learn with fun?
            </StyledStartCardBack>
          </StyledStartCard>
          <StyledStartCard className={cardsFlipped[13] ? 'flipped' : null}>
            <StyledStartCardFront className={cardsShowed[13] ? 'showed' : null} />
            {cardsShowed[13] ? (
              <>
                <StyledStartCardBack
                  className={startCard.isFlipped ? '' : 'showed control'}
                  onClick={this.handleStartCardFlip}
                >
                  Do you want to start?
                </StyledStartCardBack>
                <StyledCardSecondBack className={startCard.isHidden ? 'showed' : null}>
                  START
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
