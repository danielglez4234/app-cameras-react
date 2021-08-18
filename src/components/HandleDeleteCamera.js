import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleDeleteCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingCreate: true,
      connectionError: false
    };
  }

  handleDelete = (idCam, typeCam) =>{
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    axios.delete("http://161.72.123.211:1026/v2/entities/"+ idCam +"?type="+ typeCam +"", { headers: options	})
      .then(response => {
        console.log('GET SUBSCRIPTION BY URL = ' + response.data.description);
        console.log('GET NOTIFICATION BY CHANGE = ' + response.data.id + ' ' + response.data.id);
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
        console.log('ghhjhhj', error);
      });
  }


  componentDidMount() {
    this.handleDelete();
  }


  render() {
    const videos = <div>holo</div>;
    const error = <div>pero que?</div>
    return (
      <div className="">

      { (this.state.connectionError) ? error :
        (this.state.loadingCreate) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <Redirect to="/" /> }
      </div>
    );
  }
}

export default HandleDeleteCamera;
