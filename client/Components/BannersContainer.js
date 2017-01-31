/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
import StateBanner from './StateBanner';
import PeopleBanner from './PeopleBanner';
import BillBanner from './BillBanner';


class BannersContainer extends React.Component {

  render() {
    return (
      <div style={{ marginLeft: 100, marginRight: 100, marginTop: 30, marginBot: 10 }} className="row valign-wrapper">
        <div className="col s12 l4 valign">
          <StateBanner />
        </div>
        <div className="col s12 l4 valign">
          <PeopleBanner />
        </div>
        <div className="col s12 l4 valign">
          <BillBanner />
        </div>
      </div>
    );
  }

}

export default BannersContainer;
