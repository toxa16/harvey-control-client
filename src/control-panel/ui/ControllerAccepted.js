import React from 'react';

import { NetworkStatus } from '../logic/enums';

/**
 * Displays machine network status.
 */
function NetworkStatusDisplay({ status }) {
  const isMachineOnline = status === NetworkStatus.ONLINE;
  const displayMachineStatus = () => {
    if (isMachineOnline) {
      return 'Online';
    }
    return 'Offline';
  }
  const machineStatusTextClassName = 'text-uppercase font-weight-bold ' +
    (isMachineOnline ? 'text-success' : 'text-muted');
  
  return (
    <div>
      <span>Machine network status:</span>
      {' '}
      <span className={machineStatusTextClassName}>
        { displayMachineStatus() }
      </span>
    </div>
  );
}

/**
 * Displays machine power status.
 */
function PowerStatusDisplay() {
  return (
    <div className="mt-5">
      <p>Power On/Off:</p>
      <button className="btn btn-lg btn-danger">On/Off</button>
      <div className="mt-3">
        <span>Power status:</span>
        {' '}
        <span className="text-danger">Stopped</span>
      </div>
    </div>
  );
}

export default function ControllerAccepted({ networkStatus }) {
  return (
    <div>
      <div className="mb-5">
        <NetworkStatusDisplay status={networkStatus} />
      </div>

      <PowerStatusDisplay />
    </div>
  );
}
