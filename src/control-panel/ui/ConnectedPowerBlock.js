import { connect } from 'react-redux';

import PowerBlock from './PowerBlock';
import ActionType from '../logic/action-type.enum';

function mapStateToProps(state) {
  return {
    networkStatus: state.controlPanel.networkStatus,
    powerStatus: state.controlPanel.powerStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => dispatch({ type: ActionType.MACHINE_START }),
    onStop: () => dispatch({ type: ActionType.MACHINE_STOP }),
  };
}

const ConnectedPowerBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PowerBlock);

export default ConnectedPowerBlock;

