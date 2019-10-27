import { connect } from 'react-redux';

import ControlPanel from './ControlPanel';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ControlPanel);

export default ConnectedControlPanel;
