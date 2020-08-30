import React, { Component } from 'react';
import styled from 'styled-components';
import Collection from '../components/organisms/Collection';
import EmptySlot from '../components/atoms/EmptySlot/EmptySlot';
import NewItemModal from '../components/organisms/NewItemModal';

const StyledWrapper = styled.div`
  margin: 10px auto 0;
  padding: 10px;
  max-width: 1000px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  position: relative;
`;

class HomeView extends Component {
  state = {
    collections: [
      { title: 'JavaScript', id: '0', cards: [] },
      { title: 'React', id: '1', cards: [] },
      { title: 'empty', id: '2', cards: [] },
      { title: 'empty', id: '3', cards: [] },
      { title: 'empty', id: '4', cards: [] },
      { title: 'empty', id: '5', cards: [] },
    ],
    showNewCollectionModal: true,
  };

  render() {
    const { collections, showNewCollectionModal } = this.state;
    const cards = collections.map((collection) =>
      collection.title === 'empty' ? (
        <EmptySlot key={collection.id} />
      ) : (
        <Collection
          key={collection.id}
          title={collection.title}
          cardsNum={collection.cards.length}
        />
      ),
    );
    return (
      <StyledWrapper>
        {cards}
        {showNewCollectionModal ? <NewItemModal /> : null}
      </StyledWrapper>
    );
  }
}

export default HomeView;
