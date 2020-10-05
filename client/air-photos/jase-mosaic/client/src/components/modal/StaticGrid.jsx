/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
import {ModalStyles as Styles} from '../../styles/Modal.js';
/////////////////////////////////////////////
// STATIC GRID ON TOP OF MODAL //////////////
const StaticGrid = ({photos, handleClick}) => {
  const [firstURL, ...otherTwo] = photos;
  return(
    <div style={Styles.cascade.feedPosition}>
      <img style={Styles.cascade.featurePhoto}
           className="hover-box"
           src={firstURL}
           onClick={(e) => handleClick('carousel', 0)}
           key={0}>
      </img>
      <div id="top-modal-frame" style={Styles.cascade.dualFrame}>
        {otherTwo.map((url, index) =>
        <img id={`top-modal-photo-${index + 1}`}
             className="hover-box"
             style={{height: '30.8vh', width: '99.95%'}}
             src={url}
             onClick={() => handleClick('carousel', index + 1)}
             key={index + 1}>
        </img>)}
      </div>
    </div>
  );
};
export default StaticGrid