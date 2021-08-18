import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleUpdateCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingCreate: true,
      connectionError: false
    };
  }

  handleUpdate = (idCamera, nameCamera, urlCamera, descriptionCamera) => {
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const updateBodyEntities = {
      "id": idCamera,
      "type": "Camera",
      "name": {
        "type": "String",
        "value": nameCamera
      },
      "url": {
        "type": "String",
        "value": urlCamera
      },
      "description": {
        "type": "String",
        "value": descriptionCamera
      }
    };
    axios.put("http://161.72.123.211:1026/v2/entities/"+ idCamera +"/attrs?options=append", updateBodyEntities, { headers: options	})
      .then(response => {
        console.log('camera updated successfully');
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });
  }


  componentDidMount() {
    this.handleUpdate();
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

export default HandleUpdateCamera;
