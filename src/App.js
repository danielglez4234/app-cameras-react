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

import loadingSrc from './img/loading.svg';
import apiNotResponding from './img/apiNotResponding.png';
// import './css/style.css';

import Nav from './components/Nav';
import ContainerVideo from './components/ContainerVideo';
import PageNotFound from './components/PageNotFound';
import ConnectionError from './components/ConnectionError';
import UpdateCamera from './components/UpdateCamera';
import CreateCamera from './components/CreateCamera';


var connection = new WebSocket('wss://161.72.123.211:8443/kurento');
const mapKms = new Map();
const mapIdCamTest = new Map();

class App extends Component {

  constructor() {
    super();
    this.state = {
      connection: connection,
      idCam: [],
      idCamTest: ['abc'],
      loading: false,
      connectionError: false,
      apiRestConnectioError: false,
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
    const cp = this;
    // console.log(this.state.data.stun);
    console.log("Starting connection to WebSocket Server")
    var start_vis = this;
    this.state.connection.onmessage = function(event){

      // console.info('Received message: ' + event);
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
        mapKms.get(parsedMessage.idCam).addIceCandidate(parsedMessage.candidate, function (error) {
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
      // setTimeout(function () {
        cp.connect();
      // }, 5000);
      console.log("Successfully connected to the websocket server...")
    }
    this.state.connection.onclose = function(event) {
      cp.setState({ //save the current state of the data
        connectionError: false
      });
      console.log("Failed to connect to the websocket server...")
    }
  }






  sendMessage = (message) => {
    var jsonMessage = JSON.stringify(message);
    if (this.state.connection == null) {
      console.log('Connection is null');
    } else {
      // console.log('Sending message: ' + jsonMessage);
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


    var idCameras = cp.state.idCam;

      var i;
      for (i = 0; i < 2; i++) {

        // console.log(idCameras[i]);
        const camera = idCameras[i];

        const options = {
          remoteVideo: document.getElementById(camera.id),
          onicecandidate: this.onIceCandidate,
          configuration : { iceServers: [this.state.data.stun, this.state.data.turn]}
        }

        mapKms.set(camera.id , new kurentoUtils.WebRtcPeer.WebRtcPeerRecvonly(options,  function (error) {

          if(error) {
            return console.error(error);
          }

          // console.log(camera + ' dentro');

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
      this.setState({ //save the current state of the data
        apiRestConnectioError: false
      });
    });


  }


  onIceCandidate = (candidate) => {
    // console.log("Local candidate" + JSON.stringify(candidate));
    var message = {
      id: 'onIceCandidate',
      candidate: candidate
    };
    this.sendMessage(message);
  }


  startVisualice = (message) => {
    console.log("SDP answer received from server. Processing ...");
    mapKms.get(message.idCam).processAnswer (message.sdpAnswer, function (error) {
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
        idCam: this.state.idCam,
        idCamTest: this.state.idCamTest,
        loading: this.state.loading,
        connectionError: this.state.connectionError,
        apiRestConnectioError: this.state.apiRestConnectioError
      }}>
      <BrowserRouter>
        <Nav />
        <div className="rep_prub_cont">
          <Switch>
            <Route exact path="/" render={() => // if loading is true h3 is displayed, else the gallery is shown
              (this.state.connectionError) ? <ConnectionError /> :
              (this.state.apiRestConnectioError) ? <p><img className="loading connection_error" src={ apiNotResponding } alt="loading"/><span class="message_connection_error api_error">APi REST server is not responding...</span></p> :
              (this.state.loading) ? <img className="loading connection_error" src={ loadingSrc } alt="loading"/> : <ContainerVideo />
            } />
            <Route path="/list" render={() => <ContainerVideo /> } />
            <Route path="/create" render={() => <CreateCamera /> } />
            <Route path="/update" render={() => <UpdateCamera /> } />

            <Route component={PageNotFound} /> {/*only appears when no route matches*/}

          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
