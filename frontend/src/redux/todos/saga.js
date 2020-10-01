import {all, takeLatest,call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.TYPES.GET_TODOS), function*() {
            const result = yield call(API.getTodos)
            console.log("[saga] getTodos", result);
            yield put(Action.Creators.updateState({
                list: result
            }))
        },
        takeLatest(Action.Types.ADD_TODO), function*(data) {
            const result = yield call(API.addTodo, data)
            console.log("[saga] addTodo", result);
        }
    ])
}