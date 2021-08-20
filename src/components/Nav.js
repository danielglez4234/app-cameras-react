import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';

import logoSrc from '../img/logo.png';

class Nav extends Component {

  render(){
    return(

      <div>
        <div className="showOrHideButton-div">
          <a onClick={ this.hideNavBar } className="button-hideNavBar">
            <i className="fa fa-angle-left fa-lg"></i>
          </a>
          <a onClick={ this.expandNavBar } className="button-expandNavBar">
            <i className="fa fa-angle-double-right fa-lg"></i>
          </a>
        </div>
        <div onClick={ this.unExpandNavArea } className="unExpandNavArea"></div>
      <nav id="navBar" className="main-menu">

        <div>
          <a href="/">
            <img className="logo" src={ logoSrc } alt="Gran Telescopio de Canarias" />
          </a>
       </div>

        <div className="scrollbar style-1">

          <ul>

            <li>
              <a href="/">
                <i className="fa fa-home fa-lg"></i>
                <span className="nav-text"> Home </span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-user fa-lg"></i>
                <span className="nav-text"> Log in </span>
              </a>
            </li>

            <li>
              <a href="/list">
                <i className="fa fa-list fa-lg"></i>
                <span className="nav-text"> Show All </span>
              </a>
            </li>

            <li className="darkerli darkerlishadow">
              <a href="/create">
                <i className="fa fa-plus-square fa-lg"></i>
                <span className="nav-text"> Add New Camera </span>
              </a>
            </li>

            <li className="darkerli darkerlishadowdown">
              <a href="#" onClick={this.showEditDelteButtons}>
                <i className="fa fa-edit fa-lg"></i>
                <span className="nav-text"> Edit </span>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fa fa-filter fa-lg"></i>
                <span className="nav-text"> Filter </span>
              </a>
            </li>

          </ul>
          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-crop fa-lg"></i>
                <span className="nav-text"> Opción 9 </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }

  showEditDelteButtons = () =>{
    $(".deleteCameraButton").toggle();
    $(".updateCameraButton").toggle();
  }

  hideNavBar = () => {
    $(".unExpandNavArea").hide();
    $("#navBar").toggle().removeClass("button-expandNavBar timetransition25s");
    $(".showOrHideButton-div").toggleClass("moveAlong").removeClass("moveAlongExpand timetransition25s").addClass("timetransition0s");
        $(".fa-angle-left").toggleClass("rotate-arrow");
        $(".fa-angle-double-right").removeClass("rotate-arrow");

    $(".rep_prub_cont").toggleClass("marginLeft-0-Cont");
    $(".rep_prub_cont_inside").toggleClass("paddinfLeft-0");
    $(".connection_error").toggleClass("marginleft_alignErrorMessageIcon");
    $(".message_connection_error").toggleClass("marginleft_alignErrorMessageText");

  }
  expandNavBar = () => {
    $(".unExpandNavArea").toggle();
    $("#navBar").show().addClass("timetransition25s").toggleClass("button-expandNavBar");
    $(".showOrHideButton-div").removeClass("moveAlong timetransition0s").addClass("timetransition25s").toggleClass("moveAlongExpand");
        $(".fa-angle-double-right").toggleClass("rotate-arrow");
        $(".fa-angle-left").removeClass("rotate-arrow");

    $(".rep_prub_cont").removeClass("marginLeft-0-Cont");
    $(".rep_prub_cont_inside").removeClass("paddinfLeft-0");
  }
  unExpandNavArea = () => {
    $(".unExpandNavArea").hide();
    $("#navBar").removeClass("button-expandNavBar");
    $(".showOrHideButton-div").removeClass("moveAlongExpand");
    $(".fa-angle-double-right").removeClass("rotate-arrow");
  }
}
export default Nav;
