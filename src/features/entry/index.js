import { connect } from 'react-redux';
import * as actions from './actions';
import { Entry } from './component';
import { getIsLogin } from './selector';
import { createStructuredSelector } from 'reselect';

export { entryActions, entryReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  isLogin: getIsLogin(),
});

export const mapDispatchToProps = dispatch => ({
  signIn: (data) => dispatch(actions.signIn(data)),
  signUp: (data) => dispatch(actions.signUp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);