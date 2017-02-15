/*jshint esversion: 6 */
import axios from "axios";

export function fetchVotes(personId) {
  return function(dispatch) {
    axios.get("http://localhost:3000/v1/people")
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_PEOPLE_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_PEOPLE_REJECTED", payload: err});
      });
  };
}
