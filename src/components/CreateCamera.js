import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery';
import axios from 'axios';
import NGSI from 'ngsijs';
import '../setProxy.js';
// import notifee from '@notifee/react-native';

// async function onDisplayNotification() {
//   await notifee.displayNotification({
//   });
// }

// import { v4 as uuidv4 } from 'uuid';
//
// var userSessionId;
//
//
//    if(localStorage.getItem('session_id')){
//        userSessionId = localStorage.getItem('session_id');
//    } else {
//        localStorage.setItem('session_id', uuidv4());
//        userSessionId = localStorage.getItem('session_id');
//    }
// console.log(localStorage.getItem('userSessionId'));
// console.log(userSessionId);


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
      "url": "http://localhost:1028/"
      }
    },
    "duration":"PT10S",
    "throttling": 1
  };


let subscriptionIdA;
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
    console.log($('#userForcamera'))
    //
    // // $(".update_container").hide().slideDown();
    // console.log(this.state.subscriptionId + 'actual');
    //
    // // window.removeEventListener('beforeunload', this.deleteSubscription);
    // window.addEventListener('beforeunload', this.deleteSubscription);
    // // this.createSubscription();
    // this.deleteSubscription(this.state.subscriptionId);






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
                          const deleteEntityId = "gtcInt3";
                          const deleteEntityType = "Camera";
                          axios.delete("http://161.72.123.211:1026/v2/entities/"+ deleteEntityId +"?type="+ deleteEntityType +"", { headers: options	})
                            .then(response => {
                              console.log('GET SUBSCRIPTION BY URL = ' + response.data.description);
                              console.log('GET NOTIFICATION BY CHANGE = ' + response.data.id + ' ' + response.data.id);
                            })
                            .catch(error => {
                              console.log('Error fetching and parsing data on the ORION context brocker', error);
                              console.log('ghhjhhj', error);
                            });



  }



        //
        // deleteSubscription = () => {
        //   console.log(this.state.subscriptionId + " dentro delete");
        //   axios.delete("http://161.72.123.211:1026/v2/subscriptions/" + this.state.subscriptionId, body, { headers: options	})
        //     .then(response => {
        //       console.log("subscription was reset successfully");
        //     })
        //     .catch(error => {
        //       console.log('Error fetching and parsing data on the ORION context brocker', error);
        //       console.log('ghhjhhj', error);
        //     });
        // }
        //
        // createSubscription = () => {
        //   axios.post("http://161.72.123.211:1026/v2/subscriptions", body, { headers: options	})
        //     .then(response => {
        //         this.setState({ //save the current state of the data
        //           subscriptionId: response.headers['location'].split('/')[3]
        //         });
        //         console.log(response.headers['location'].split('/')[3]);
        //         console.log(this.state.subscriptionId + " dentro creación");
        //     })
        //     .catch(error => {
        //       console.log('Error fetching and parsing data on the ORION context brocker', error);
        //       console.log('ghhjhhj', error);
        //     });
        // }








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

      <div className="update_container">
        <div className="mark_title_update mark_title_create">
       <h4 className="title_update_cameras"> Add New Camera </h4>
       </div>
        <form className="formCameras" action="/add" method="get">

          <div className="omrs-input-group width-input-1">
            <label className="omrs-input-underlined label-input-idCamera">
              <input disabled  className="idicator-input-IdCamera displayInlineBlock" value="gtc" />
              <input required name="idCamera" className="width-input-1 border-radius-left-0 displayInlineBlock" />
              <span className="omrs-input-label margin-left-50"> Id-Camera </span>
            </label>
          </div>

          <div className="omrs-input-group margin-left-50">
            <label className="omrs-input-underlined">
              <input required name="nameCamera"/>
              <span className="omrs-input-label"> Name </span>
            </label>
          </div>
          <br/>
          <div className="omrs-input-group displayInlineBlock">
            <label className="omrs-input-underlined">
              <input required name="urlCamera" className="width-input-x2" />
              <span className="omrs-input-label"> URL </span>
            </label>
          </div>

          <div className="omrs-input-group checkboxUrlCredentials displayInlineBlock">
            <label className="omrs-input-underlined">
              <input onClick={this.checkCredentials} required id="checkCreandentials" type="checkbox" className="width-input-1 credentials-input" />
              <span className="omrs-input-label-Credentials"> Credentials </span>
            </label>
          </div>
          <br/>

          <div id="userForcamera" className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required name="userCamera" />
              <span className="omrs-input-label"> User </span>
            </label>
          </div>

          <div id="pwdForCamera" className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input type="password" pattern=".{6,}" required name="pwdCamera" />
              <span className="omrs-input-label"> Password </span>
            </label>
          </div>

          <div className="omrs-input-group displayBlock">
            <label className="omrs-input-underlined">
              <textarea required name="description"></textarea>
              <span className="omrs-input-label span-label-input-decription"> Description </span>
            </label>
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
          </div>
          <button type="reset" className="btn-6 btn-6-reset">
            <i className="fa fa-reply fa-lg icon-FormButton-reset"></i>
            <span className="reset"> Reset </span>
          </button>

      </form>
      <div className="buttonsDiv-background"></div>

    </div>


  );
  }

  checkCredentials = () => {
       if ($('#checkCreandentials:checkbox:checked').length > 0) {
         $('#userForcamera').fadeIn("fast");
         $('#pwdForCamera').fadeIn("fast");
       }else {
         $('#userForcamera').val('').hide();
         $('#pwdForCamera').val('').hide();
       }
  }

}


export default CreateCamera;
