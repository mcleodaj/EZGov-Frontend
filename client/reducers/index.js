/*jshint esversion: 6 */
import { combineReducers } from "redux";

import bills from "./billsReducer";
import bill from "./billReducer";
import people from "./peopleReducer";
import person from "./personReducer";
import states from './statesReducer';
import stateInfo from './stateInfoReducer';
import votes from './votesReducer';

export default combineReducers({
  bills,
  people,
  states,
  votes,
  stateInfo,
  person,
  bill,
});
