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

const NewItemForm = ({ addCollection, title }) => (
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

NewItemForm.propTypes = {
  addCollection: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewItemForm;
