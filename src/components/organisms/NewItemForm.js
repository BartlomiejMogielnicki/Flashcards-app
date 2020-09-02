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
  min-height: 80px;
`;

const StyledButtonContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const StyledErrorMessage = styled.p`
  margin: 5px 0 0 5px;
  color: red;
  font-size: 0.7rem;
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
}) => {
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
        <Heading>Add new card</Heading>
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
};

export default NewItemForm;
