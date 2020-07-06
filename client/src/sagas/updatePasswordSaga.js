import {put} from "redux-saga/effects";
import ACTION from "../actions/actionTypes";
import * as restController from "../api/rest/restController";

export  function* updatePasswordSaga(action){
    yield put({type: ACTION.AUTH_ACTION_REQUEST});
    try{
        const res = yield  restController.updatePassword(action.data);
        yield  put({type: ACTION.AUTH_ACTION_SUCCESS});
    }
    catch (err) {
        yield  put({type: ACTION.AUTH_ACTION_ERROR, error: err.response});
    }
}