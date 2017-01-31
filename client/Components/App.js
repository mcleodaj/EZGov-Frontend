/*jshint esversion: 6 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Row, Col, Card } from 'antd';
import Nav from './Nav';
import Main from './Main';
import BannersContainer from './BannersContainer';

import * as billsActions from '../actions/billsActions';
import * as votesActions from '../actions/votesActions';
import * as statesActions from '../actions/statesActions';
import * as peopleActions from '../actions/peopleActions';

function mapStateToProps(state) {
  return {
    bills: state.bills,
    people: state.people,
    states: state.states,
    votes: state.votes,
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(Object.assign({}, billsActions, votesActions, peopleActions, statesActions), dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
