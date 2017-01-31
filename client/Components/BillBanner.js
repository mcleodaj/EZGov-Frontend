/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
const image = require('./img/Bills-Banner-Vert.jpg')

class BillBanner extends React.Component {

  render() {
    return (
        <img src={image} className="responsive-img grayscale"/>
    );
  }

}

export default BillBanner;
