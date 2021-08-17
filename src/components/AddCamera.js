import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class AddCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingCreate: true,
      connectionError: false
    };
  }

  handleAddCamera = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const idCamera = queryParams.get('idCamera');
    const nameCamera = queryParams.get('nameCamera');
    const descriptionCamera = queryParams.get('description');


    const urlCamera = queryParams.get('urlCamera');
    const userCamera = queryParams.get('userCamera');
    const pwdCamera = queryParams.get('pwdCamera');

      const urlpath = userCamera + ':' + pwdCamera + '@' + urlCamera;

    console.log(idCamera, nameCamera, descriptionCamera, urlpath);

    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const createBodyEntities = {
      "id":"gtc" + idCamera,
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
    // axios.post("http://161.72.123.211:1026/v2/entities", createBodyEntities, { headers: options	})
    //   .then(response => {
    //     const _this = this;
    //     setTimeout(function(){
    //     _this.setState({ //save the current state of the data
    //       loadingCreate: false
    //     });
    //     }, 1000);
    //   })
    //   .catch(error => {
    //
    //     this.setState({ //save the current state of the data
    //       connectionError: true
    //     });
    //
    //     console.log('Error fetching and parsing data on the ORION context brocker', error);
    //     console.log('ghhjhhj', error);
    //   });

  }


  componentDidMount() {
    this.handleAddCamera();
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

export default AddCamera;
