import React from 'react';
import styled from 'styled-components';
import Collection from '../components/organisms/Collection';

const StyledWrapper = styled.div`
  margin: 10px auto 0;
  padding: 10px;
  max-width: 1000px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

const HomeView = () => (
  <StyledWrapper>
    <Collection />
    <Collection />
    <Collection />
    <Collection />
    <Collection />
    <Collection />
  </StyledWrapper>
);

export default HomeView;
