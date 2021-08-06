import React from 'react';

const PageNotFound = () => {
  return(
    <p>
    <h1 className="error_title"> Oops! the page you are trying to enter cannot be found. </h1>
    <p className="error_icon"> (╯°□°)╯︵ ┻┻ </p>
      <p className="error_icon_message"> Not found </p>
      <p className="error_icon_status"> 404 </p>

    <div className="decarationDivErrorRight"></div>
    <div className="decarationDivErrorleft"></div>
    </p>
  );
}


export default PageNotFound;
