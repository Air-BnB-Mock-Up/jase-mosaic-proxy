//////////////////////////////////
import React from 'react';
//////////////////////////////////
import {MainStyles as MainView} from '../../styles/Mosaic.js';
//////////////////////////////////
const MockSearch = () => (
  <header style={MainView.header.style} >
    <img style={MainView.header.logo}
         src={MainView.header.imgSRC}>
    </img>
    <input style={MainView.header.input}
            type={'text'}
            placeholder={'      Start your search'}>
    </input>
    <button style={MainView.header.button}>
      <span style={MainView.header.magnify}>&#x1F50D;</span>
    </button>
  </header>
);
export default MockSearch;