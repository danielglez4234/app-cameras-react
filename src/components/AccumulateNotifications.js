import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery';
import axios from 'axios';


class AccumulateNotifications extends Component {

  componentDidMount() {
    this.resiveNotification();
  }

  constructor() {
    super();
    this.state = {
      notificactionData: []
    };
  }

  resiveNotification = () => {
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    axios.post("http://localhost:3000/accumulate", { headers: options	})
      .then(response => {
        console.log('GET Notifications = ' + response.data);
        this.setState({
          notificactionData: response.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data on the ORION context brocker', error);
        console.log('ghhjhhj', error);
      });
  }

  render(){
  return(
    <div>hhh</div>
  );
}

}

export default AccumulateNotifications;
