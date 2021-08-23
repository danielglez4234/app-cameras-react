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

  // getTriggerNotificationIds = () => {
  //   var data = Notification.data
  //   console.log(data  + ' la data??? ;-;');
  // };

  componentDidMount() {
    $('#userForcamera').hide();
    $('#pwdForCamera').hide();
    // console.log($('#userForcamera'))
    //
    // // $(".update_container").hide().slideDown();
    // console.log(this.state.subscriptionId + 'actual');
    //
    // window.removeEventListener('beforeunload', this.deleteSubscription);
    // window.addEventListener('beforeunload', this.deleteSubscription);
    // this.createSubscription();
    this.deleteSubscription(this.state.subscriptionId);


    // const options = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // };
    // const createBodyEntities = {
    //   "id":"gtc",
    //   "type": "Camera",
    //   "name": {
    //     "type": "String",
    //     "value": "ho"
    //   },
    //   "url": {
    //     "type": "String",
    //     "value": [
    //       {
    //         "id": "procesado",
    //         "status": "active",
    //         "roi": {}
    //       },
    //       {
    //         "id": "procesado",
    //         "status": "active",
    //         "roi": {}
    //       },
    //       {
    //         "id": "algomas",
    //         "status": "disable",
    //         "roi": {}
    //       }
    //     ]
    //   },
    //   "description": {
    //     "type": "String",
    //     "value": "descriptionCamera"
    //   }
    // };
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
    //     console.log('Error fetching and parsing data on the ORION context brocker', error);
    //   });



                          // const pressureValue = 777;
                          // const temperatureValue = 666;
                          // const idEntities = "Room6";
                          // const updateBodyEntities = {
                          //   "pressure": {
                          //     "type":"Integer",
                          //     "value":pressureValue,
                          //     "metadata":{}
                          //   },
                          //   "temperature": {
                          //     "type":"Float",
                          //     "value": temperatureValue,
                          //     "metadata":{}
                          //   }
                          // };
                          // axios.put("http://161.72.123.211:1026/v2/entities/"+ idEntities +"/attrs?options=append", updateBodyEntities, { headers: options	})
                          //   .then(response => {
                          //     console.log('GET SUBSCRIPTION BY URL = ' + response.data.description);
                          //     console.log('GET NOTIFICATION BY CHANGE = ' + response.data.id + ' ' + response.data.id);
                          //   })
                          //   .catch(error => {
                          //     console.log('Error fetching and parsing data on the ORION context brocker', error);
                          //     console.log('ghhjhhj', error);
                          //   });

                          //
                          // const deleteEntityId = "gtcInt3";
                          // const deleteEntityType = "Camera";
                          // axios.delete("http://161.72.123.211:1026/v2/entities/"+ deleteEntityId +"?type="+ deleteEntityType +"", { headers: options	})
                          //   .then(response => {
                          //     console.log('GET SUBSCRIPTION BY URL = ' + response.data.description);
                          //     console.log('GET NOTIFICATION BY CHANGE = ' + response.data.id + ' ' + response.data.id);
                          //   })
                          //   .catch(error => {
                          //     console.log('Error fetching and parsing data on the ORION context brocker', error);
                          //     console.log('ghhjhhj', error);
                          //   });



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
        //
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








        // componentWillUnmount(){
        //     axios.delete("http://161.72.123.211:1026/v2/subscriptions/" + this.state.subscriptionId, body, { headers: options	})
        //       .then(response => {
        //         console.log(response.data.notification.attrs);
        //       })
        //       .catch(error => {
        //         console.log('Error fetching and parsing data on the ORION context brocker', error);
        //         console.log('ghhjhhj', error);
        //       });
        // }




  render(){
  return(
<div className="rep_prub_cont">

      <div className="update_container">
        <div id="title_container" className="mark_title_update mark_title_create">
          <h4 className="title_update_cameras"> Add New Camera </h4>
        </div>
        <form className="formCameras formCamerasCreate" action="/add" method="get">

<div className="formInputsfields">
          <div className="cont-input displayInlineBlock">
            <label for="idCamera" className="label-input">
              <img src={ idIcon } alt="id-camera" className="iconInput iconInput-idcam" />
              <span className="input-label-span input-label-idCam">Id-Camera</span>
            </label>
            <input id="idCamera" name="idCamera" className="input-form input-form-id-camera" placeholder="Id..."/>
          </div>

          <div className="cont-input cont-input-name displayInlineBlock">
            <label for="nameCamera" className="label-input" >
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
             <input id="groupCamera" name="groupCamera" className="input-form input-form-group" placeholder="Group..." />
          </div>

          <br/>

          <div className="cont-input cont-input-url displayInlineBlock">
            <label for="urlCamera" className="label-input" >
              <img src={ urlIcon } alt="url" className="iconInput iconInput-url" />
              <span className="input-label-span input-label-url">URL</span>
            </label>
             <input id="urlCamera" name="urlCamera" className="input-form input-form-url" placeholder="http://... or https://..." />
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
              <textarea id="descriptionCamera" name="descriptionCamera" className="description-input-textarea"></textarea>
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
         $('#userForcamera').addClass('show-cont-input-user-pwd');
         $('#pwdForCamera').addClass('show-cont-input-user-pwd');
       }else {
         $('#userForcamera').removeClass('show-cont-input-user-pwd');
         $('#pwdForCamera').removeClass('show-cont-input-user-pwd');
       }
  }

}


export default CreateCamera;
