import React from 'react';
import ReactDOM from 'react-dom';
import {AppPhotos} from './AppPhotos.jsx';
const PHOTO_LOC_ID = 20;
ReactDOM.render(<AppPhotos locationID={PHOTO_LOC_ID}/>, document.getElementById('app'));
