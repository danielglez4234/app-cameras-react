import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import * as $ from 'jquery';

class CreateCamera extends Component {

  componentDidMount() {
    $(".update_container").hide().slideDown();
  }

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

      <div className="decoration-bottomleftUpdate decoration-bottomLeft1"></div>
      <div className="decoration-bottomleftUpdate decoration-bottomLeft2"></div>
      <div className="decoration-bottomRightUpdate decoration-bottomRight1"></div>
      <div className="decoration-bottomRightUpdate decoration-bottomRight2"></div>
    </div>


  );
  }
}


export default CreateCamera;
