/*jshint esversion: 6 */
import React from 'react';
import { chunk } from 'lodash';
import StateCard from './StateCard';

class StateContainer extends React.Component {
  componentWillMount(){
    this.props.fetchStates();
  }

  createStateArray(states) {
    return states.map((state, i) => {
      return (
        <div className="col s6 l4 valign" key={i}>
          <StateCard state={state}/>
        </div>
      );
    });
  }

  createRowsWithStates(states) {
    const stateArray = this.createStateArray(states);
    return chunk(stateArray, 3).map(function(group, i) {
      return (
        <div className="row valign-wrapper" key={i}>{group}</div>
      );
    });
  }

  render() {
    return (
      <div style={{ marginLeft: 100, marginRight: 100, marginTop: 30, marginBot: 10 }}>
        {this.createRowsWithStates(this.props.states.states)}
      </div>
    );
  }

}

export default StateContainer;
