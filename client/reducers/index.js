/*jshint esversion: 6 */
import { combineReducers } from "redux";

import bills from "./billsReducer";
import people from "./peopleReducer";
import states from './statesReducer';
import votes from './votesReducer';

export default combineReducers({
  bills,
  people,
  states,
  votes,
});
