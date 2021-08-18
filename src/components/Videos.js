import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';

import expandIcon from '../img/expand.png';
import moreInfoIcon from '../img/moreInfo.png';
import zoomInIcon from '../img/zoomIn.png';
import editIcon from '../img/edit.png';
import deleteIcon from '../img/delete.png';

import vidon from '../img/vid.mp4';



const Videos = ({ key, name, numeroPrueba }) => {
  return(
    <div className="rep_prub">

      {/*Delete and update Buttons*/}
      <div className="buttonsDeleteUpdate">
        <div className="updateCameraButton">
        <NavLink to={`/update?idCam=${numeroPrueba}`}>
            <img src={ editIcon } alt="expand" className="updateCameraButtonIcon" />
          </NavLink>
        </div>
        <div className="deleteCameraButton">
        <NavLink to={`/delete?idCam=${numeroPrueba}`}>
          <img src={ deleteIcon } alt="expand" className="deleteCameraButtonIcon" />
        </NavLink>
        </div>
      </div>


      <div className="mark_of_top_buttons"></div>

      {/*
      <div>
        <a className="fancybox expand_linkToGalley" href="" data-fancybox="gallery1">
          <img src={moreInfo} alt="expand" className="expandirIcon prev_grallery_hidden"/>
        </a>
      </div>
      */}
      <img src={ expandIcon } alt="expand" className="expandIcon" />
      <img src={ zoomInIcon } alt="zoom in" className="expandIcon zoomInIcon" />
      <img src={ moreInfoIcon } alt="more info" className="moreInfoIcon" />

      <video id={ name.id } autoPlay muted className="video_stream"></video>
      {/*<video src={vidon} autoPlay muted className="video_stream" />*/}

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
