import { connect } from 'react-redux';
import * as actions from './actions';
import { Home } from './component';
import { getIsVisibleHome } from './selector';
import { createStructuredSelector } from 'reselect';

export { homeActions, homeReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  isVisibleHome: getIsVisibleHome(),
});

export const mapDispatchToProps = dispatch => ({
  showHome: () => dispatch(actions.showHome()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);