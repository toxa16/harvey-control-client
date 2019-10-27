import React from 'react';

import { NetworkStatus, PowerStatus } from '../logic/enums';

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
function PowerStatusDisplay({ status }) {
  const displayPowerStatus = () => {
    switch (status) {
      case PowerStatus.STARTING: return 'Starting...';
      case PowerStatus.STARTED: return 'Started';
      case PowerStatus.STOPPING: return 'Stopping...';
      default: return 'Stopped';
    }
  };

  const getPowerStatusClassName = () => {
    switch (status) {
      case PowerStatus.STARTING: return 'text-warning';
      case PowerStatus.STARTED: return 'text-success';
      case PowerStatus.STOPPING: return 'text-warning.';
      default: return 'text-danger';
    }
  };

  const getPowerButtonClassName = () => {
    let colorClassName;
    switch (status) {
      case PowerStatus.STARTING: {
        colorClassName = 'text-warning';
        break;
      };
      case PowerStatus.STARTED: {
        colorClassName = 'text-success';
        break;
      };
      case PowerStatus.STOPPING: {
        colorClassName = 'text-warning';
        break;
      };
      default: {
        colorClassName = 'text-danger';
      };
    }
  };

  return (
    <div className="mt-5">
      <p>Power On/Off:</p>
      <button className="btn btn-lg btn-danger">On/Off</button>
      <div className="mt-3">
        <span>Power status:</span>
        {' '}
        <span className={getPowerStatusClassName()}>
          { displayPowerStatus() }
        </span>
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
