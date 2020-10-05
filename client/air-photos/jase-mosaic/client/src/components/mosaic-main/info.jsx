///////////////////////////////////////////////////
import React from 'react';
///////////////////////////////////////////////////
import {MainStyles} from '../../styles/Mosaic.js';
// INFO BAR WITH RANDOMIZED DATA //////////////////
const Info = ({ info }) => {
    return (
      <div style={MainStyles.info.bar}>
        <span style={MainStyles.info.name} >{info.name}</span><br></br>
        <div style={MainStyles.info.icons}>{[
          <span style={MainStyles.info.rating}>
            <span style={MainStyles.info.starColor}>&#9733;</span>
            {info.rating[0]}
            <span style={MainStyles.info.totalRatings}> ({info.rating[1]})</span>
          </span>,
          '\u00b7' ,
          <span style={MainStyles.info.superhost}>
          {[<span style={MainStyles.info.medal}>&#127941;</span>,
            <span style={MainStyles.info.super}>Superhost</span>]}
          </span>,
          '\u00b7',
          <a style={MainStyles.info.location}>
            {info.location}, United States
          </a>
      ]}</div>
      </div>
    );
};
export default Info;