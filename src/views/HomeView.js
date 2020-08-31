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
      {
        title: 'JavaScript',
        id: '0',
        cards: [
          { question: 'What is JavaScript?', answer: 'A programming language', id: 0 },
          { question: 'What is Git?', answer: 'Version control system', id: 1 },
          { question: 'What is Npm?', answer: 'Node Package Manager', id: 2 },
          { question: 'What is an CSS', answer: 'Cascade Styling Stylesheet', id: 3 },
        ],
      },
      {
        title: 'React',
        id: '1',
        cards: [
          { question: 'What is JavaScript?', answer: 'A programming language', id: 0 },
          { question: 'What is Git?', answer: 'Version control system', id: 1 },
        ],
      },
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
    ],
    newCollection: {
      showModal: false,
      newTitle: '',
    },
  };

  handleRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  handleAddCollection = (e) => {
    e.preventDefault();
    const { newCollection } = { ...this.state };
    if (e.type === 'click') {
      newCollection.showModal = !newCollection.showModal;
      newCollection.newTitle = '';
      this.setState({
        newCollection,
      });
    } else if (e.type === 'change') {
      newCollection.newTitle = e.target.value;
      this.setState({
        newCollection,
      });
    } else if (e.type === 'submit') {
      const { collections } = this.state;
      let index;
      for (let i = 0; i < collections.length; i++) {
        if (collections[i].title === 'empty') {
          index = i;
          break;
        }
      }
      const createdCollection = {
        title: newCollection.newTitle,
        id: this.handleRandomId(),
        cards: [],
      };
      collections[index] = createdCollection;
      newCollection.showModal = !newCollection.showModal;
      newCollection.newTitle = '';
      this.setState({
        collections,
        newCollection,
      });
    }
  };

  handleRemoveCollection = (collectionTitle) => {
    let { collections } = this.state;
    collections = collections.filter((item) => {
      return item.title !== collectionTitle;
    });
    collections.push({ title: 'empty', id: this.handleRandomId(), cards: [] });
    this.setState({
      collections,
    });
  };

  render() {
    const { collections, newCollection } = this.state;
    const cards = collections.map((collection) =>
      collection.title === 'empty' ? (
        <EmptySlot key={this.handleRandomId()} clicked={this.handleAddCollection} />
      ) : (
        <Collection
          key={this.handleRandomId()}
          title={collection.title}
          cardsNum={collection.cards.length}
          cards={collection.cards}
          removeCollection={this.handleRemoveCollection}
        />
      ),
    );
    return (
      <StyledWrapper>
        {cards}
        {newCollection.showModal ? (
          <NewItemModal addCollection={this.handleAddCollection} title={newCollection.newTitle} />
        ) : null}
      </StyledWrapper>
    );
  }
}

export default HomeView;
