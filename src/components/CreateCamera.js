import React, { Component }  from 'react';
import * as $ from 'jquery';
import axios from 'axios';
import '../setProxy.js';

import idIcon from '../img/id.png';
import nameIcon from '../img/name.png';
import groupIcon from '../img/group.png';
import urlIcon from '../img/url.png';
import userIcon from '../img/user.png';
import pwdIcon from '../img/pwd.png';
import arrowDown from '../img/arrowDown.png';


const options = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
const body = {
   "method": "POST",
    "description": "Get a norification when ANY attribute is change",
    "subject": {
      "entities": [
        {
        "idPattern": ".*"
        }
      ]
    },
    "notification": {
    "onlyChangedAttrs":true,
      "http": {
      "url": "http://localhost:3000/"
      }
    },
    "duration":"PT10S",
    "throttling": 1
  };



class CreateCamera extends Component {

  constructor() {
    super();
    this.state = {
      subscriptionId: "",
      notificactionData: []

    };
  }

  componentDidMount() {
    // window.removeEventListener('beforeunload', this.deleteSubscription);
    // window.addEventListener('beforeunload', this.deleteSubscription);
    // this.createSubscription();
    // this.deleteSubscription(this.state.subscriptionId);
  }

  deleteSubscription = () => {
    console.log(this.state.subscriptionId + " dentro delete");
    axios.delete("http://161.72.123.211:1026/v2/subscriptions/" + this.state.subscriptionId, body, { headers: options	})
      .then(response => {
        console.log("subscription was reset successfully");
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
        console.log('ghhjhhj', error);
      });
  }

  createSubscription = () => {
    axios.post("http://161.72.123.211:1026/v2/subscriptions", body, { headers: options	})
      .then(response => {
          this.setState({ //save the current state of the data
            subscriptionId: response.headers['location'].split('/')[3]
          });
          // console.log(response.headers['location'].split('/')[3]);
          // console.log(this.state.subscriptionId + " dentro creación");
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
        console.log('ghhjhhj', error);
      });
  }



