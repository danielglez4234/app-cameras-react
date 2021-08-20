import React from 'react';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';

import expandIcon from '../img/expand.png';
import moreInfoIcon from '../img/moreInfo.png';
import zoomInIcon from '../img/zoomIn.png';
import editIcon from '../img/edit.png';
import deleteIcon from '../img/delete.png';

// import vidon from '../img/vid.mp4';



const Videos = ({ name, warningDelete }) => {
  return(
    <div className="rep_prub">
    <div className="warning-delete">
      <h4>Are you sure you want to Delete {name.id}?</h4>
      <h4>Onces deleted you cant turn back.</h4>
      <a href={`/delete?idCamForDelete=${name.id}`}>
        <img src={ deleteIcon } alt="expand" className="deleteCameraButtonIcon" />
        <p>Delete</p>
      </a>
    </div>

      {/*Delete and update Buttons*/}
      <div className="buttonsDeleteUpdate">
        <div className="updateCameraButton">
        <a href={`/update?idCam=${name.id}`}>
            <img src={ editIcon } alt="expand" className="updateCameraButtonIcon" />
          </a>
        </div>
        <div className="deleteCameraButton">
        <a onClick={warningDelete}>
          <img src={ deleteIcon } alt="expand" className="deleteCameraButtonIcon" />
        </a>
        </div>
      </div>


      <div className="mark_of_top_buttons"></div>

      {

        /*
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
        <span> Location: { name.name } </span>
        <br />
        <span> Id-Camera: { name.id } Group: {name.group}</span>
        <br />
        <span> More info: { name.description } </span>
      </div>


    </div>


  );
}

export default Videos;
