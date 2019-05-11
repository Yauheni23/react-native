export const entryActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

const initialState = {
  isLogin: false,
};

export function entryReducer(state = initialState, action) {
  switch(action.type) {
    case entryActions.SIGN_IN:
      return {
        ...state,
        isLogin: true,
      };
    case entryActions.SIGN_UP:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
}
