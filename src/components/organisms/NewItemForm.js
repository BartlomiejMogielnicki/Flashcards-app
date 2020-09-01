import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from '../atoms/Heading/Heading';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';

const StyledWrapperForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledInputContainer = styled.div`
  margin: 0 auto;
`;

const StyledButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const NewItemForm = ({ addCollection, title, addCard }) => {
  if (addCollection) {
    return (
      <StyledWrapperForm onSubmit={(e) => addCollection(e)}>
        <Heading>Add new collection</Heading>
        <StyledInputContainer>
          <label>
            Collection name:
            <Input
              placeholder="Enter collection name..."
              value={title}
              onChange={addCollection}
              autoFocus
            />
          </label>
        </StyledInputContainer>
        <StyledButtonContainer>
          <Button icon="apply" />
          <Button icon="cancel" addCollection={addCollection} />
        </StyledButtonContainer>
      </StyledWrapperForm>
    );
  }
  if (addCard) {
    return (
      <StyledWrapperForm onSubmit={(e) => addCard(e)}>
        <Heading>Add new card</Heading>
        <StyledInputContainer>
          <label>
            Question:
            <Input placeholder="Enter a question..." value={title} onChange={addCard} autoFocus />
          </label>
        </StyledInputContainer>
        <StyledInputContainer>
          <label>
            Answer:
            <Input placeholder="Enter an answer..." value={title} onChange={addCard} />
          </label>
        </StyledInputContainer>
        <StyledButtonContainer>
          <Button icon="apply" />
          <Button icon="cancel" addCard={addCard} />
        </StyledButtonContainer>
      </StyledWrapperForm>
    );
  }
  return false;
};

NewItemForm.propTypes = {
  addCollection: PropTypes.func,
  addCard: PropTypes.func,
  title: PropTypes.string,
};

NewItemForm.defaultProps = {
  addCollection: null,
  addCard: null,
  title: null,
};

export default NewItemForm;
