import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collection from '../components/organisms/Collection/Collection';
import EmptySlot from '../components/atoms/EmptySlot/EmptySlot';
import ItemModal from '../components/organisms/ItemModal/ItemModal';

const StyledWrapper = styled.div`
  perspective: 1000px;
  margin: 0 auto;
  padding: 75px 10px 10px;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    padding: 25px 10px 10px;
  }

  @media (max-height: 600px) {
    padding: 20px 10px;
  }
`;

const StyledCollectionsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-items: center;
  justify-content: center;
  position: relative;

  @media (max-height: 600px) {
    grid-template-rows: repeat(auto-fill, 250px);
  }
`;

class CollectionsView extends Component {
  state = {
    collections: [
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
      { title: 'empty' },
    ],
    newCollection: {
      showModal: false,
      newTitle: '',
      showError: false,
      errorMessage: '',
    },
    deleteCollection: {
      showModal: false,
      targetTitle: '',
    },
  };

  componentDidMount() {
    const localStorageCollections = JSON.parse(window.localStorage.getItem('collections'));
    const { location } = this.props;
    if (location.state) {
      const { collections } = location.state;
      this.setState({
        collections,
      });
    } else if (localStorageCollections !== null) {
      this.setState({
        collections: localStorageCollections,
      });
    } else {
      const collections = [
        { title: 'empty' },
        { title: 'empty' },
        { title: 'empty' },
        { title: 'empty' },
        { title: 'empty' },
        { title: 'empty' },
      ];
      this.setState({
        collections,
      });
    }
  }

  componentDidUpdate() {
    const { collections } = this.state;
    /* global window */
    window.localStorage.setItem('collections', JSON.stringify(collections));
  }

  handleRandomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  handleAddCollection = (e) => {
    e.preventDefault();
    const { newCollection } = { ...this.state };
    if (e.type === 'click') {
      newCollection.showModal = !newCollection.showModal;
      newCollection.newTitle = '';
      newCollection.showError = false;
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
      if (newCollection.newTitle === '') {
        newCollection.errorMessage = 'Please enter name collection';
        newCollection.showError = true;
        this.setState({
          newCollection,
        });
        return;
      }
      for (let i = 0; i < collections.length; i++) {
        if (collections[i].title === newCollection.newTitle) {
          newCollection.errorMessage = 'Name is already taken';
          newCollection.showError = true;
          this.setState({
            newCollection,
          });
          break;
        } else if (collections[i].title === 'empty') {
          index = i;
          const createdCollection = {
            title: newCollection.newTitle,
            id: this.handleRandomId(),
            cards: [],
          };
          collections[index] = createdCollection;
          newCollection.showModal = !newCollection.showModal;
          newCollection.newTitle = '';
          newCollection.errorMessage = '';
          newCollection.showError = false;
          this.setState({
            collections,
            newCollection,
          });
          break;
        }
      }
    }
  };

  handleRemoveCollection = (e, collectionTitle) => {
    const { deleteCollection } = this.state;
    if (collectionTitle) {
      deleteCollection.targetTitle = collectionTitle;
      this.setState({
        deleteCollection,
      });
    }
    e.preventDefault();
    let { collections } = this.state;
    deleteCollection.showModal = true;
    this.setState({
      deleteCollection,
    });
    if (e.type === 'click' && collectionTitle === 'cancelDelete') {
      deleteCollection.showModal = false;
      this.setState({
        deleteCollection,
      });
    } else if (e.type === 'submit') {
      collections = collections.filter((item) => {
        return item.title !== deleteCollection.targetTitle;
      });
      collections.push({ title: 'empty', id: this.handleRandomId(), cards: [] });
      deleteCollection.showModal = false;
      this.setState({
        collections,
        deleteCollection,
      });
    }
  };

  render() {
    const { collections, newCollection, deleteCollection } = this.state;
    const cards = collections.map((collection) =>
      collection.title === 'empty' ? (
        <EmptySlot key={this.handleRandomId()} clicked={this.handleAddCollection} />
      ) : (
        <Collection
          key={this.handleRandomId()}
          title={collection.title}
          cardsNum={collection.cards.length}
          cards={collection.cards}
          collections={collections}
          removeCollection={this.handleRemoveCollection}
        />
      ),
    );
    return (
      <StyledWrapper>
        <StyledCollectionsContainer>{cards}</StyledCollectionsContainer>
        {newCollection.showModal && (
          <ItemModal
            addCollection={this.handleAddCollection}
            title={newCollection.newTitle}
            errorMessage={newCollection.errorMessage}
            showError={newCollection.showError}
          />
        )}
        {deleteCollection.showModal && <ItemModal removeCollection={this.handleRemoveCollection} />}
      </StyledWrapper>
    );
  }
}

CollectionsView.propTypes = {
  location: PropTypes.any,
};

CollectionsView.defaultProps = {
  location: null,
};

export default CollectionsView;
