export default function reducer(state={
    person: [],
    fetching: false,
    fetched: false,
    error: null,
    test: true
  }, action) {

    switch (action.type) {
      case "FETCH_PERSON": {
        return {...state, fetching: true}
      }
      case "FETCH_PERSON_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PERSON_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          person: action.payload,
        }
      }
    }

    return state
}
