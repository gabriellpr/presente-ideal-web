import React, { Component } from 'react';
//import SVG from 'react-inlinesvg';

import '../assets/css/Footer.css';
import amazon from '../assets/imgs/amazon-icon.svg';

function Amazon() {
    return (
       <img style={{width:"10", height:"10"}} src={amazon} alt="amazon" />
    );
}

export default class Navbar extends Component {
  render() {
    return (
      <div className="footer-content">
        <p>Powered by </p>
        <Amazon />
      </div>
    );
  }
}
