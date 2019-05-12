export const homeActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',
  EXIT: 'EXIT',
  EXIT_SUCCESS: 'EXIT_SUCCESS',
};

const initialState = {
  isLoading: false,
  isProfile: false,
  error: '',
};

export function homeReducer(state = initialState, action) {
  switch(action.type) {
    case homeActions.SIGN_IN:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case homeActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        isProfile: true,
        isLoading: false,
        error: ''
      };
    case homeActions.SIGN_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case homeActions.SIGN_UP:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case homeActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: 'yes'
      };
    case homeActions.SIGN_UP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case homeActions.EXIT:
      return {
        ...state,
        isLoading: true,
      };
    case homeActions.EXIT_SUCCESS:
      return {
        ...state,
        isProfile: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
