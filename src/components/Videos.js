import React from 'react';

import expandirPng from '../img/expandir.png';
import moreInfo from '../img/moreInfo.png';
import zoomIn from '../img/zoomIn.png';

const Videos = ({ name }) => {
  return(

    <div className="rep_prub">
      <div className="mark_of_top_buttons"></div>
 
      <div className="expand_cont">
        <a className="fancybox expand_linkToGalley" href="" data-fancybox="gallery1">
          <img src="http://operador:camara@161.72.94.23/mjpg/video.mjpg" alt="expand" className="expandirIcon prev_grallery_hidden"/>
        </a>
      </div>
      <img src={ expandirPng } alt="expand" className="expandIcon" />
      <img src={ zoomIn } alt="zoom in" className="expandIcon zoomInIcon" />
      <img src={ moreInfo } alt="more info" className="moreInfoIcon" />
      <video id={ name.id } autoPlay className="video_stream"></video>

      <div className="rep_prub-info">
        <hr className="info_separator" />
        <span> Location: ... </span>
        <br />
        <span> Preassure: .. Type: .. Value: .. </span>
        <br />
        <span> More info: ... </span>
      </div>


    </div>


  );
}

export default Videos;
