import React, { Component } from 'react';
//import SVG from 'react-inlinesvg';

import '../assets/css/Navbar.css';
import gift from '../assets/imgs/gift.png';

function Logo() {
    return (
       <img src={gift} alt="logo" />
    );
}

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-content">
        <Logo />
        <p>Presente Ideal</p>
      </div>
    );
  }
}
