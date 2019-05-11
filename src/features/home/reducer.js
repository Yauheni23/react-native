export const homeActions = {
  SHOW_HOME: 'SHOW_HOME',
  HIDE_HOME: 'HIDE_HOME'
};

const initialState = {
  isVisibleHome: false
};

export function homeReducer(state = initialState, action) {
  switch(action.type) {
    case homeActions.SHOW_HOME:
      return {
        ...state,
        isVisibleHome: true,
      };
    case homeActions.HIDE_HOME:
      return {
        ...state,
        isVisibleHome: false,
      };
    default:
      return state;
  }
}
