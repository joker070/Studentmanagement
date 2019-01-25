import keys from 'lodash/keys';
import pick from 'lodash/pick';

import { createServiceAction } from '../util/actionHelper.js';
import { apiConfig } from '../apiConfig.js';
import { getRequest } from '../util/index.js';

import { put, takeEvery, call } from 'redux-saga/effects';

function* listener(serviceType, action) {
  try {
    console.log('16');
    const model = {
      trfId: null,
      location: null,
      quantity: null,
      leftFacility: null,
      factories: null,
      isAffectedKidProduct: null,
      nextStep: null,
      comments: null
    };
    const path = {
      history: null
    };
    console.log('action', action);
    const result = pick(action.data, keys(model));
    const routes = pick(action.data, keys(path));
    const data = { body: result };
    // const res = yield call(postRequest, apiConfig.qrfData.endPointUrl, data);
    const res = yield call(getRequest, apiConfig.login.endPointUrl);
    console.log('response', response);
    const response = yield res.json();
    if (response.errorCode === 0) {
      yield put(createServiceAction(serviceType, 'success')(response));
      const message = `${response.message}`;
      routes.history.push(`/admin`);
    } else {
      const message = `${response.errorMessage}`;
    }
  } catch (e) {
    yield put(createServiceAction(serviceType, 'error')(e));
  }
}
function* loginSaga() {
  console.log('1');
  const serviceType = 'login';
  yield takeEvery(createServiceAction(serviceType, 'request').type, listener, serviceType);
}

export default loginSaga;
