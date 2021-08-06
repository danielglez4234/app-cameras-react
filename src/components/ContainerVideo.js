import React, { Component }  from 'react';
import { Consumer } from './context';
import { withRouter } from 'react-router-dom';

import noCameaSrc from '../img/noCamera.png';
import loadingSrc from '../img/loading.svg';
import apiNotResponding from '../img/apiNotResponding.png';

import Videos from './Videos';
import NotFound from './NotFound';
import ConnectionError from './ConnectionError';

class ContainerVideo extends Component {

  render(){
    return (
      <Consumer>
      { context => {
        let videos;
        const result = context.idCam; //we save the data in the result variable
        // console.log(result.length + 'totalPages');

        if (result === undefined){

          videos = <ConnectionError />;

        }else{

          if (result.length > 0) { // if the results found are greater than 0 the images are displayed
            videos = result.map(video =>
               <Videos
                key={ video.id }
                name={ video }
              //  url={ `https://farm${video.farm}.staticflickr.com/${video.server}/${video.id}_${video.secret}.jpg` }
              //  title= { video.title }
                />
            );
          } else { // if not, the component <NotFound> is displayed
            videos = <div>
                      <img className="loading connection_error" src={ noCameaSrc } alt="No Camera Available" />
                      <span className="message_connection_error">No cameras available</span>
                    </div>;
          }
        }

        return(
          <div>

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
