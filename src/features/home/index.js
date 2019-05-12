import { connect } from 'react-redux';
import * as actions from './actions';
import { Home } from './component';
import { getIsLoading, getError, getIsProfile } from './selector';
import { createStructuredSelector } from 'reselect';

export { homeActions, homeReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoading(),
  isProfile: getIsProfile(),
  error: getError()
});

export const mapDispatchToProps = dispatch => ({
  signIn: (data) => dispatch(actions.signIn(data)),
  signUp: (data) => dispatch(actions.signUp(data)),
  exit: () => dispatch(actions.exit()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);