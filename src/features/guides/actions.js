import { guidesActions } from './reducer'

export function selectGuide(numberGuide) {
  return {
    type: guidesActions.SELECT_GUIDE,
    payload: numberGuide
  }
}
