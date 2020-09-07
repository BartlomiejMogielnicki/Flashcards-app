import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  min-height: 80px;
`;

const StyledButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledErrorMessage = styled.p`
  margin: 5px 0 0 2px;
  color: rgb(194, 17, 47);
  font-size: 0.8rem;
  font-weight: bold;
`;

const NewItemForm = ({
  addCollection,
  title,
  errorMessage,
  showError,
  addCard,
  question,
  answer,
  showQuestionError,
  showAnswerError,
  removeCollection,
}) => {
  if (addCollection) {
    return (
      <StyledWrapperForm onSubmit={(e) => addCollection(e)}>
        <h2>Add new collection</h2>
        <StyledInputContainer>
          <label>
            Collection name:
            <Input
              placeholder="Enter collection name..."
              value={title}
              onChange={addCollection}
              autoFocus
              maxLength="10"
            />
            {showError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
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
      <StyledWrapperForm onSubmit={(e) => addCard(e, title)}>
        <h2>Add new card</h2>
        <StyledInputContainer>
          <label>
            Question:
            <Input
              placeholder="Enter a question..."
              value={question}
              onChange={(e) => addCard(e, 'question')}
              autoFocus
            />
            {showQuestionError && <StyledErrorMessage>Please enter a question</StyledErrorMessage>}
          </label>
        </StyledInputContainer>
        <StyledInputContainer>
          <label>
            Answer:
            <Input
              placeholder="Enter an answer..."
              value={answer}
              onChange={(e) => addCard(e, 'answer')}
            />
            {showAnswerError && <StyledErrorMessage>Please enter an answer</StyledErrorMessage>}
          </label>
        </StyledInputContainer>
        <StyledButtonContainer>
          <Button icon="save" title={title} addCard={addCard} />
          <Button icon="discard" addCard={addCard} />
        </StyledButtonContainer>
      </StyledWrapperForm>
    );
  }
  if (removeCollection) {
    return (
      <StyledWrapperForm onSubmit={(e) => removeCollection(e)}>
        <h2>Are you sure?</h2>
        <StyledButtonContainer>
          <Button icon="applyDelete" />
          <Button icon="cancelDelete" removeCollection={removeCollection} />
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
  errorMessage: PropTypes.string,
  showError: PropTypes.bool,
  question: PropTypes.string,
  answer: PropTypes.string,
  showQuestionError: PropTypes.bool,
  showAnswerError: PropTypes.bool,
  removeCollection: PropTypes.func,
};

NewItemForm.defaultProps = {
  addCollection: null,
  addCard: null,
  title: null,
  showError: false,
  errorMessage: null,
  question: null,
  answer: null,
  showQuestionError: null,
  showAnswerError: null,
  removeCollection: null,
};

export default NewItemForm;
