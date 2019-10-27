import React from 'react';

import ControllerAccepted from './ControllerAccepted';
import ControllerPending from './ControllerPending';
import ControllerRejected from './ControllerRejected';

/**
 * Main control panel component.
 */
export default function ControlPanel({ controllerStatus, networkStatus }) {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="text-center">
          <h1>Control Panel</h1>
        </div>

        <div className="mt-5">
          <ControllerAccepted networkStatus={networkStatus} />
        </div>
      </div>
    </div>
  );
}
