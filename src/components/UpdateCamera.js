import React, { Component }  from 'react';
import axios from 'axios';
// import * as $ from 'jquery';

import loadingSrc from '../img/loading-video.svg';

class UpdateCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingUpdate: true,
      connectionError: false,
      camera: []
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const idCamera = queryParams.get('idCam');
    console.log(idCamera);

    this.getCameraById(idCamera);
  }

  getCameraById = (id) =>{
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    axios.get("http://161.72.123.211:1026/v2/entities/"+ id,  { headers: options	})
      .then(response => {
        this.setState({ //save the current state of the data
          camera: response.data,
          loadingUpdate: false
        });
        console.log(response.data);
        console.log(this.state.camera)
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });
  }

  render(){
  return(


    <div className="update_container">
      <div id="title_container" className="mark_title_update mark_title_create">
        <h4 className="title_update_cameras"> Update Camera </h4>
     </div>
      <form className="formCameras" action="/selectedCamera" method="get">
<div className="formInputsfields">
      { (this.state.loadingUpdate) ? <img className="loadingUpdate" src={ loadingSrc } alt="loading"/> :
      <div>

        <div className="omrs-input-group width-input-1">
          <label className="omrs-input-underlined label-input-idCamera">
            <input disabled className="idicator-input-IdCamera displayInlineBlock" value="gtc" />
            <input id="idCamera" defaultValue={this.state.camera.id} name="idCamera" className="idCamera2 width-input-1 border-radius-left-0 displayInlineBlock" />
            <span className="omrs-input-label margin-left-50"> Id-Camera </span>
          </label>
        </div>

        <div className="omrs-input-group margin-left-50">
          <label className="omrs-input-underlined">
            <input id="nameCamera" defaultValue={this.state.camera.name.value} name="nameCamera"/>
            <span className="omrs-input-label"> Name </span>
          </label>
        </div>

        <div className="omrs-input-group margin-left-50">
          <label className="omrs-input-underlined">
            <input id="groupCamera" name="groupCamera"/>
            <span className="omrs-input-label"> Group </span>
          </label>
        </div>
        <br/>
        <div className="omrs-input-group displayInlineBlock">
          <label className="omrs-input-underlined">
            <input id="urlCamera" type="url" defaultValue={this.state.camera.url.value} name="urlCamera" className="width-input-x2" />
            <span className="omrs-input-label"> URL </span>
          </label>
        </div>

        <div className="omrs-input-group checkboxUrlCredentials displayInlineBlock">
          <label className="omrs-input-underlined">
            <input onClick={this.checkCredentials} id="checkCreandentials" type="checkbox" className="width-input-1 credentials-input" />
            <span className="omrs-input-label-Credentials"> Credentials </span>
          </label>
        </div>
        <br/>
        <div id="userForcamera" className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input id="userCamera" name="userCamera" />
            <span className="omrs-input-label"> User </span>
          </label>
        </div>

        <div id="pwdForCamera" className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input id="pwdCamera" type="password" pattern=".{6,}" name="pwdCamera" />
            <span className="omrs-input-label"> Password </span>
          </label>
        </div>

        <div className="omrs-input-group displayBlock">
          <label className="omrs-input-underlined">
            <textarea id="descriptionCamera" defaultValue={this.state.camera.description.value} name="description" className="description-input-textarea"></textarea>
            <span className="omrs-input-label span-label-input-decription"> Description </span>
          </label>
        </div>
        <br />
        <div className="omrs-input-group checkbox-record-images-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input type="checkbox" name="recordImages" className="width-input-1 credentials-input" />
            <span className="omrs-input-label-Credentials"> Record images </span>
          </label>
        </div>
        <br />
        <div className="omrs-input-group checkbox-record-images-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input type="checkbox" name="processImages" className="width-input-1 credentials-input" />
            <span className="omrs-input-label-Credentials"> Process images </span>
          </label>
        </div>

      </div>

 }
</div>
        <div className="buttons-cont">
          <button className="btn-6">
            <i className="fa fa-undo fa-lg icon-FormButton"></i>
            <span className="submit"> Update </span>
          </button>

          <a  href="/" className="btn-6 btn-6-cancel">
              <i className="fa fa-arrow-circle-left fa-lg icon-FormButton-cancel"></i>
              <span className="cancel"> Cancel </span>
          </a>

          <button type="reset" className="btn-6 btn-6-reset">
            <i className="fa fa-reply fa-lg icon-FormButton-reset"></i>
            <span className="reset"> Reset </span>
          </button>
        </div>

    </form>

  </div>
  );
  }
}


export default UpdateCamera;
