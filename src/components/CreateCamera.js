import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery';
import axios from 'axios';
import NGSI from 'ngsijs';
import '../setProxy.js';

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

  componentDidMount() {



    // $(".update_container").hide().slideDown();
    console.log(this.state.subscriptionId);

    // window.removeEventListener('beforeunload', this.deleteSubscription);
    window.addEventListener('beforeunload', this.deleteSubscription);
    this.createSubscription();
    // this.deleteSubscription(this.state.subscriptionId);

    // axios.get("http://161.72.123.211:1026/v2/subscriptions", { headers: options	})
    //   .then(response => {
    //       this.setState({ //save the current state of the data
    //         sds: response.headers['location'].split('/')[3]
    //       });
    //       console.log(response.data.id);
    //       console.log(this.state.subscriptionId + " dentro creación");
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data on the ORION context brocker', error);
    //     console.log('ghhjhhj', error);
    //   });

    // axios.get("http://161.72.123.211:1026/v2/subscriptions", { headers: options	})
    //   .then(response => {
    //     console.log(response.data[0].id);
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data on the ORION context brocker', error);
    //     console.log('ghhjhhj', error);
    //   });



                        const createBodyEntities = {
                          "id":"Room7",
                          "type":"Room",
                          "pressure": {
                            "type":"Integer",
                            "value":14434340000,
                            "metadata":{}
                          },
                          "temperature": {
                            "type":"Float",
                            "value":123123123123,
                            "metadata":{}
                          }
                        };
                        axios.post("http://161.72.123.211:1026/v2/entities", createBodyEntities, { headers: options	})
                          .then(response => {
                            console.log('GET ENTITIES BY ID = ' + response.data[3].temperature.type);

                          })
                          .catch(error => {
                            console.log('Error fetching and parsing data on the ORION context brocker', error);
                            console.log('ghhjhhj', error);
                          });








                        //
                        //   const updateBodyEntities = {
                        //     "id":"Room3",
                        //     "type":"Room",
                        //     "pressure": {
                        //       "type":"Integer",
                        //       "value":800000000000,
                        //       "metadata":{}
                        //     },
                        //     "temperature": {
                        //       "type":"Float",
                        //       "value":4400000000,
                        //       "metadata":{}
                        //     }
                        //   };
                        //   axios.put("http://161.72.123.211:1026/v2/entities", updateBodyEntities, { headers: options	})
                        //     .then(response => {
                        //       console.log('GET SUBSCRIPTION BY URL = ' + response.data.description);
                        //       console.log('GET NOTIFICATION BY CHANGE = ' + response.data.id + ' ' + response.data.id);
                        //     })
                        //     .catch(error => {
                        //       console.log('Error fetching and parsing data on the ORION context brocker', error);
                        //       console.log('ghhjhhj', error);
                        //     });
                        //


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
                console.log(response.headers['location'].split('/')[3]);
                console.log(this.state.subscriptionId + " dentro creación");
            })
            .catch(error => {
              console.log('Error fetching and parsing data on the ORION context brocker', error);
              console.log('ghhjhhj', error);
            });
        }



        //
        // componentDidUpdate() {
        //   console.log('macarena');
        //   /* ... */
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
       <h4 className="title_update_cameras"> Create New Camera </h4>
       </div>
        <form className="formCameras">

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label"> Name </span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label"> Location </span>
            </label>
          </div>

          <div className="omrs-input-group displayBlock">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label"> URL </span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label"> Model </span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input required />
              <span className="omrs-input-label"> Id-Camera </span>
            </label>
          </div>

          <div className="buttons-cont">
            <button className="btn-6">
              <span className="submit"> Create </span>
            </button>
            <button className="btn-6">
                <span className="cancel"> Cancel </span>
            </button>
          </div>
      </form>


    </div>


  );
  }
}


export default CreateCamera;
