/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
import {MainStyles} from '../../styles/Mosaic.js';
// LAYS OUT FIRST 5 PHOTOS IN DYNAMIC GRID //
const MainMosaic = ({handleClick, photos}) => {
  let largeURL = photos[0];
  let photoFrame = photos.slice(1, 5);
  return (
      <div style={MainStyles.photos.container}>
        <img className="hover-box"
             style={MainStyles.photos.large}
             src={largeURL}
             onClick={handleClick}>
        </img>
        <div style={MainStyles.photos.fourFrames}>
          {photoFrame.map((url, index) =>
          <img style={MainStyles.photos.frame}
               src={url}
                id={ 'ms-' + index }
                className="hover-box"
                onClick={handleClick}
                key={index}>
          </img>)}
        </div>
      </div>
  );
};
export default MainMosaic;