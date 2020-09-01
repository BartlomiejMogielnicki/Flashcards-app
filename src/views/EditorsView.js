import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import EmptySlot from '../components/atoms/EmptySlot/EmptySlot';

const StyledWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled.h2`
  text-align: center;
`;

const StyledCardsList = styled.ul`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-template-rows: repeat(auto-fill, 210px);
  grid-gap: 20px 40px;
  justify-content: center;
`;

const StyledCardItem = styled.li`
  width: 170px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
  cursor: pointer;
`;

const StyledCard = styled.div`
  margin: 10px;
  width: 150px;
  height: 100px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
`;

const StyledCardNumber = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #777;
  color: white;
  font-size: 0.8rem;
`;

const StyledDeleteButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.3s;

  :hover {
    background-color: rgba(255, 0, 0, 1);
  }
`;

const StyledControlsContainer = styled.div`
  margin: 20px auto;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

class EditorsView extends Component {
  state = {
    collections: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const { collections } = location.state;
    this.setState({
      collections,
    });
  }

  handleCardDelete = (cardId) => {
    let { cards } = this.state;
    cards = cards.filter((card) => {
      return card.id !== cardId;
    });
    this.setState({
      cards,
    });
  };

  handleCardAdd = () => {
    console.log('Card added!');
  };

  render() {
    const { location } = this.props;
    const { title } = location.state;
    const { collections } = this.state;
    const collection = collections.filter((item) => {
      return item.title === title;
    });
    let cards;
    if (collection.cards) {
      cards = collection.map((card, index) => (
        <StyledCardItem key={card.id}>
          <StyledCard>{card.question}</StyledCard>
          <StyledCard>{card.answer}</StyledCard>
          <StyledCardNumber>{index + 1}</StyledCardNumber>
          <StyledDeleteButton onClick={() => this.handleCardDelete(card.id)}>x</StyledDeleteButton>
        </StyledCardItem>
      ));
    }
    return (
      <StyledWrapper>
        <StyledHeading>{title}</StyledHeading>
        <StyledCardsList>
          {cards}
          <EmptySlot small clicked={this.handleCardAdd} />
        </StyledCardsList>
        <StyledControlsContainer>
          <Link
            to={{
              pathname: '/',
              state: { collections },
            }}
          >
            <Button icon="save" />
          </Link>
          <Link
            to={{
              pathname: '/',
            }}
          >
            <Button icon="discard" />
          </Link>
        </StyledControlsContainer>
      </StyledWrapper>
    );
  }
}
EditorsView.propTypes = {
  location: PropTypes.any,
  collections: PropTypes.instanceOf(Array),
};

EditorsView.defaultProps = {
  location: null,
  collections: null,
};
export default EditorsView;
