import React from 'react';

import ControllerAccepted from './ControllerAccepted';
import ControllerPending from './ControllerPending';
import ControllerRejected from './ControllerRejected';
import { ControllerStatus } from '../logic/enums';

/**
 * Main control panel component.
 */
export default function ControlPanel({ controllerStatus, networkStatus }) {
  const displayBody = () => {
    switch (controllerStatus) {
      case ControllerStatus.REJECTED: {
        return <ControllerRejected />;
      }
      case ControllerStatus.ACCEPTED: {
        return <ControllerAccepted networkStatus={networkStatus} />;
      }
      default: return <ControllerPending />;
    }
  }

  return (
    <div className="pt-5">
      <div className="container">
        <div className="text-center">
          <h1>Control Panel</h1>
        </div>

        <div className="mt-5">
          { displayBody() }
        </div>
      </div>
    </div>
  );
}