  render(){
  return(
<div className="rep_prub_cont">

      <div className="update_container">
        <div id="title_container" className="mark_title_update mark_title_create">
          <h4 className="title_update_cameras"> Add New Camera </h4>
        </div>
        <form className="formCameras formCamerasCreate" action="/add" method="get">

<div className="formInputsfields">
          <div className="cont-input cont-input-idCam displayInlineBlock">
            <label htmlFor="idCamera" className="label-input">
              <img src={ idIcon } alt="id-camera" className="iconInput iconInput-idcam" />
              <span className="input-label-span input-label-idCam">Id-Camera</span>
            </label>
            <input id="idCamera" name="idCamera" className="input-form input-form-id-camera" placeholder="Id..."/>
          </div>

          <div className="cont-input cont-input-name displayInlineBlock">
            <label htmlFor="nameCamera" className="label-input" >
              <img src={ nameIcon } alt="name" className="iconInput iconInput-name" />
              <span className="input-label-span input-label-name">Name</span>
            </label>
             <input id="nameCamera" name="nameCamera" className="input-form input-form-name" placeholder="Name..." />
          </div>

          <div className="cont-input cont-input-group">
            <label for="groupCamera" className="label-input" >
              <img src={ groupIcon } alt="group" className="iconInput iconInput-group" />
              <span className="input-label-span input-label-group">Group</span>
            </label>
            <dl className="dropdown">
                <dt>
                <a href="#">
                  <span className="hida">Select</span>
                  <p className="multiSel"></p>
                  <img src={ arrowDown } alt="arrow down" className="iconInput iconInput-arrowDown" />
                </a>
                </dt>
                <dd>
                    <div className="mutliSelect">
                        <ul>
                            <li>
                                <label htmlFor="interiorGTC" className="label-input-select" >Intetrior GTC</label>
                                <input id="interiorGTC" type="checkbox" value="Intetrior GTC" />
                            </li>
                            <li>
                                <label htmlFor="exteriorGTC" className="label-input-select" >Exterior GTC</label>
                                <input id="exteriorGTC" type="checkbox" value="Exterior GTC" />
                            </li>
                            <li>
                                <label htmlFor="offices" className="label-input-select" >Offices</label>
                                <input id="offices" type="checkbox" value="Offices" />
                            </li>
                            <li>
                                <label htmlFor="dome" className="label-input-select" >Dome</label>
                                <input id="dome" type="checkbox" value="Dome" />
                            </li>
                            <li>
                                <label htmlFor="corridor" className="label-input-select" >Corridor</label>
                                <input id="corridor" type="checkbox" value="Corridor" />
                            </li>
                            <li>
                                <label htmlFor="others" className="label-input-select" >Others</label>
                                <input id="others" type="checkbox" value="Others" />
                            </li>
                        </ul>
                    </div>
                </dd>
            </dl>
          </div>

          <br/>

          <div className="cont-input cont-input-url displayInlineBlock">
            <label htmlFor="urlCamera" className="label-input" >
              <img src={ urlIcon } alt="url" className="iconInput iconInput-url" />
              <span className="input-label-span input-label-url">URL</span>
            </label>
             <input id="urlCamera" name="urlCamera" className="input-form input-form-url" placeholder="http://... or https://..." />
          </div>


          <div className="cont-input checkboxUrlCredentials displayInlineBlock">
            <label htmlFor="checkCreandentials" className="omrs-input-underlined">
              <input onClick={this.checkCredentials} id="checkCreandentials" type="checkbox" name="credentialsCheck" className="width-input-1 credentials-input" />
              <span className="input-label-checkCredentials"> Credentials </span>
            </label>
          </div>
          <br/>

        <div className="credentials-section">
          <div id="userForcamera" className="cont-input-user">
            <label htmlFor="userCamera" className="label-input">
              <img src={ userIcon } alt="user" className="iconInput iconInput-user" />
              <span className="input-label-span input-label-user">User</span>
            </label>
            <input id="userCamera" name="userCamera" className="input-form" placeholder="User name..."/>
          </div>


          <div id="pwdForCamera" className="cont-input-pwd">
            <label htmlFor="pwdCamera" className="label-input">
              <img src={ pwdIcon } alt="pwd" className="iconInput iconInput-pwd" />
              <span className="input-label-span input-label-pwd">Password</span>
            </label>
            <input id="pwdCamera" type="password" name="pwdCamera" className="input-form" placeholder="Password..."/>
          </div>

          <div id="confirmPwdForcamera" className=" cont-input-confirm-pwd">
            <label htmlFor="confirmPwdCamera" className="label-input">
              <img src={ pwdIcon } alt="confirm-pwd" className="iconInput iconInput-confirm-pwd" />
              <span className="input-label-span input-label-confirm-pwd">Confirm Password</span>
            </label>
            <input id="confirmPwdCamera" type="password" className="input-form" placeholder="Confirm Password..."/>
          </div>
        </div>

          <div className="cont-input displayBlock">
            <span className="input-label-span input-label-description">Description</span>
            <label htmlFor="descriptionCamera" className="label-input label-input-description">
              <textarea id="descriptionCamera" name="descriptionCamera" className="description-input-textarea"></textarea>
            </label>
          </div>

          <br />

          <div className="cont-input displayInlineBlock">
            <label htmlFor="recordImages" className="omrs-input-underlined">
              <input id="recordImages" type="checkbox" name="recordImages" className="width-input-1 credentials-input" />
              <span className="input-label-checkCredentials"> Record images </span>
            </label>
          </div>
          <br />
          <div className="cont-input displayInlineBlock">
            <label htmlFor="processImages" className="omrs-input-underlined">
              <input id="processImages" type="checkbox" name="processImages" className="width-input-1 credentials-input" />
              <span className="input-label-checkCredentials"> Process images </span>
            </label>
          </div>
  </div>


          <div className="buttons-cont">
            <button className="btn-6">
              <i className="fa fa-folder-open fa-lg icon-FormButton"></i>
              <span className="submit"> Create </span>
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

</div>

  );
  }

  checkCredentials = () => {
       if ($('#checkCreandentials:checkbox:checked').length > 0) {
         $('.credentials-section').addClass('show-credential-section');
       }else {
         $('.credentials-section').removeClass('show-credential-section');
       }
  }

}


export default CreateCamera;
