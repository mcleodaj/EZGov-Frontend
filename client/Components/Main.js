/*jshint esversion: 6 */

import React from 'react';
import Nav from './Nav';
import BannersContainer from './BannersContainer';
import style from './main.css'


const Main = React.createClass({
  render() {
    return (
      <div >
        <Nav {...this.props}/>
        <div className="container">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
});

export default Main;
