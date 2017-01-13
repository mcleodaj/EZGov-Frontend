export default function reducer(state={
    bills: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_BILLS": {
        return {...state, fetching: true}
      }
      case "FETCH_BILLS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_BILLS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          bills: action.payload,
        }
      }
    }

    return state
}
