import React from 'react';

import expandirPng from '../img/expandir.png';

const Videos = ({ name }) => {
  return(

    <div className="rep_prub">
      <div className="mark_of_top_right_buttons"></div>

      <div className="expandir_cont">
        <a className="fancybox expandir_linkToGalley" href="" data-fancybox="gallery1">
          <img src="http://operador:camara@161.72.94.23/mjpg/video.mjpg" alt="expandir" className="expandir prev_grallery_hidden"/>
        </a>
      </div>
      <img src={ expandirPng } alt="expandir" className="expandir" />
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
