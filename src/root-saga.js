import { call, fork, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import ActionType from './control-panel/logic/action-type.enum';

function websocketChannel(socket) {
  return eventChannel(emit => {
    const onOpen = () => {
      console.log('Connected to the Control Server.');
      const machineConnectAction = {
        type: 'CONTROLLER_CONNECT',
      };
      socket.send(JSON.stringify(machineConnectAction));
    };
    const onMessage = e => {
      const message = e.data;
      emit(JSON.parse(message));
    };
    const onError = err => {
      console.error('websocket error');
      console.error(err);
    };
    const onClose = () => {
      console.log('Control Server disconnected.');
    };

    socket.addEventListener('open', onOpen);
    socket.addEventListener('error', onError);
    socket.addEventListener('message', onMessage);
    socket.addEventListener('close', onClose);

    return () => {
      socket.removeEventListener('open', onOpen);
      socket.removeEventListener('error', onError);
      socket.removeEventListener('message', onMessage);
      socket.removeEventListener('close', onClose);
    }
  });
}

function* watchChannel(channel) {
  while (true) {
    const action = yield take(channel);
    console.log(action);
    yield put(action);
  }
}

function* listenPowerButton(socket) {
  let action;
  while (true) {
    yield take(ActionType.MACHINE_START);
    console.log('machine start');
    action = { type: ActionType.MACHINE_START };
    yield put(action);
    socket.send(JSON.stringify(action));
  }
}

export default function* rootSaga() {
  const url = process.env.REACT_APP_CONTROL_SERVER_URL ||
    'ws://localhost:3001';
  const socket = new WebSocket(url);
  const channel = yield call(websocketChannel, socket);
  // TODO: arrange forks and calls (review parallelization)
  yield fork(watchChannel, channel);
  yield fork(listenPowerButton, socket);
}
