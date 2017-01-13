export default function reducer(state={
    states: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_STATES": {
        return {...state, fetching: true}
      }
      case "FETCH_STATES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_STATES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          states: action.payload,
        }
      }
    }

    return state
}
