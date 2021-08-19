import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleDeleteCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingDelete: true,
      loadingDeleteServer: true,
      connectionError: false,
      connectionErrorServer: false
    };
  }

  handleDelete= () => {
    const _this = this;
    const queryParams = new URLSearchParams(window.location.search);

    const idCamera = queryParams.get('idCamForDelete');
    const typeCam = "Camera";

    console.log(idCamera);

    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

      axios.delete("http://161.72.123.211:1026/v2/entities/"+ idCamera +"?type="+ typeCam +"", { headers: options	})
        .then(response => {
          this.setState({ //save the current state of the data
            loadingDelete: false
          });
          console.log('Camera deleted successfully....');
        })
        .catch(error => {
          this.setState({ //save the current state of the data
            connectionError: true
          });
          console.log('Error fetching and parsing data on the ORION context brocker', error);
        });

      async function deletePost() {
        await axios.delete("https://161.72.123.211:8443/camera/"+ idCamera, { headers: options	})
          .then(response => {
            setTimeout(function(){
            _this.setState({ //save the current state of the data
              loadingDeleteServer: false
            });
          }, 1000);
            console.log('Camera deleted on sever successfully....');
          })
          .catch(error => {
            _this.setState({ //save the current state of the data
              connectionErrorServer: true
            });
            console.log('Error fetching and parsing data on the ORION context brocker', error);
          });
        }
      deletePost();
}


  componentDidMount() {
    this.handleDelete();
  }



  render() {
    const error = <div>pero que?</div>
    return (
      <div className="">

      { (this.state.connectionError) ? error :
        (this.state.connectionErrorServer) ? error :
        (this.state.loadingDelete) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> :
        (this.state.loadingDeleteServer) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <p>Delete Succesfully.. go to <a href="/">Home</a></p> }
      </div>
    );
  }
}

export default HandleDeleteCamera;
