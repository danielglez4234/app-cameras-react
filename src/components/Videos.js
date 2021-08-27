import React          from 'react';

import expandIcon     from '../img/expand.png';
import moreInfoIcon   from '../img/moreInfo.png';
import zoomInIcon     from '../img/zoomIn.png';
import resizeIcon     from '../img/resize2.png';
import menuVideoIcon  from '../img/menuVideo.png';

import editIcon       from '../img/edit.png';
import closeIcon      from '../img/close.png';
import warningIcon    from '../img/warning.png';
import deleteIcon     from '../img/delete.png';
// import vidon from '../img/vid.mp4';


const Videos = ({ name, warningDelete, closeWaringDelete, showMenuItems, coverCamera, showMoreInfo }) => {
  return(
    <div className={`rep_prub rep_prub${name.id}`}>

    <div className={`warning-delete warning-delete${name.id}`}>
      <div className="warningDeleteBox">
      <button onClick={() => {closeWaringDelete(name.id)}}>
        <img src={ closeIcon } alt="expand" className="warning-delete-close-icon" />
      </button>
        <img src={ warningIcon } alt="expand" className="warning-delete-warning-icon" />
        <p className="warning-delete-text">Are you sure you want to Delete <b>{name.id}</b>?</p>
        <p className="warning-delete-text warning-delete-text-secundary">Onces deleted you cant turn back.</p>
        <a className="warning-delete-button" href={`/delete?id=${name.id}`}>
          <img src={ deleteIcon } alt="expand" className="deleteCameraButtonIcon" />
        </a>
      </div>
    </div>

      {/*Delete and update Buttons*/}
      <div className={`cameraButtons cameraButtons${name.id}`}>
      <div className="div-to-expand">
        <button className="menuCameraItem updateDeleteCameraButtons" onClick={() => {warningDelete(name.id)}}>
          <div className="cameraIconButtons deleteCameraButton">
              <img src={ deleteIcon } alt="expand" className="cameraImgIcons deleteCameraButtonIcon" />
          </div>
        </button>

        <a className="menuCameraItem updateDeleteCameraButtons" href={`/update?idCam=${name.id}`}>
          <div className="cameraIconButtons updateCameraButton">
              <img src={ editIcon } alt="expand" className="cameraImgIcons updateCameraButtonIcon" />
          </div>
        </a>

        <button className={`menuCameraItem menuCameraItem${name.id} display-none`} onClick={() => {showMoreInfo(name.id)}}>
          <div className="cameraIconButtons moreInfoCameraButton">
              <img src={ moreInfoIcon } alt="expand" className="cameraImgIcons moreInfoCameraButtonIcon" />
          </div>
        </button>

        <button className={`menuCameraItem menuCameraItem${name.id} display-none`}>
          <div className="cameraIconButtons zoomInCameraButton">
              <img src={ zoomInIcon } alt="expand" className="cameraImgIcons zoomInCameraButtonIcon" />
          </div>
        </button>

        <button className={`menuCameraItem menuCameraItem${name.id} display-none`} onClick={() => {coverCamera(name.id)}}>
          <div className="cameraIconButtons coverCameraButton">
              <img src={ resizeIcon } alt="expand" className="cameraImgIcons coverCameraButtonIcon" />
          </div>
        </button>

        <button className={`menuCameraItem menuCameraItem${name.id} display-none`}>
          <div className="cameraIconButtons expandCameraButton">
              <img src={ expandIcon } alt="expand" className="cameraImgIcons expandCameraButtonIcon" />
          </div>
        </button>

      <button className="menuCameraItem" onClick={() => {showMenuItems(name.id)}}>
        <div className={`cameraIconButtons menuVideoCameraButton menuVideoCameraButton${name.id}`}>
            <img src={ menuVideoIcon } alt="expand" className="cameraImgIcons menuVideoCameraButtonIcon" />
        </div>
      </button>
      </div>
      </div>


      {/*
      <div>
        <a className="fancybox expand_linkToGalley" href="" data-fancybox="gallery1">
          <img src={moreInfo} alt="expand" className="expandirIcon prev_grallery_hidden"/>
        </a>
      </div>
      */}

      <video id={ name.id } autoPlay muted className="video_stream"></video>
      {/*<video src={vidon} autoPlay muted className="video_stream" />*/}

      <div className={`rep_prub-info rep_prub-info${name.id}`}>
        <hr className="info_separator" />
        <span className="rep_prub-info-title"> <p className="rep_prub-info-span">Camera Name:</p> { name.name } </span>
        <br />
        <span className="rep_prub-info-title"> <p className="rep_prub-info-span">Id-Camera:</p> { name.id } <p className="rep_prub-info-span">Group: </p>{name.group}</span>
        <br />
        <span className="rep_prub-info-title"> <p className="rep_prub-info-span">More info:</p> { name.description } </span>
      </div>


    </div>


  );
}

export default Videos;
