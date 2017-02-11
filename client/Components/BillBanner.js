/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
const image = require('./img/Bills-Banner-Vert.jpg')
import { Link } from 'react-router';

class BillBanner extends React.Component {

  render() {
    return (
      <Link to={`/bills`}>
        <img src={image} className="responsive-img grayscale shadow"/>
      </Link>
    );
  }

}

export default BillBanner;
