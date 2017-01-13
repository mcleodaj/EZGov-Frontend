/*jshint esversion: 6 */
import React from 'react';
// import { Form, Menu, Icon, Modal, Checkbox, Input, Button } from 'antd';
import { Link } from 'react-router';


class Nav extends React.Component {
  render() {
    return (
      <nav>
       <div class="nav-wrapper">
         <ul id="nav-mobile" class="right hide-on-med-and-down">
           <li><a href="/bills">Bills</a></li>
           <li><a href="/">States</a></li>
         </ul>
         <a href="/" class="brand-logo">EZGov</a>
       </div>
     </nav>
    );
  }

}

export default Nav;
