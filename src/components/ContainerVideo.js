import React, { Component }   from 'react';
import { Consumer }           from './context';
import * as $                 from 'jquery';

import noCameaSrc             from '../img/noCamera.png';
import loadingSrc             from '../img/loading.svg';
import apiNotResponding       from '../img/apiNotResponding.png';
// import deleteIcon          from '../img/delete.png';

import Videos                 from './Videos';
import ConnectionError        from './ConnectionError';

class ContainerVideo extends Component {

  constructor() {
    super();
    this.state = {
      countVideos: 0,
      // mapTestId: [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'}]
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
      $('.menuVideoCameraButton' + id).toggleClass('border-bottom-left-radius-0 border-top-left-radius-0');
      $('.cameraButtons' + id).toggleClass('opacity-on-Move-right');
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
      }else{
        $('.rep_prub').addClass('width-height-7')
                      .removeClass('width-height-1 width-height-2 width-height-3 width-height-5');

        $('.video_stream').addClass('adjustWidthVideo-x7')
                          .removeClass('adjustWidthVideo-x1 adjustWidthVideo-x2 adjustWidthVideo-x3 adjustWidthVideo-x5');
      }
    }

    // pagination = (activatepagination) =>{
    //   // var connection = new NGSI.Connection("http://161.72.123.211:1026");
    //   let actualPage; // CHANGE!!!!!
    //   let active;
    //   // calculating the first and last book to show when moving between pages
    //   let perPage = 1;
    //   let offset = ( perPage * actualPage ) - perPage;
    //   // with this we can move between the pages by clicking on the arrows
    //   let nextPage = actualPage + 1;
    //   let prevPage = actualPage - 1;
    //
    //   var rooms = [];

      // connection.v2.listEntities({ order: [[ "type", "DESC"  ]], offset: offset, limit: perPage}).then(async(response) => {
      //       if (response.results[0]) {
      //
      //         response.results.forEach((entity) => {
      //             rooms.push(entity);
      //         });
      //
      //         let countCamera = await connection.v2.listEntities().then((response) => {
      //             let count = response.results.length;
      //             return count;
      //           });
      //
      //         const totalPages =  Math.ceil( countCamera / perPage );
      //
      //         {/*pagination HTML*/}
      //
      //       }else if(actualPage > totalPages || actualPage <= 0 || isNaN(actualPage)){
      //
      //         {/*error*/}
      //       }
      //
      //     });
        //
        //   const paginationBox =  <div className="bar-bottom">
        //                           <div className="pagination">
        //                             {/*$buttonPREV*/}
        //                               <ul>
        //                                 {/*firstPage*/}{/*pages*/}{/*lastPage*/}
        //                               </ul>
        //                             {/*$buttonNEXT*/}
        //                           </div>
        //                         </div>;
        // }
        //
        // generatePagination = (activatepagination, totalPages, actualPage, prevPage, nextPage) => {
        //   var disabledPrevPage;
        //   var disabledNextPage;
        //   var active;
        //   var pages = [];
        //
        //   if (activatepagination) {
        //
        //     if (prevPage >= 1){
        //        disabledPrevPage = ".";
        //     }else{
        //        disabledPrevPage = "disable_next_or_prev";
        //     }
        //
        //     var $buttonPREV = $("<a className='btn_pagination btn_pagination-left "+ disabledPrevPage +"' href='/camera/"+ prevPage +"'> ◄ </a>");
        //
        //
        //       if (totalPages <= 4){
        //
        //       }else if (actualPage > 2){
        //         var firstPage = $("<li><a className='first numb' href='/camera/1' > 1 </a></li>");
        //
        //         if (actualPage > 3){
        //          var dotsLeft = $("<li><a className='dots'>...</a></li>");
        //         }
        //       }
        //
        //
        //       if (actualPage == totalPages){
        //         prevPage = prevPage - 2;
        //
        //       }else if (actualPage == totalPages - 1){
        //         prevPage = prevPage - 1;
        //       }
        //
        //
        //       if (actualPage == 1){
        //         nextPage= nextPage + 2;
        //
        //       }else if (actualPage == 2){
        //         nextPage= nextPage + 1;
        //       }
        //
        //
        //       for (var i = prevPage; i <= nextPage; ++i) {
        //
        //         if (i > totalPages){
        //           continue
        //         }
        //         if (i == 0){
        //            i= i + 1
        //         }
        //         if (actualPage == i){
        //           active = "active";
        //         }else{
        //           active = "";
        //         }
        //         if (i >= 1){
        //           pages = pages.push($("<li><a className='numb volar "+ active +"' href='camera/"+ i +"''>"+ i +"</a></li>"));
        //         }
        //       }
        //
        //
        //
        //       if (totalPages <= 4){
        //
        //       }else if (actualPage < totalPages - 1){
        //         if (actualPage < totalPages - 2){
        //           var dotsRight = $("<li><a className='dots'> ...</a></li>");
        //         }
        //         var lastPage = $("<li><a className='last numb' href='/camera/" + totalPages +"'> totalPages </a></li>");
        //       }
        //
        //
        //       if (actualPage + 1 <= totalPages){
        //          disabledNextPage = ".";
        //       }else{
        //          disabledNextPage = "disable_next_or_prev";
        //       }
        //
        //
        //     var $buttonNEXT = $("<a className='btn_pagination btn_pagination-right"+ disabledNextPage +"' href='/camera/"+ (actualPage + 1) +"'> ►</a>");
        //
        //   }
        // }


  render(){
    return (
      <Consumer>
      { context => {
        let videos;
        const result = context.idCam; //we save the data in the result variable
        // const result = this.state.mapTestId;
        // console.log(result.length + 'totalPages');

        if (result === undefined){

          videos = <ConnectionError />;

        }else{

          if (result.length > 0) { // if the results found are greater than 0 the images are displayed
            videos = result.map(video =>
               <Videos
                key                = { video.id }
                name               = { video }
                warningDelete      = { this.warningDelete }
                closeWaringDelete  = { this.closeWarningDelete }
                showMenuItems      = { this.showMenuItems }
                coverCamera        = { this.coverCamera }
                showMoreInfo       = { this.showMoreInfo }
                />
            );
            this.state.countVideos = videos.length;
            const countvideo       = this.state.countVideos;
            const _this            = this;
            setTimeout(function(){ _this.adjustVideoContainer(countvideo); }, 1);


          } else { // if not, the component <NotFound> is displayed
            videos = <div>
                      <img className="loading connection_error" src={ noCameaSrc } alt="No Camera Available" />
                      <span className="message_connection_error">No cameras available</span>
                    </div>;
          }
        }

        return(
          <div className="container-cameras-box">
            <div className="rep_prub_cont">
            <div onClick={() => {this.closeWarningDelete()}} className="block-area-for-warning-delete"></div>

            { (context.connectionError) ? <ConnectionError /> :
              (context.apiRestConnectioError) ? <p><img className="loading connection_error" src={ apiNotResponding } alt="loading"/><span className="message_connection_error api_error">APi REST server is not responding...</span></p> :
              (context.loading) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : videos }

            </div>
          </div>
        );
      }}
      </Consumer>
    );
  }
}


export default ContainerVideo;
