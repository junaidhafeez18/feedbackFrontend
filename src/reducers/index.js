const initialState = {
  // counter: 0,
  loggedIn: false,
  loggedOut: false,
  error: null,
  feedbackSubmitted: false, // New state to track feedback submission status
  feedback: {
    data: null,
    loading: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'INCREMENT':
    //   return { ...state, counter: state.counter + 1 };
    // case 'DECREMENT':
    //   return { ...state, counter: state.counter - 1 };
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, loggedIn: false, error: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, error: action.payload };
    case 'LOGOUT_SUCCESS':
      return { ...state, loggedOut: true, error: null };
    case 'LOGOUT_FAILURE':
      return { ...state, loggedOut: false, error: action.payload };
    case 'LOGOUT_ERROR':
      return { ...state, error: action.payload };
    case 'SUBMIT_FEEDBACK_SUCCESS':
      return { ...state, feedbackSubmitted: true, error: null };
    case 'SUBMIT_FEEDBACK_ERROR':
      return { ...state, feedbackSubmitted: false, error: action.payload };
    case 'FETCH_FEEDBACK_SUCCESS':
      return { ...state, feedback: { ...state.feedback, data: action.payload }, error: null };
    case 'FETCH_FEEDBACK_FAILURE':
      return { ...state, feedback: { ...state.feedback, loading: false }, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
