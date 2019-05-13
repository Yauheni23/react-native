import { connect } from 'react-redux';
import * as actions from './actions';
import { Guides } from './component';
import { getNumberGuide } from './selector';
import { createStructuredSelector } from 'reselect';

export { guidesActions, guidesReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  numberGuide: getNumberGuide()
});

export const mapDispatchToProps = dispatch => ({
  selectGuide: (numberGuide) => dispatch(actions.selectGuide(numberGuide)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guides);