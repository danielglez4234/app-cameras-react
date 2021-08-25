import React, { Component }  from 'react';
import { Consumer } from './context';
import * as $ from 'jquery';

import noCameaSrc from '../img/noCamera.png';
import loadingSrc from '../img/loading.svg';
import apiNotResponding from '../img/apiNotResponding.png';
// import deleteIcon from '../img/delete.png';

import Videos from './Videos';
import ConnectionError from './ConnectionError';

class ContainerVideo extends Component {

  constructor() {
    super();
    this.state = {
      countVideos: 0,
      // mapTestId: [{id:'1'},{id:'2'},{id:'3'},{id:'4'}]
    };
  }

    warningDelete = (id) =>{
      $('.warning-delete' + id).fadeIn(100);
      $('.block-area-for-warning-delete').fadeIn(100);
    }
    closeWarningDelete = (id) =>{
      if (id) {
        $('.warning-delete' + id).fadeOut(100);
        $('.block-area-for-warning-delete').fadeOut(100);
      }
      else {
        $('.warning-delete').fadeOut(100);
        $('.block-area-for-warning-delete').fadeOut(100);
      }
    }


    showMenuItems = (id) =>{
      $('.menuCameraItem' + id).toggle();
      $('.menuVideoCameraButton' + id).toggleClass('border-bottom-left-radius-0');
      $('.cameraButtons' + id).toggleClass('opacity-on');
    }

    coverCamera = (id) =>{
      $('.rep_prub').toggle();
      $('.coverCameraButtonIcon').toggleClass('cover-rotate-when-clicked');
      $('.rep_prub' + id).toggleClass('displayBlock width-height-1');
    }

    showMoreInfo = (id) =>{
      $('.rep_prub-info' + id).toggleClass('show-rep_prub-info');
    }

    adjustVideoContainer = (countvideos) => {
      if (countvideos === 1) {
        $('.rep_prub').addClass('width-height-1')
          .removeClass('width-height-2 width-height-3 width-height-5 width-height-7');
        $('.video_stream').addClass('adjustWidthVideo-x1')
          .removeClass('adjustWidthVideo-x2 adjustWidthVideo-x3 adjustWidthVideo-x5 adjustWidthVideo-x7');
      }else if (countvideos === 2) {
        $('.rep_prub').addClass('width-height-2')
          .removeClass('width-height-1 width-height-3 width-height-5 width-height-7');
        $('.video_stream').addClass('adjustWidthVideo-x2')
          .removeClass('adjustWidthVideo-x1 adjustWidthVideo-x3 adjustWidthVideo-x5 adjustWidthVideo-x7');
      }else if (countvideos === 3 || countvideos === 4) {
        $('.rep_prub').addClass('width-height-3')
          .removeClass('width-height-1 width-height-2 width-height-5 width-height-7');
        $('.video_stream').addClass('adjustWidthVideo-x3')
          .removeClass('adjustWidthVideo-x1 adjustWidthVideo-x2 adjustWidthVideo-x5 adjustWidthVideo-x7');
      }else if (countvideos === 5 || countvideos === 6) {
        $('.rep_prub').addClass('width-height-5')
          .removeClass('width-height-1 width-height-2 width-height-3 width-height-7');
        $('.video_stream').addClass('adjustWidthVideo-x5')
          .removeClass('adjustWidthVideo-x1 adjustWidthVideo-x2 adjustWidthVideo-x3 adjustWidthVideo-x7');
      }else if (countvideos === 7 || countvideos === 8 || countvideos === 9) {
        $('.rep_prub').addClass('width-height-7')
          .removeClass('width-height-1 width-height-2 width-height-3 width-height-5');
        $('.video_stream').addClass('adjustWidthVideo-x7')
          .removeClass('adjustWidthVideo-x1 adjustWidthVideo-x2 adjustWidthVideo-x3 adjustWidthVideo-x5');
      }
    }


  render(){
    return (
      <Consumer>
      { context => {
        let videos;
        let warningDeleteBox;
        const result = context.idCam; //we save the data in the result variable
        // const result = this.state.mapTestId;
        // console.log(result.length + 'totalPages');

        if (result === undefined){

          videos = <ConnectionError />;

        }else{

          if (result.length > 0) { // if the results found are greater than 0 the images are displayed
            videos = result.map(video =>
               <Videos
                key= {video.id}
                name={ video }
                warningDelete={this.warningDelete}
                closeWaringDelete={this.closeWarningDelete}
                showMenuItems={this.showMenuItems}
                coverCamera={this.coverCamera}
                showMoreInfo={this.showMoreInfo}
                />
            );

            this.state.countVideos = videos.length;
            const countvideo = this.state.countVideos;
            const _this = this;
            setTimeout(function(){ _this.adjustVideoContainer(countvideo); }, 1);


          } else { // if not, the component <NotFound> is displayed
            videos = <div>
                      <img className="loading connection_error" src={ noCameaSrc } alt="No Camera Available" />
                      <span className="message_connection_error">No cameras available</span>
                    </div>;
          }
        }

        return(
          <div className="rep_prub_cont_inside">
          <div onClick={() => {this.closeWarningDelete()}} className="block-area-for-warning-delete"></div>

          { (context.connectionError) ? <ConnectionError /> :
            (context.apiRestConnectioError) ? <p><img className="loading connection_error" src={ apiNotResponding } alt="loading"/><span class="message_connection_error api_error">APi REST server is not responding...</span></p> :
            (context.loading) ? <div className="rep_prub_cont"><img className="loading connection_error" src={ loadingSrc } alt="loading"/></div> : videos }

          </div>
        );
      }}
      </Consumer>
    );
  }
}


export default ContainerVideo;
