import React, { Component }  from 'react';
import axios                 from 'axios';
import * as $                from 'jquery';

import loadingSrc            from '../img/loading-video.svg';
import idIcon                from '../img/id.png';
import nameIcon              from '../img/name.png';
import groupIcon             from '../img/group.png';
import urlIcon               from '../img/url.png';
import userIcon              from '../img/user.png';
import pwdIcon               from '../img/pwd.png';
import arrowDown             from '../img/arrowDown.png';
import closeGroupIcon        from '../img/closeGroup.png';

import updateMark            from '../img/updateMark.png';

class UpdateCamera extends Component {

  constructor() {
    super();
    this.state = {
      loadingUpdate: true,
      idNotFound: false,
      // cameradataForTest:{id: "q", name:{value:"hola"}, group:{value:"interno"}, url:{value:{path:"zaza", user:"paco"}}, description:{value:"desc"}},
      camera: [],
      credentials: ""
    };
  }

  componentDidMount() {
    const queryParams   = new URLSearchParams(window.location.search);
    const idCamera      = queryParams.get('idCam');

    this.getCameraById(idCamera);
  }

  dropDownMenuGroup = () => {

    $('.toRotateTheArrow').on('click', function() {
      $('.iconInput-arrowDown').toggleClass('rotate-arrow-groups');
    });

    $(".dropdown dt a").on('click', function() {
      $(".dropdown dd ul").slideToggle('fast');
    });

    $(".dropdown dd ul li a").on('click', function() {
      $(".dropdown dd ul").hide();
    });

    $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")){
        $(".dropdown dd ul").hide();
        $('.iconInput-arrowDown').removeClass('rotate-arrow-groups');
      }
    });

    const allinputsGroup  = $('.mutliSelect input[type="checkbox"]');
    var titleChecked;

    for (var i = 0; i < allinputsGroup.length; i++) {

      if (allinputsGroup.eq(i).is(':checked')){
        titleChecked      = allinputsGroup.eq(i).val();
        var html          = "<div class='group-options-box group-options-box" + titleChecked + "'><span class='span-checked' title=" + titleChecked + ">" + titleChecked + "</span><img src=" + closeGroupIcon + " alt='close group' class='iconSpan-select iconSpan-select"+ titleChecked + "' /></div>";

        $('.multiSel').append(html);
      }
      $('.iconSpan-select' + titleChecked).on('click', function() {

        var titleCheck = $(this).closest('div').find('.span-checked').html();
          $("#" + titleCheck).prop("checked", false);
          $('.group-options-box'+ titleCheck).remove();
      });
    }

    $('.mutliSelect input[type="checkbox"]').on('click', function() {

      var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val();

      if ($(this).is(':checked')) {
        var html = "<div class='group-options-box group-options-box" + title + "'><span class='span-checked' title=" + title + ">" + title + "</span><img src=" + closeGroupIcon + " alt='close group' class='iconSpan-select iconSpan-select"+ title + "' /></div>";
        $('.multiSel').append(html);

      } else {
        $('.group-options-box'+ title).remove();

      }

      $('.iconSpan-select' + title).on('click', function() {
        var titleSpan = $(this).closest('div').find('.span-checked').html();
          $("#" + titleSpan).prop("checked", false);
          $('.group-options-box'+ titleSpan).remove();

      });
    });
  }

  getCameraById = (id) =>{
    const options = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    axios.get("http://161.72.123.211:1026/v2/entities/"+ id,  { headers: options	})
      .then(response => {
        this.setState({ //save the current state of the data
          camera: response.data,
          loadingUpdate: false
        });
        this.dropDownMenuGroup();
      })
      .catch(error => {
        this.setState({ //save the current state of the data
          idNotFound: true
        });
        console.log('Error fetching and parsing data on the ORION context brocker', error);
      });
  }

  render(){
    const error = <div className="message-box message-box-error">
                    <i className="fa fa-ban fa-2x"></i>
                    <span className="message-text"><strong>Error:</strong> Internal Server Error - This id cannot be found</span>
                    <a href="/">
                      <i className="fa fa-times fa-2x exit-button "></i>
                    </a>
                  </div>;
    if (!this.state.loadingUpdate) {
      var goups       = this.state.camera.group.value;
      var allGroups   = ["Interior-GTC", "Exterior-GTC","Offices","Dome","Corridor","Others"];
      var reultGroup  = [];
      var liGroups;

      for (var x = 0; x < allGroups.length; x++) {
      liGroups = <li>
                    <label htmlFor={allGroups[x]} className="label-input-select" >{allGroups[x]}</label>
                    <input defaultChecked={goups.includes(allGroups[x])} id={allGroups[x]} name={allGroups[x]} type="checkbox" value={allGroups[x]} />
                 </li>;
       reultGroup.push(liGroups);
      }
    }

  return(
<div className="rep_prub_form">
{ (this.state.idNotFound) ? error :
    <div className="update_container">
      <div id="title_container" className="mark_title_update mark_title_create">
        <h4 className="title_update_cameras"> Update Camera </h4>
        <img src={ updateMark } alt="update mark" className="icon-updateMark" />
     </div>
      <form className="formCameras" action="/selectedCamera" method="get">
<div className="formInputsfields">

      { (this.state.loadingUpdate) ? <img className="loadingUpdate" src={ loadingSrc } alt="loading"/> :

      <div>

        <div className="cont-input cont-input-idCam displayInlineBlock">
          <label htmlFor="idCamera" className="label-input">
            <img src={ idIcon } alt="id-camera" className="iconInput iconInput-idcam" />
            <span className="input-label-span input-label-idCam">Id-Camera</span>
          </label>
          <input defaultValue={this.state.camera.id} id="idCamera" name="idCamera" className="input-form input-form-id-camera" placeholder="Id..."/>
        </div>

        <div className="cont-input cont-input-name displayInlineBlock">
          <label htmlFor="nameCamera" className="label-input" >
            <img src={ nameIcon } alt="name" className="iconInput iconInput-name" />
            <span className="input-label-span input-label-name">Name</span>
          </label>
           <input defaultValue={this.state.camera.name.value} id="nameCamera" name="nameCamera" className="input-form input-form-name" placeholder="Name..." />
        </div>
        <div className="cont-input cont-input-group">
          <label htmlFor="groupCamera" className="label-input" >
            <img src={ groupIcon } alt="group" className="iconInput iconInput-group" />
            <span className="input-label-span input-label-group">Group</span>
          </label>
          <dl className="dropdown">
              <dt>
              <a className="toRotateTheArrow" href="#">
                <span className="hida select-dropdowm">Select</span>
                <img src={ arrowDown } alt="arrow down" className="iconInput iconInput-arrowDown" />
              </a>
              </dt>
              <dd>
                  <div className="mutliSelect">
                      <ul>

                        { reultGroup }

                      </ul>
                  </div>
              </dd>
          </dl>
          <div className="multiSel-Box"><p className="multiSel"></p></div>
        </div>
        <br/>

        <div className="cont-input cont-input-url displayInlineBlock">
          <label htmlFor="urlCamera" className="label-input" >
            <img src={ urlIcon } alt="url" className="iconInput iconInput-url" />
            <span className="input-label-span input-label-url">URL</span>
          </label>
           <input defaultValue={this.state.camera.url.value} id="urlCamera" name="urlCamera" className="input-form input-form-url" placeholder="http://... or https://..." />
        </div>

        <div className="cont-input checkboxUrlCredentials displayInlineBlock">
          <label htmlFor="checkCreandentials" className="omrs-input-underlined">
            <input onClick={this.checkCredentials} id="checkCreandentials" type="checkbox" name="credentialsCheck" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Change Credentials </span>
          </label>
        </div>
        <br/>
        <div className="credentials-section">
          <div id="userForcamera" className="cont-input-user displayInlineBlock">
            <label htmlFor="userCamera" className="label-input">
              <img src={ userIcon } alt="user" className="iconInput iconInput-user" />
              <span className="input-label-span input-label-user">User</span>
            </label>
            <input defaultValue={this.state.camera.user.value} id="userCamera" name="userCamera" className="input-form" placeholder="User name..."/>
          </div>

          <div className="cont-input checkboxUrlCredentials displayInlineBlock">
            <label htmlFor="checkChangePassword" className="omrs-input-underlined">
              <input onClick={this.checkCangePassword} id="checkChangePassword" type="checkbox" name="credentialsCheck" className="width-input-1 credentials-input" />
              <span className="input-label-checkCredentials"> Change Password </span>
            </label>
          </div>
          <br/>

          <div className="change-password-section">
            <div id="pwdForCamera" className="cont-input-pwd displayInlineBlock">
              <label htmlFor="pwdCamera" className="label-input">
                <img src={ pwdIcon } alt="pwd" className="iconInput iconInput-pwd" />
                <span className="input-label-span input-label-pwd">Password</span>
              </label>
              <input id="pwdCamera" type="password" name="pwdCamera" className="input-form" placeholder="Password..."/>
            </div>

            <div id="confirmPwdForcamera" className="cont-input-confirm-pwd">
              <label htmlFor="confirmPwdCamera" className="label-input">
                <img src={ pwdIcon } alt="confirm-pwd" className="iconInput iconInput-confirm-pwd" />
                <span className="input-label-span input-label-confirm-pwd">Confirm Password</span>
              </label>
              <input id="confirmPwdCamera" type="password" className="input-form" placeholder="Confirm Password..."/>
            </div>
          </div>

        </div>

        <div className="cont-input displayBlock">
          <span className="input-label-span input-label-description">Description</span>
          <label className="label-input label-input-description">
            <textarea defaultValue={this.state.camera.description.value} id="descriptionCamera" name="descriptionCamera" className="description-input-textarea"></textarea>
          </label>
        </div>

        <br />

        <div className="cont-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input defaultChecked={this.state.camera.kurentoConfig.value.recorder} type="checkbox" name="recordImages" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Record images </span>
          </label>
        </div>
        <br />
        <div className="cont-input displayInlineBlock">
          <label className="omrs-input-underlined">
            <input defaultChecked={this.state.camera.kurentoConfig.value.carDetection} type="checkbox" name="processImages" className="width-input-1 credentials-input" />
            <span className="input-label-checkCredentials"> Process images </span>
          </label>
        </div>

      </div>

 }
</div>
        <div className="buttons-cont">
          <button className="btn-6">
            <i className="fa fa-undo fa-lg icon-FormButton"></i>
            <span className="submit"> Update </span>
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

}
</div>
  );
  }

  checkCredentials = () => {
       if ($('#checkCreandentials:checkbox:checked').length > 0) {
         $('.credentials-section').addClass('show-credential-section');
       }else {
         $('.credentials-section').removeClass('show-credential-section');
       }
  }
  checkCangePassword = () =>{
    if ($('#checkChangePassword:checkbox:checked').length > 0) {
      console.log('hrlo');
      $('.change-password-section').addClass('show-password-section');
    }else {
      console.log('hrlo');
      $('.change-password-section').removeClass('show-password-section');
    }
  }
}


export default UpdateCamera;
