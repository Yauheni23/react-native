import { homeActions} from './reducer'

export function showHome() {
  return {
    type: homeActions.SHOW_HOME,
  };
}

export function hideHome() {
  return {
    type: homeActions.HIDE_HOME,
  };
}
