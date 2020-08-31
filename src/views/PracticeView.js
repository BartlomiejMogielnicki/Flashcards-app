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
    this.setState({
      title,
      cards,
    });
  }

  render() {
    const { title, cards } = this.state;
    console.log(cards);
    return (
      <StyledWrapper>
        <Heading>{title}</Heading>
        <FlipCard />
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
