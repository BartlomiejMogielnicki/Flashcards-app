import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import FlipCard from '../components/molecules/FlipCard/FlipCard';

const StyledWrapper = styled.div``;

class PracticeView extends Component {
  state = {};

  componentDidMount() {
    const { location } = this.props;
    const { cards, title } = location.state;
    const activeCard = 0;
    this.setState({
      title,
      cards,
      activeCard,
    });
  }

  render() {
    const { title, cards, activeCard } = this.state;
    return (
      <StyledWrapper>
        <Heading>{title}</Heading>
        {cards ? <FlipCard cards={cards} activeCard={activeCard} /> : null}
      </StyledWrapper>
    );
  }
}

PracticeView.propTypes = {
  location: PropTypes.any,
};

PracticeView.defaultProps = {
  location: null,
};

export default PracticeView;
