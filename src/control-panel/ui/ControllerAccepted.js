import React from 'react';

import { NetworkStatus } from '../logic/enums';
import ConnectedPowerBlock from './ConnectedPowerBlock';

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

export default function ControllerAccepted({ networkStatus }) {
  return (
    <div>
      <div className="mb-5">
        <NetworkStatusDisplay status={networkStatus} />
      </div>

      <ConnectedPowerBlock />
    </div>
  );
}
