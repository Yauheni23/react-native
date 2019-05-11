import { entryActions} from './reducer'

export function signIn(data) {
  return {
    type: entryActions.SIGN_IN,
    payload: data
  };
}

export function signUp(data) {
  return {
    type: entryActions.SIGN_UP,
    payload: data
  };
}

