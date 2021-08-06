import React from 'react';

import connectErrorSrc from '../img/connection_error.png';

const ConnectionError = () => {
  return(

    <p>

      <img className="loading connection_error" src={ connectErrorSrc } alt="loading"/>
      <span className="message_connection_error error_kurento">Failed to connect to the websocket server...</span>

    </p>

  );
}


export default ConnectionError;
