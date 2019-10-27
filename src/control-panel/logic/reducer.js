import MachineStatus from './machine-status.enum';
import ActionType from './action-type.enum';

const initialState = {
  machineStatus: MachineStatus.OFFLINE,
};

export default function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.MACHINE_OFFLINE: {
      return Object.assign({}, state, {
        machineStatus: MachineStatus.OFFLINE,
      });
    }
    case ActionType.MACHINE_ONLINE: {
      return Object.assign({}, state, {
        machineStatus: MachineStatus.ONLINE,
      });
    }
    default: return state;
  }
}
