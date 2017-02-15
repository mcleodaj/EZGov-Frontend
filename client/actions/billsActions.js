/*jshint esversion: 6 */
import axios from "axios";

export function fetchBills() {
  return function(dispatch) {
    axios.get("http://localhost:3000/v1/bills")
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_BILLS_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_BILLS_REJECTED", payload: err});
      });
  };
}

export function fetchBill(billId) {
  return function(dispatch) {
    axios.get(`http://localhost:3000/v1/bills/${billId}`)
      .then((response) => {
        console.log(response);
        dispatch({type: "FETCH_BILL_FULFILLED", payload: response.data});
      })
      .catch((err) => {
        dispatch({type: "FETCH_BILL_REJECTED", payload: err});
      });
  };
}
