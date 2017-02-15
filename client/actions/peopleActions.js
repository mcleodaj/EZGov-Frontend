/*jshint esversion: 6 */
import axios from "axios";

export function fetchPeople() {
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

export function fetchPerson(personId) {
  return function(dispatch) {
    axios.get(`http://localhost:3000/v1/people/${personId}`)
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_PERSON_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_PERSON_REJECTED", payload: err});
      });
  };
}
