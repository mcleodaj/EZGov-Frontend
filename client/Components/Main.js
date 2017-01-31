/*jshint esversion: 6 */

import React from 'react';
import Nav from './Nav';
import BannersContainer from './BannersContainer';

const Main = React.createClass({
  render() {
    return (
      <div >
        <Nav/>
        <div className="container">
          <BannersContainer />
        </div>
      </div>
    );
  }
});

export default Main;
