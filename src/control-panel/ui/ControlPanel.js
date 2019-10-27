import React from 'react';

import MachineStatus from '../logic/machine-status.enum';

/*function MachineNetworkStatus({ machineStatus }) {
  return (
    <div></div>
  );
}*/

export default function ControlPanel({ machineStatus }) {
  const isMachineOnline = machineStatus === MachineStatus.ONLINE;
  const displayMachineStatus = () => {
    if (isMachineOnline) {
      return 'Online';
    }
    return 'Offline';
  }
  const machineStatusTextClassName = 'text-uppercase font-weight-bold ' +
    (isMachineOnline ? 'text-success' : 'text-muted');

  return (
    <div className="pt-5">
      <div className="container">
        <div className="text-center">
          <h1>Control Panel</h1>
        </div>
        <div className="mt-5">
          <span>Machine network status:</span>
          {' '}
          <span className={machineStatusTextClassName}>
            { displayMachineStatus() }
          </span>
        </div>
        <div className="mt-5">
          <p>Power On/Off:</p>
          <button className="btn btn-lg btn-danger">On/Off</button>
          <div className="mt-3">
            <span>Power status:</span>
            {' '}
            <span className="text-danger">Standby</span>
          </div>
        </div>
      </div>
    </div>
  );
}
