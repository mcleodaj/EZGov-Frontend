export default function reducer(state={
    stateInfo: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_STATE": {
        return {...state, fetching: true}
      }
      case "FETCH_STATE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_STATE_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          stateInfo: action.payload,
        }
      }
    }

    return state
}
