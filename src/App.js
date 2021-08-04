import React, { Component } from 'react';
import kurentoUtils from 'kurento-utils';
import { Provider } from './components/context';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './css/App.css';

import Nav from './components/Nav';
// import CotainerVideo from './components/CotainerVideo';



var connection = new WebSocket('wss://161.72.123.211:8443/kurento');
const map1 = new Map();

class App extends Component {

  constructor() {
    super();
    this.state = {
      connection: connection,
      idCam: [],
      name: 'CamCam',
      loading: true,
      data: {
          count: 0,
          kms : [],
          stun : {
            "urls" : "stun:161.72.123.211:3478"
          },
          turn : {
            "urls" : "turn:161.72.123.211:3478",
            "username" : "guest",
            "credential" : "12345"
          }
      }
    };
  }


  componentDidMount() {
    console.log(this.state.data.stun);
    console.log("Starting connection to WebSocket Server")
    var start_vis = this;
    this.state.connection.onmessage = function(event){

      console.info('Received message: ' + event);
      var parsedMessage = JSON.parse(event.data);

      switch (parsedMessage.id) {
      case 'sdpAnswer':
        start_vis.startVisualice(parsedMessage);
        break;
      case 'error':
        //onError("Error message from server: " + parsedMessage.message);
        break;
      case 'stop':
        //stop();
        break;
      case 'iceCandidate':
        map1.get(parsedMessage.idCam).addIceCandidate(parsedMessage.candidate, function (error) {
              if (error) {
              console.error("Error adding candidate: " + error);
              return;
              }
          });
          break;
      default:
        //onError('Unrecognized message', parsedMessage);
      }
    }
    this.state.connection.onopen = function(event) {
      //console.log(this.state.data);
      console.log("Successfully connected to the echo websocket server...")
    }
  }






  sendMessage = (message) => {
    var jsonMessage = JSON.stringify(message);
    if (this.state.connection == null) {
      console.log('Connection is null');
    } else {
      console.log('Sending message: ' + jsonMessage);
      this.state.connection.send(jsonMessage);
    }
  }




  connect = () => {
    var cp = this;

    axios.get(`https://161.72.123.211:8443/cameras`)
    .then(response => {

      this.setState({ //save the current state of the data
        idCam: response.data,
        loading: false

      });


    var video1 = document.getElementById('gtcInt');
    var video2 = document.getElementById('gtcExt');
    const gtcIntVideo = [video1, video2];

    var idCameras = cp.state.idCam;

      var i;
      for (i = 0; i < 2; i++) {

        console.log(idCameras[i]);
        const camera = idCameras[i];
        const video = gtcIntVideo[i];
        const options = {
          remoteVideo: document.getElementById(camera.id),
          onicecandidate: this.onIceCandidate,
          configuration : { iceServers: [this.state.data.stun, this.state.data.turn]}
        }


        map1.set(camera.id , new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,  function (error) {

          if(error) {
            return console.error(error);
          }

          console.log(camera + ' dentro');
          const id = camera.id;
          this.generateOffer (function (error, offerSdp) {
            if (error) return console.error (error);

            var message = {
              id : 'sdpOffer',
              idCam : camera.id,
              sdpOffer : offerSdp
            }
            cp.sendMessage(message);
          });
        })
      );

    }

    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });


  }


  onIceCandidate = (candidate) => {
    console.log("Local candidate" + JSON.stringify(candidate));
    var message = {
      id: 'onIceCandidate',
      candidate: candidate
    };
    this.sendMessage(message);
  }


  startVisualice = (message) => {
    console.log("SDP answer received from server. Processing ...");
    map1.get(message.idCam).processAnswer (message.sdpAnswer, function (error) {
      if (error) return console.error (error);
    });
  }


  componentWillUnmount(){
    if (this.state.connection != null) {
      this.state.connection.close();
      console.log("Disconnected...")
    }
  }


  render() {
    return (

      <Provider value={{
        data: this.state.idCam,
        loading: this.state.loading
      }}>
      // <BrowserRouter>
      //   <Switch>
        <div className="App">
          <Nav />
            <header className="App-header">

            <div className="App-Body">

            <video id="gtcInt" autoPlay width="500px"></video>
            <video id="gtcExt" autoPlay width="500px"></video>

            <button className="button_to_show" onClick={this.connect}>show</button>

            </div>
            </header>
        </div>
      // </Switch>
      // </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
