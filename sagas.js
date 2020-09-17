import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('hello Sagas!')
}

// creation du saga qui va mettre en fonction la tache asynchrone
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// qui regarde le sagaet crée une nouvelle tache à chaque incrementation
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}