////////////////////////////////////////////
// DEPENDENCIES ////////////////////////////
import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
////////////////////////////////////////////
// HELPER FUNCTIONS ////////////////////////
import {getInfo} from '../helpers/httpHandler.js';
import {photos, info} from '../helpers/store.js';
import {ModalStyle} from '../styles/Modal.js';
import {MainStyles} from '../styles/mosaic.js';
////////////////////////////////////////////
// REACT ELEMENTS //////////////////////////
import Info from './mosaic-main/Info.jsx';
import MainMosaic from './mosaic-main/MainMosaic.jsx';
import PhotoFeed from './modal/PhotoFeed.jsx';
import Carousel from './carousel/Carousel.jsx';
import MockSearch from './mosaic-main/MockSearch.jsx';
////////////////////////////////////////////
// MAIN COMPONENT //////////////////////////
export class AppPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: [],
      photos: [],
      info: info,
      isOpen: false,
      view: 'cascade-grid',
      index: 0
    };
    ////////////////////////////////////////////
    // BINDING FUNCTIONS AND MODAL /////////////
    Modal.setAppElement(document.getElementById('app'));
    this.clickHandle = this.clickHandle.bind(this);
    this.switchViews = this.switchViews.bind(this);
  };
  ////////////////////////////////////////////
  // GATHER DATA FROM DATABASE FOR LISTING ///
  componentDidMount() {
    let randomListing =
    Math.floor(Math.random() * 100);
    return getInfo(randomListing, (data) => {
      this.setState({
        descriptions: data[1].descriptions,
        photos: data[1].images,
        info: data[0]
      });
    });
  };
  ////////////////////////////////////////////
  // OPENS AND CLOSES MODAL //////////////////
  clickHandle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  ////////////////////////////////////////////
  // SWITCHES BETWEEN CASCADE/CAROUSEL VIEWS /
  switchViews(view, index) {
    this.setState({
      view: view,
      index: index
    });
  };
  renderViews(view) {
    if (view === 'carousel') {
      return <Carousel switchViews={this.switchViews}
                       descriptions={this.state.descriptions}
                       photos={this.state.photos}
                       indexStart={this.state.index}
                       />
    } else if (view === 'cascade-grid') {
      return <PhotoFeed handleClick={this.clickHandle}
                        switchViews={this.switchViews}
                        photos={this.state.photos}
                        />
    };
  };
  ////////////////////////////////////////////
  // MAIN RENDER / MODAL IS HIDDEN ///////////
  render() {
    return (
      <div>
        <MockSearch />
        <Modal onRequestClose={this.clickHandle} isOpen={this.state.isOpen} style={ModalStyle}>
          {this.renderViews(this.state.view)}
        </Modal>
        <div id="main_page_body">
          <Info info={this.state.info} />
          <MainMosaic handleClick={this.clickHandle} photos={this.state.photos} />
        </div>
      </div>
    );
  };
};
