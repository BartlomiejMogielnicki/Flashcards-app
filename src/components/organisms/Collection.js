import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading/Heading';
import Button from '../atoms/Button/Button';

const StyledWrapper = styled.div`
  padding: 10px;
  width: 250px;
  height: 300px;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const StyledCollectionImage = styled.div``;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Collection = () => (
  <StyledWrapper>
    <Heading>Collection Title</Heading>
    <StyledCollectionImage />
    <StyledButtonsContainer>
      <Button text="Play" />
      <Button text="Edit" />
      <Button text="Delete" />
    </StyledButtonsContainer>
  </StyledWrapper>
);

export default Collection;
