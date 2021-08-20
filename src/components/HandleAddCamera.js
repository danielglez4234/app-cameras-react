import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleAddCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingCreate: true,
      connectionError: false,
      id: null
    };
  }


  addCamera = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('idCamera');
    this.setState({
      showId: id
    });
    const name = queryParams.get('nameCamera');
    const group = queryParams.get('groupCamera');
    const description = queryParams.get('descriptionCamera');


    const recordImagesStatus = queryParams.get('recordImages');
    var recordStatus;
      if (recordImagesStatus === 'on') {
        recordStatus = true;
      }else {
        recordStatus = false;
      }

    const processImageStatus = queryParams.get('processImages');
    var processStatus;
      if (processImageStatus === 'on') {
        processStatus  = true;
      }else {
        processStatus  = false;
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
      "id": "gtc" + id,
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
      "kurentoConfig": {
        "type": "Boolean",
        "value": {
          "record": recordStatus,
          "process": processStatus,
          "addressLocality": false,
          "postalCode": false
        },
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
        (this.state.loadingCreate) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <p>The camera <b>{this.state.showId}</b> was created successfully.. go to <a href="/">Home</a></p> }
      </div>
    );
  }
}

export default HandleAddCamera;