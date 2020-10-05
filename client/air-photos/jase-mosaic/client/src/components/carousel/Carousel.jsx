///////////////////////////////////////////////////////////////
import React from 'react';
import {ModalHeaderStyle, MainFrame, Exit, Photo, Description, CountOf, Direction} from '../../styles/modal.js'
///////////////////////////////////////////////////////////////
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: this.props.descriptions,
      photos: this.props.photos,
      index: this.props.indexStart,
      tranStyle: MainFrame,
    }
  }
  ///////////////////////////////////////////////////////////////
  // ANIMATION ON DIV WHEN LEFT/RIGHT BUTTONS ARE CLICKED ///////
  ///////////////////////////////////////////////////////////////
  switchPhoto(addOrMinusOne) {
    if (this.state.photos[this.state.index + addOrMinusOne]) {
      var nextIndex = addOrMinusOne + this.state.index;
      this.setState({
        index: nextIndex
      });
      var container = document.getElementById('photo-container');
      var level = 0;
      container.style.opacity = `${level}`;
      var raiseOpacity = () => {
        if (level >= 1) {
          return;
        };
        level += .05;
        container.style.opacity = `${level}`;
        window.requestAnimationFrame(raiseOpacity);
      };
      return raiseOpacity();
    };
  };
  ///////////////////////////////////////////////////////////////
  render() {
    ///////////////////////////////////////////////////////////////
    // SETS THE CURRENT PHOTO AND CURRENT DESCRIPTION OF VIEW /////
    const currentPhoto = this.state.photos[this.state.index];
    var currDescript = this.state.descriptions[this.state.index];
    currDescript = currDescript.split('');
    currDescript[0] = currDescript[0].toUpperCase();
    const currentDescription = currDescript.join('');
    ///////////////////////////////////////////////////////////////
    return (
      <div>
        <header style={ModalHeaderStyle.carousel}></header>
        <button className="button-hover"
                style={Exit}
                onClick={() => this.props.switchViews('cascade-grid')}>
        X  Close
        </button>
        <div style={CountOf}>{this.state.index + 1} / {this.state.photos.length}</div>
        <button id="left-button"
                className="button-hover"
                onClick={() => {this.switchPhoto(-1)}}
                style={this.state.index !== 0 ? Direction.Previous : Direction.Hidden}
                >{'<'}
        </button>
        <div id="photo-container" style={this.state.tranStyle}>
          <img id="main-photo" style={Photo} src={currentPhoto}></img>
          <span style={Description}>{currentDescription}</span>
        </div>
        <button id="right-button"
                className="button-hover"
                onClick={() => this.switchPhoto(1)}
                style={this.state.index !== this.state.photos.length - 1 ? Direction.Next : Direction.Hidden}
                >{'>'}
        </button>
      </div>
    );
  };
};
export default Carousel;