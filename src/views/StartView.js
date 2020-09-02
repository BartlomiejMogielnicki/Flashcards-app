import React, { Component } from 'react';
import styled from 'styled-components';
import startBackground from '../assets/images/startBackground.jpg';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${startBackground});
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
  perspective: 1000px;
  display: flex;
  position: relative;
  cursor: pointer;
  text-align: center;
  color: white;
  z-index: 1;
`;

const StyledLetterCard = styled.div`
  margin: 5px;
  width: 75px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;

  &.flipped {
    transform: rotateX(180deg);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
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
  font-size: 3rem;

  &.showed {
    display: flex;
  }
`;

const StyledCardLetter = styled.p``;

class StartView extends Component {
  state = {
    lettersFlipped: [false, false, false, false, false, false, false, false, false, false],
    lettersShowed: [false, false, false, false, false, false, false, false, false, false],
  };

  componentDidMount() {
    const { lettersFlipped, lettersShowed } = this.state;
    for (let i = 0; i < lettersFlipped.length; i++) {
      setTimeout(() => {
        lettersFlipped[i] = true;
        this.setState({
          lettersFlipped,
        });
      }, i * 150);
      setTimeout(() => {
        lettersShowed[i] = true;
        this.setState({
          lettersShowed,
        });
      }, i * 150 + 60);
    }
  }

  render() {
    const { lettersFlipped, lettersShowed } = this.state;
    return (
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLetterCard className={lettersFlipped[0] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[0] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[0] ? 'showed' : null}>
              <StyledCardLetter>F</StyledCardLetter>
            </StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[1] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[1] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[1] ? 'showed' : null}>L</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[2] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[2] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[2] ? 'showed' : null}>A</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[3] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[3] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[3] ? 'showed' : null}>S</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[4] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[4] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[4] ? 'showed' : null}>H</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[5] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[5] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[5] ? 'showed' : null}>C</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[6] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[6] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[6] ? 'showed' : null}>A</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[7] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[7] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[7] ? 'showed' : null}>R</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[8] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[8] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[8] ? 'showed' : null}>D</StyledCardBack>
          </StyledLetterCard>
          <StyledLetterCard className={lettersFlipped[9] ? 'flipped' : null}>
            <StyledCardFront className={lettersShowed[9] ? 'showed' : null} />
            <StyledCardBack className={lettersShowed[9] ? 'showed' : null}>S</StyledCardBack>
          </StyledLetterCard>
        </StyledTitleWrapper>
      </StyledWrapper>
    );
  }
}

export default StartView;
