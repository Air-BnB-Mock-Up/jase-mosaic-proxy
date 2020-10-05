/////////////////////////////////////////////
import React from 'react';
/////////////////////////////////////////////
import {ModalStyles as Styles} from '../../styles/Modal.js';
/////////////////////////////////////////////
// CASCADING GRID REPEATED FOR ALL PHOTOS ///
// KEEP TRACK OF THE INDEX COUNT ////////////
// ONCLICK SWITCHES VIEW AT CURRENT PHOTO ///
/////////////////////////////////////////////
const ModalDynamicGrid = ({photos, indexStart, handleClick}) => {
  const [firstURL, ...otherTwo] = photos;
  indexStart = indexStart * 3;
  return (
    <div style={Styles.cascade.dynamic}>
      <img onClick={() => handleClick('carousel', indexStart)}
           className="hover-box"
           src={firstURL}
           style={Styles.cascade.large}
           key={indexStart}>
      </img>
      <div>
        {otherTwo.map((url, index) =>
        <img onClick={() => handleClick('carousel', (indexStart + index + 1))}
             id={`two-horizontal-${index}`}
             className="hover-box"
             src={url}
             style={Styles.cascade.horizontals}
             key={index + indexStart + 1}>
        </img>
        )}
      </div>
    </div>
  );
};
export default ModalDynamicGrid;