import { connect } from 'react-redux';
import * as actions from './actions';
import { Home } from './component';
import { getToken } from '../entry/selector'
import { createStructuredSelector } from 'reselect';

export { homeActions, homeReducer } from './reducer';

export const mapStateToProps = createStructuredSelector({
  token: getToken(),
});

export const mapDispatchToProps = dispatch => ({
  showHome: () => dispatch(actions.showHome()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);