import ActionType from './action-type.enum';
import { NetworkStatus, ControllerStatus, PowerStatus } from './enums';

const initialState = {
  networkStatus: NetworkStatus.OFFLINE,
  controllerStatus: ControllerStatus.PENDING,
  powerStatus: PowerStatus.STOPPED,
};

export default function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CONTROLLER_REJECTED: {
      return Object.assign({}, state, {
        controllerStatus: ControllerStatus.REJECTED,
      });
    }
    case ActionType.CONTROLLER_ACCEPTED: {
      return Object.assign({}, state, {
        controllerStatus: ControllerStatus.ACCEPTED,
      });
    }
    case ActionType.MACHINE_OFFLINE: {
      return Object.assign({}, state, {
        networkStatus: NetworkStatus.OFFLINE,
        powerStatus: PowerStatus.STOPPED,
      });
    }
    case ActionType.MACHINE_ONLINE: {
      return Object.assign({}, state, {
        networkStatus: NetworkStatus.ONLINE,
      });
    }
    case ActionType.MACHINE_START: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STARTING,
      });
    }
    case ActionType.MACHINE_STARTED: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STARTED,
      });
    }
    case ActionType.MACHINE_STOP: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STOPPING,
      });
    }
    case ActionType.MACHINE_STOPPED: {
      return Object.assign({}, state, {
        powerStatus: PowerStatus.STOPPED,
      });
    }
    default: return state;
  }
}
