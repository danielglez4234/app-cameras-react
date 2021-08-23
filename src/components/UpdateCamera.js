import React, { Component }  from 'react';
import axios from 'axios';
// import * as $ from 'jquery';

import loadingSrc from '../img/loading-video.svg';
import idIcon from '../img/id.png';
import nameIcon from '../img/name.png';
import groupIcon from '../img/group.png';
import urlIcon from '../img/url.png';
import userIcon from '../img/user.png';
import pwdIcon from '../img/pwd.png';

import updateMark from '../img/updateMark.png';

class UpdateCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingUpdate: true,
      idNotFound: false,
      camera: [],
      credentials: ""
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const idCamera = queryParams.get('idCam');

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

        // var inputURLcredentials;
        // console.log(response.data.url.value);
        // if (response.data.url.value) {
        //   var urlWithoutCredentials;
        //     inputURLcredentials =  <input id="urlCamera" type="url" defaultValue={response.data.url.value} name="urlCamera" className="width-input-x2" />;
        //     this.setState({
        //       credentials: inputURLcredentials
        //     });
        //     console.log(this.state.credentials + ' credentials');
        // }else {
        //   inputURLcredentials = <input id="urlCamera" type="url" defaultValue={response.data.url.value} name="urlCamera" className="width-input-x2" />;
        //   this.setState({
        //     credentials: inputURLcredentials
        //   });
        // }

      })
      .catch(error => {
        this.setState({ //save the current state of the data
          idNotFound: true
        });
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });
  }

  render(){
    const error = <div className="message-box message-box-error">
                    <i className="fa fa-ban fa-2x"></i>
                    <span className="message-text"><strong>Error:</strong> Internal Server Error - This id cannot be found</span>
                    <a href="/">
                      <i className="fa fa-times fa-2x exit-button "></i>
                    </a>
                  </div>;

  return(
<div className="rep_prub_cont">
{ (this.state.idNotFound) ? error :
    <div className="update_container">
      <div id="title_container" className="mark_title_update mark_title_create">
        <h4 className="title_update_cameras"> Update Camera </h4>
        <img src={ updateMark } alt="update mark" className="icon-updateMark" />
     </div>
      <form className="formCameras" action="/selectedCamera" method="get">
<div className="formInputsfields">

      { (this.state.loadingUpdate) ? <img className="loadingUpdate" src={ loadingSrc } alt="loading"/> :

      <div>

        <div className="cont-input displayInlineBlock">
          <label for="idCamera" className="label-input">
            <img src={ idIcon } alt="id-camera" className="iconInput iconInput-idcam" />
            <span className="input-label-span input-label-idCam">Id-Camera</span>
          </label>
          <input defaultValue={this.state.camera.id} id="idCamera" name="idCamera" className="input-form input-form-id-camera" placeholder="Id..."/>
        </div>

        <div className="cont-input cont-input-name displayInlineBlock">
          <label for="nameCamera" className="label-input" >
            <img src={ nameIcon } alt="name" className="iconInput iconInput-name" />
            <span className="input-label-span input-label-name">Name</span>
          </label>
           <input defaultValue={this.state.camera.name.value} id="nameCamera" name="nameCamera" className="input-form input-form-name" placeholder="Name..." />
        </div>

        <div className="cont-input cont-input-group">
          <label for="groupCamera" className="label-input" >
            <img src={ groupIcon } alt="group" className="iconInput iconInput-group" />
            <span className="input-label-span input-label-group">Group</span>
          </label>
           <input defaultValue={this.state.camera.group.value} id="groupCamera" name="groupCamera" className="input-form input-form-group" placeholder="Group..." />
        </div>
        <br/>

        <div className="cont-input cont-input-url displayInlineBlock">
          <label for="urlCamera" className="label-input" >
            <img src={ urlIcon } alt="url" className="iconInput iconInput-url" />
            <span className="input-label-span input-label-url">URL</span>
          </label>
           <input defaultValue={this.state.camera.url.value.path} id="urlCamera" name="urlCamera" className="input-form input-form-url" placeholder="http://... or https://..." />
        </div>

        <div className="cont-input checkboxUrlCredentials displayInlineBlock">
          <label for="checkCred" className="omrs-input-underlined">
            <input id="checkCred" onClick={this.checkCredentials} id="checkCreandentials" type="checkbox" name="credentialsCheck" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Credentials </span>
          </label>
        </div>
        <br/>
        <div id="userForcamera" className="cont-input-user-pwd cont-input-user">
          <label for="userCamera" className="label-input">
            <img src={ userIcon } alt="user" className="iconInput iconInput-user" />
            <span className="input-label-span input-label-user">User</span>
          </label>
          <input id="userCamera" name="userCamera" className="input-form" placeholder="User name..."/>
        </div>

        <div id="pwdForCamera" className="cont-input-user-pwd cont-input-pwd">
          <label for="pwdCamera" className="label-input">
            <img src={ pwdIcon } alt="pwd" className="iconInput iconInput-pwd" />
            <span className="input-label-span input-label-pwd">Password</span>
          </label>
          <input id="pwdCamera" type="password" pattern=".{6,}" name="pwdCamera" className="input-form" placeholder="Password..."/>
        </div>

        <div className="cont-input displayBlock">
          <span className="input-label-span input-label-description">Description</span>
          <label className="label-input label-input-description">
            <textarea defaultValue={this.state.camera.description.value} id="descriptionCamera" name="descriptionCamera" className="description-input-textarea"></textarea>
          </label>
        </div>

        <br />

        <div className="cont-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input type="checkbox" name="recordImages" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Record images </span>
          </label>
        </div>
        <br />
        <div className="cont-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input type="checkbox" name="processImages" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Process images </span>
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

}
</div>
  );
  }
}


export default UpdateCamera;
