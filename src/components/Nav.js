import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Consumer } from './context';
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
                <span className="nav-text"> Create Camera </span>
              </a>
            </li>

            <li className="darkerli">
              <a href="/update">
                <i className="fa fa-edit fa-lg"></i>
                <span className="nav-text"> Update Camera </span>
              </a>
            </li>

            <li className="darkerli darkerlishadowdown">
              <a href="#">
                <i className="fa fa-minus-square fa-lg"></i>
                <span className="nav-text"> Delete Camera </span>
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
                <span className="nav-text"> opción 9 </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }

  hideNavBar = () => {
    $(".unExpandNavArea").hide();
    $("#navBar").toggle().removeClass("button-expandNavBar timetransition25s");
    $(".showOrHideButton-div").toggleClass("moveAlong").removeClass("moveAlongExpand timetransition25s");
        $(".fa-angle-left").toggleClass("rotate-arrow");
        $(".fa-angle-double-right").removeClass("rotate-arrow");

    $(".rep_prub_cont").toggleClass("marginLeftCont");
    
  }
  expandNavBar = () => {
    $(".unExpandNavArea").toggle();
    $("#navBar").show().addClass("timetransition25s").toggleClass("button-expandNavBar");
    $(".showOrHideButton-div").removeClass("moveAlong").addClass("timetransition25s").toggleClass("moveAlongExpand");
        $(".fa-angle-double-right").toggleClass("rotate-arrow");
        $(".fa-angle-left").removeClass("rotate-arrow");

    $(".rep_prub_cont").removeClass("marginLeftCont");
  }
  unExpandNavArea = () => {
    $(".unExpandNavArea").hide();
    $("#navBar").removeClass("button-expandNavBar");
    $(".showOrHideButton-div").removeClass("moveAlongExpand");
    $(".fa-angle-double-right").removeClass("rotate-arrow");
  }
}
export default Nav;
