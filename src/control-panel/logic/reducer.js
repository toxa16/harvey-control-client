import ActionType from './action-type.enum';
import { NetworkStatus } from './enums';

const initialState = {
  machineStatus: NetworkStatus.OFFLINE,
};

export default function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.MACHINE_OFFLINE: {
      return Object.assign({}, state, {
        machineStatus: NetworkStatus.OFFLINE,
      });
    }
    case ActionType.MACHINE_ONLINE: {
      return Object.assign({}, state, {
        machineStatus: NetworkStatus.ONLINE,
      });
    }
    default: return state;
  }
}
