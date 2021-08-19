import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import loadingSrc from '../img/loading.svg';

class HandleUpdateCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingUpdate: true,
      connectionError: false
    };
  }

  handleUpdate = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const idCamera = queryParams.get('idCamera');
    const nameCamera = queryParams.get('nameCamera');
    const descriptionCamera = queryParams.get('description');


    const urlCamera = queryParams.get('urlCamera');
    const userCamera = queryParams.get('userCamera');
    const pwdCamera = queryParams.get('pwdCamera');

    var urlpath;
    if (userCamera || pwdCamera) {
       urlpath = userCamera + ':' + pwdCamera + '@' + urlCamera;
    }else {
      urlpath = urlCamera;
    }
    // console.log(urlpath);


    console.log(idCamera, nameCamera, descriptionCamera, urlCamera);
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const updateBodyEntities = {
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
    axios.patch("http://161.72.123.211:1026/v2/entities/"+ idCamera +"/attrs?options=append", updateBodyEntities, { headers: options	})
      .then(response => {
        this.setState({ //save the current state of the data
          loadingUpdate: false
        });
        console.log('Camera updated successfully....');
      })
      .catch(error => {
        this.setState({ //save the current state of the data
          connectionError: true
        });
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });
  }


  componentDidMount() {
    this.handleUpdate();
  }


  render() {
    const error = <div>pero que?</div>
    return (
      <div className="">

      { (this.state.connectionError) ? error :
        (this.state.loadingUpdate) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <Redirect to="/" /> }
      </div>
    );
  }
}

export default HandleUpdateCamera;
