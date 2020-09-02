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

const NewItemModal = ({
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
  return (
    <StyledWrapper>
      {addCollection ? (
        <NewItemForm
          addCollection={addCollection}
          title={title}
          errorMessage={errorMessage}
          showError={showError}
        />
      ) : null}
      {addCard ? (
        <NewItemForm
          addCard={addCard}
          question={question}
          answer={answer}
          title={title}
          errorMessage={errorMessage}
          showError={showError}
          showQuestionError={showQuestionError}
          showAnswerError={showAnswerError}
        />
      ) : null}
    </StyledWrapper>
  );
};

NewItemModal.propTypes = {
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

NewItemModal.defaultProps = {
  addCollection: null,
  addCard: null,
  title: null,
  showError: null,
  errorMessage: null,
  question: null,
  answer: null,
  showQuestionError: null,
  showAnswerError: null,
};

export default NewItemModal;
