/*jshint esversion: 6 */
import React from 'react';
import { Link } from 'react-router';


class Nav extends React.Component {
  render() {
    return (
      <nav className="blue darken-4">
       <div className='nav-wrapper'>
         <Link to={`/`}>
         <h4 className='brand-logo left' style={{ marginLeft: 20 }}>EZGov</h4>
         </Link>
         <ul id="nav-mobile" className='right hide-on-med-and-down' style={{ marginRight: 20 }}>
            <li><Link to={`/bills`}>Bills</Link></li>
            <li><Link to={`/states`}>States</Link></li>
         </ul>
       </div>
     </nav>
    );
  }

}

export default Nav;
