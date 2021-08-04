import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from './context';


const Nav = () => {
    return(
      // <nav className="main-nav">
      //   <ul>
      //     <li>{/*the "to" sends the :query value to <gallery> to display the text in the title*/}
      //     <NavLink to="//mountain" onClick={handleSearch}>Mountain</NavLink>
      //     </li>
      //     <li>
      //     <NavLink to="/search/starry%20sky" onClick={handleSearch}>Starry Sky</NavLink>
      //     </li>
      //     <li>
      //     <NavLink to="/search/rivers" onClick={handleSearch}>Rivers</NavLink>
      //     </li>
      //   </ul>
      // </nav>

      <nav className="main-menu">
        <div>
          <a href="/">
            <img className="logo" src="/static/img/logo.png" alt="Gran Telescopio de Canarias" />
          </a>
       </div>

        <div className="scrollbar.style-1">

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

            <li className="darkerli.darkerlishadow">
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

            <li className="darkerli.darkerlishadowdown">
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
    );
}

export default Nav;
