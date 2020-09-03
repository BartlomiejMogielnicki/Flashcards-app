import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 250px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #555;

  ${({ small }) =>
    small &&
    css`
      height: 100%;
      min-height: 210px;
      width: 100%;
      min-width: 170px;
    `}
`;

const StyledSlotContent = styled.div`
  height: 150px;
  width: 5px;
  position: relative;
  border-radius: 10px;
  background-color: #555;

  ${({ small }) =>
    small &&
    css`
      height: 100px;
    `}

  ::after {
    content: '';
    height: 5px;
    width: 150px;
    position: absolute;
    top: 50%;
    left: -70px;
    border-radius: 10px;
    background-color: #555;

    ${({ small }) =>
      small &&
      css`
        left: -45px;
        width: 100px;
      `}
  }
`;

const EmptySlot = ({ clicked, small }) => (
  <StyledWrapper small={small} onClick={clicked}>
    <StyledSlotContent small={small} />
  </StyledWrapper>
);

EmptySlot.propTypes = {
  clicked: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

EmptySlot.defaultProps = {
  small: false,
};

export default EmptySlot;
