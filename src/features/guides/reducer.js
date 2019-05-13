export const guidesActions = {
  SELECT_GUIDE: 'SELECT_GUIDE',
};

const initialState = {
  numberGuide: -1,
};

export function guidesReducer(state = initialState, action) {
  switch(action.type) {
    case guidesActions.SELECT_GUIDE:
      return {
        ...state,
        numberGuide: action.payload
      };
    default:
      return state;
  }
}
