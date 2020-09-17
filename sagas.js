import { put, takeEvery, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('hello Sagas!     ')
}

// creation du saga qui va mettre en fonction la tache asynchrone
export function* incrementAsync() {
  // utilisation de l'appel 
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// qui regarde le sagaet crée une nouvelle tache à chaque incrementation
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// l'export de toutes fonctions avec rootSaga qui reprends les function à exporter
//un tableau de résultats avec les sagas exporter
//les 2 générateurs sont executé en parallele et appeler par sagaMiddleware.run a la racine "main.js"
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}