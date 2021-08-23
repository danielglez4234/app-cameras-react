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

    var urlpath;
    const regexhttps = /^https:\/\/+/;
    const regexhttp = /^http:\/\/+/;
    var url = queryParams.get('urlCamera');
    const credentialsCheck = queryParams.get('credentialsCheck');
      const user = queryParams.get('userCamera');
      const pwd = queryParams.get('pwdCamera');

    var credentials;
    if (credentialsCheck === 'on') {
      credentials = true;
      if (regexhttps.test(url)) {
        url = url.slice(8);
        urlpath = 'https://' + user + ':' + pwd + '@' + url;

      }else{
        url.replace(regexhttp, ' ');
        url = url.slice(7);
        var ela = urlpath = 'http://' + user + ':' + pwd + '@' + url;
        console.log(ela);
      }
    }else {
      credentials = false;
      urlpath = url;
    }






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
        "value":{
          "credentials": credentials,
          "path": urlpath
         }
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
    const error = <div className="message-box message-box-error">
                    <i className="fa fa-ban fa-2x"></i>
                    <span className="message-text"><strong>Error:</strong> Internal Server Error</span>
                    <a href="/">
                      <i className="fa fa-times fa-2x exit-button "></i>
                    </a>
                  </div>;
    const success = <div className="message-box message-box-success">
                        <i className="fa fa-check fa-2x"></i>
                        <span className="message-text"><strong>Success:</strong> Camera created correctly</span>
                        <a href="/">
                          <i className="fa fa-times fa-2x exit-button "></i>
                        </a>
                      </div>;
    // const success = <p>The camera <b>{this.state.showId}</b> was created successfully.. go to <a href="/">Home</a></p>
    return (
      <div className="rep_prub_cont">

      { (this.state.connectionError) ? error :
        (this.state.loadingCreate) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : success }
      </div>
    );
  }
}

export default HandleAddCamera;
