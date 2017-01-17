/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';

class MapContainer extends React.Component {

  render() {
    return (
      <div className="row" style={{ marginLeft: 100, marginRight: 100 }}>
        <div className="col s4">
          1
        </div>
        <div className="col s4">
          2
        </div>
        <div className="col s4">
          3
        </div>
      </div>
    );
  }

}

export default MapContainer;
