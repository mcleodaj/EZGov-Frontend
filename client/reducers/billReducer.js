export default function reducer(state={
    bill: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_BILL": {
        return {...state, fetching: true}
      }
      case "FETCH_BILL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_BILL_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          bill: action.payload,
        }
      }
    }

    return state
}
