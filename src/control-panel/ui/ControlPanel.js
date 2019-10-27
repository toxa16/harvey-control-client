import React from 'react';

export default function ControlPanel() {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="text-center">
          <h1>Control Panel</h1>
        </div>
        <div className="mt-5">
          <span>Machine network status:</span>
          {' '}
          <span className="text-success text-uppercase font-weight-bold">Online</span>
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
