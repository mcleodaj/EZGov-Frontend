/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
const image = require('./img/People-Banner-Vert.jpg')
import { Link } from 'react-router';

class PeopleBanner extends React.Component {

  render() {
    return (
      <Link to={`/people`}>
        <img src={image} className="responsive-img grayscale"/>
      </Link>
    );
  }

}

export default PeopleBanner;
