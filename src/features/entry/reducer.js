export const entryActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',

};

const initialState = {
  isLoading: false,
  token: '',
  error: '',
};

export function entryReducer(state = initialState, action) {
  switch(action.type) {
    case entryActions.SIGN_IN:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case entryActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        error: ''
      };
    case entryActions.SIGN_IN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case entryActions.SIGN_UP:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case entryActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: 'yes'
      };
    case entryActions.SIGN_UP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
