import {all, takeLatest,call} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.Types.UPDATE_STATE), function*() {
            const result = yield call(API.getTodo)
        }
    ])
}