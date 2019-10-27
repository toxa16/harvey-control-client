import React from 'react';

import { PowerStatus, NetworkStatus } from '../logic/enums';

export default function PowerBlock({ networkStatus, powerStatus, onStart, onStop }) {
  const isMachineOnline = networkStatus === NetworkStatus.ONLINE;

  const displayPowerStatus = () => {
    switch (powerStatus) {
      case PowerStatus.STARTING: return 'Starting...';
      case PowerStatus.STARTED: return 'Started';
      case PowerStatus.STOPPING: return 'Stopping...';
      default: return 'Stopped';
    }
  };

  const getPowerStatusClassName = () => {
    switch (powerStatus) {
      case PowerStatus.STARTING: return 'text-warning';
      case PowerStatus.STARTED: return 'text-success';
      case PowerStatus.STOPPING: return 'text-warning.';
      default: return 'text-danger';
    }
  };

  const getPowerButtonClassName = () => {
    switch (powerStatus) {
      case PowerStatus.STARTING: return 'btn-warning';
      case PowerStatus.STARTED: return 'btn-success';
      case PowerStatus.STOPPING: return 'btn-warning';
      default: return 'btn-danger';
    }
  };

  function handleClick() {
    if (powerStatus === PowerStatus.STOPPED) {
      onStart();
    } else if (powerStatus === PowerStatus.STARTED) {
      onStop();
    } else {
      return;
    }
  }

  const buttonClassName = 'btn btn-lg ' +
    (isMachineOnline ? getPowerButtonClassName() : 'btn-secondary');
  return (
    <div className="mt-5">
      <h4 className="mb-3">Power On/Off:</h4>
      <button
        className={buttonClassName}
        disabled={!isMachineOnline}
        onClick={handleClick}
      >
        On/Off
      </button>
      <div className="mt-3">
        <span>Machine power status:</span>
        {' '}
        <span className={ isMachineOnline ? getPowerStatusClassName() : 'text-muted'}>
          { isMachineOnline ? displayPowerStatus() : 'N/A' }
        </span>
      </div>
    </div>
  );
}
