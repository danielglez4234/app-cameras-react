import React from 'react';

const UpdateCamera = () => {
  return(

    <b>

      <div className="update_container update_container_appear_right">

      <h4 className="title_update_cameras"> Update Cameras </h4>

        <form>

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
              <span className="omrs-input-label"> Name </span>
            </label>
          </div>

          <div className="buttons-cont">
            <button className="btn-6">
              <span className="submit"> Update </span>
            </button>
            <button className="btn-6">
                <span className="cancel"> Cancel </span>
            </button>
          </div>
          </form>
        </div>
    </b>

  );
}


export default UpdateCamera;
