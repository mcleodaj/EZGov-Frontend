/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
const image = require('./img/State-Banner-Vert.jpg')
import { Link } from 'react-router';

class StateBanner extends React.Component {

  render() {
    return (
      <Link to={`/states`}>
        <img src={image} className="responsive-img grayscale shadow"/>
      </Link>
    );
  }

}

export default StateBanner;
