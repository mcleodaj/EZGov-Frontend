/*jshint esversion: 6 */
import axios from "axios";

export function fetchStates() {
  return function(dispatch) {
    axios.get("http://localhost:3000/v1/states")
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_STATES_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_STATES_REJECTED", payload: err});
      });
  };
}

export function fetchState(stateId) {
  return function(dispatch) {
    axios.get(`http://localhost:3000/v1/states/${stateId}`)
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_STATE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_STATE_REJECTED", payload: err});
      });
  };
}
