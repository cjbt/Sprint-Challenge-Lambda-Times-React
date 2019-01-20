import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      img: 0
    };
  }
  componentDidMount() {
    this.setState(
      {
        carousel: carouselData
      },
      () => console.log(this.state.carousel)
    );
  }

  leftClick = () => {
    this.setState(prevState => ({
      img: prevState.img === 0 ? 3 : prevState.img - 1
    }));
  };

  rightClick = () => {
    this.setState(prevState => ({
      img: prevState.img === 3 ? 0 : prevState.img + 1
    }));
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carousel[this.state.img]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className='carousel'>
        {this.selectedImage()}
        <div className='left-button' onClick={this.leftClick}>
          {'<'}
        </div>
        <div className='right-button' onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
