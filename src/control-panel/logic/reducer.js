import MachineStatus from './machine-status.enum';

const initialState = {
  machineStatus: MachineStatus.OFFLINE,
};

export default function controlPanelReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}
