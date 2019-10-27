import ActionType from './action-type.enum';
import { NetworkStatus, ControllerStatus } from './enums';

const initialState = {
  networkStatus: NetworkStatus.OFFLINE,
  controllerStatus: ControllerStatus.PENDING,
};

export default function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.MACHINE_OFFLINE: {
      return Object.assign({}, state, {
        networkStatus: NetworkStatus.OFFLINE,
      });
    }
    case ActionType.MACHINE_ONLINE: {
      return Object.assign({}, state, {
        networkStatus: NetworkStatus.ONLINE,
      });
    }
    default: return state;
  }
}
