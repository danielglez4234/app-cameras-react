import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleAddCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingCreate: true,
      connectionError: false
    };
  }

  addCamera = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('idCamera');
    const name = queryParams.get('nameCamera');
    const group = queryParams.get('groupCamera');
    const description = queryParams.get('descriptionCamera');


    const recordImagesStatus = queryParams.get('recordImages');
    var recordStatus;
      if (recordImagesStatus === 'on') {

        recordStatus  = "enable";
      }else {

        recordStatus  = "disabled";
      }

    const processImageStatus = queryParams.get('processImages');
    var processStatus;
      if (processImageStatus === 'on') {

        processStatus  = "enable";
      }else {

        processStatus  = "disabled";
      }

    const url = queryParams.get('urlCamera');
    const user = queryParams.get('userCamera');
    const pwd = queryParams.get('pwdCamera');

      const urlpath = user + ':' + pwd + '@' + url;



    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const createBodyEntities = {
      "id": id,
      "type": "Camera",
      "group": {
        "type": "String",
        "value": group
      },
      "name": {
        "type": "String",
        "value": name
      },
      "url": {
        "type": "String",
        "value": url
      },
      "record": {
        "type": "String",
        "value": recordStatus
      },
      "description": {
        "type": "String",
        "value": description
      }
    };
    axios.post("http://161.72.123.211:1026/v2/entities", createBodyEntities, { headers: options	})
      .then(response => {
        this.setState({ //save the current state of the data
          loadingCreate: false
        });
      })
      .catch(error => {

        this.setState({ //save the current state of the data
          connectionError: true
        });
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });

  }


  componentDidMount() {
    this.addCamera();
  }

  render() {
    const error = <div>pero que?</div>
    return (
      <div className="">

      { (this.state.connectionError) ? error :
        (this.state.loadingCreate) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <p>Creation Succesfully.. go to <a href="/">Home</a></p> }
      </div>
    );
  }
}

export default HandleAddCamera;
