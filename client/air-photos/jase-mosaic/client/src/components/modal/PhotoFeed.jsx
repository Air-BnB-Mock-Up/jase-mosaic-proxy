/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
import {ModalStyles as Styles} from '../../styles/Modal.js';
/////////////////////////////////////////////
import StaticGrid from './StaticGrid.jsx';
import DynamicGrid from './DynamicGrid.jsx';
/////////////////////////////////////////////
// FIRST VIEW OF MODAL CASCADING GRIDS //////
class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topGridPhotos: this.props.photos.slice(0, 3),
      restOfPhotos: this.props.photos.slice(3),
    };
    this.splitThree = this.threeSplitter.bind(this);
  };
  /////////////////////////////////////////////
  // SHAPES ARRAY OF URL TO CONFORM W/ GRIDS //
  threeSplitter(photos) {
    let newFormat = [];
    for (let x = 0; x < photos.length; x += 3) {
      let block = [];
      block.push(photos[x]);
      // IF EITHER ONE IS UNDEFINED DON'T INCLUDE THE LAST TWO
      if (photos[x + 1] !== undefined && photos[x + 2] !== undefined) {
        block = block.concat([photos[x + 1], photos[x + 2]]);
      };
      newFormat.push(block);
    };
    return newFormat
  };
  /////////////////////////////////////////////
  // TOP GRID IS STATIC / ALL OTHERS DYNAMIC //
  // KEEP TRACK OF INDEX FROM SPLIT ARRAY /////
  render() {
    return(
      <div className="modal">
        <header style={Styles.headers.cascade}>
    <button className="button-hover" onClick={this.props.handleClick} style={Styles.cascade.backButton}>{'<'}</button>
        </header>
        <div id="photo-feed" style={Styles.cascade.feedStyle}>
          <StaticGrid handleClick={this.props.switchViews} photos={this.state.topGridPhotos} indexStart={0}/>
          <div>
          {this.splitThree(this.state.restOfPhotos).map((threePhotos, index) =>
          <DynamicGrid handleClick={this.props.switchViews} photos={threePhotos} indexStart={index + 1} />)}
          </div>
         </div>
      </div>
    );
  }
}

export default PhotoFeed;