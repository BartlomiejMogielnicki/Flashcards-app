import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import NewItemForm from './NewItemForm';

const flipIn = keyframes`
  from {
    transform: translate(-50%, -50%) rotateX(180deg);
  }

  to {
    transform: translate(-50%, -50%) rotateX(0);
  }
`;

const StyledWrapper = styled.div`
  width: 330px;
  height: 280px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.tertiaryColor};
  animation: ${flipIn} 0.2s linear forwards;

  @media (max-width: 550px) {
    width: 250px;
    height: 250px;
  }

  @media (max-height: 600px) {
    width: 250px;
    height: 250px;
  }
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
  removeCollection,
}) => {
  return (
    <StyledWrapper>
      {addCollection && (
        <NewItemForm
          addCollection={addCollection}
          title={title}
          errorMessage={errorMessage}
          showError={showError}
        />
      )}
      {addCard && (
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
      )}
      {removeCollection && <NewItemForm title={title} removeCollection={removeCollection} />}
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
  removeCollection: PropTypes.func,
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
  removeCollection: null,
};

export default NewItemModal;
