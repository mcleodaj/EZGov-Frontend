export default function reducer(state={
    votes: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_VOTES": {
        return {...state, fetching: true}
      }
      case "FETCH_VOTES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VOTES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          votes: action.payload,
        }
      }
    }

    return state
}
