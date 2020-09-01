import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewItemForm from './NewItemForm';

const StyledWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: lightgray;
  transform: translate(-50%, -50%);
`;

const NewItemModal = ({ addCollection, title, addCard }) => {
  return (
    <StyledWrapper>
      {addCollection ? <NewItemForm addCollection={addCollection} title={title} /> : null}
      {addCard ? <NewItemForm addCard={addCard} /> : null}
    </StyledWrapper>
  );
};

NewItemModal.propTypes = {
  addCollection: PropTypes.func,
  addCard: PropTypes.func,
  title: PropTypes.string,
};

NewItemModal.defaultProps = {
  addCollection: null,
  addCard: null,
  title: null,
};

export default NewItemModal;
