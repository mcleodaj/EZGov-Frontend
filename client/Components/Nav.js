/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router';


class Nav extends React.Component {
  render() {
    return (
      <nav className="blue darken-4">
       <div className='nav-wrapper'>
         <a href="/" className='brand-logo left' style={{ marginLeft: 20 }}>EZGov</a>
         <ul id="nav-mobile" className='right hide-on-med-and-down' style={{ marginRight: 20 }}>
           <li><a href="/bills">Bills</a></li>
           <li><a href="/">States</a></li>
         </ul>
       </div>
     </nav>
    );
  }

}

export default Nav;
