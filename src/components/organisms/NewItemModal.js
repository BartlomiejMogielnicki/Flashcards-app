import React from 'react';
import styled from 'styled-components';
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

const NewItemModal = () => (
  <StyledWrapper>
    <NewItemForm />
  </StyledWrapper>
);

export default NewItemModal;
