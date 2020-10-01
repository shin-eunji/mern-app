import {all, takeLatest,call, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";
import {navigate} from "../../lib/History";

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
        },
        takeLatest(Action.Types.GET_TODO_BY_ID), function*(id) {
            const result = yield call(API.addTodo, id)
            console.log("[saga] GET_TODO_BY_ID", result);

            if(result) {
                yield put(Action.Creators.updateTodoDetail(id, result))
            }
        },
        takeLatest(Action.Types.DELETE_TODO), function*(id) {
            const result = yield call(API.deleteTodo, id)
            console.log("[saga] DELETE_TODO", result);

            if(result) {
                yield put(Action.Creators.deleteTodo(id, result))
                navigate('/todos')
            }
        },
        takeLatest(Action.Types.UPDATE_TODO), function*(id, data) {
            const result = yield call(API.updateTodo, id)
            console.log("[saga] UPDATE_TODO", result);

            if(result) {
                yield put(Action.Creators.updateTodo(id, result))
                navigate('/todos')
            }
        },
    ])
}