/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
const image = require('./img/People-Banner-Vert.jpg')

class PeopleBanner extends React.Component {

  render() {
    return (
        <img src={image} className="responsive-img grayscale"/>
    );
  }

}

export default PeopleBanner;
