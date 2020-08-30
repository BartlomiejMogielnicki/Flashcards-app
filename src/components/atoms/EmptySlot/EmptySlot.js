import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledSlotContent = styled.div`
  height: 200px;
  width: 5px;
  position: relative;
  border-radius: 10px;
  background-color: #888;

  ::after {
    content: '';
    height: 5px;
    width: 200px;
    position: absolute;
    top: 50%;
    left: -90px;
    border-radius: 10px;
    background-color: #888;
  }
`;

const EmptySlot = () => (
  <StyledWrapper>
    <StyledSlotContent />
  </StyledWrapper>
);

export default EmptySlot;
