import { connect } from 'react-redux';

import PowerBlock from './PowerBlock';

function mapStateToProps(state) {
  return {
    networkStatus: state.controlPanel.networkStatus,
    powerStatus: state.controlPanel.powerStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const ConnectedPowerBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PowerBlock);

export default ConnectedPowerBlock;

