import store from './store';
import {bindActionCreators} from "redux";
import {Action as AppAction} from './app/redux'
import {Action as todosAction} from './todos/redux'

const dispatch = store.dispatch;

export const appAction = bindActionCreators(AppAction.Creators, dispatch)
export const todoAction = bindActionCreators(todosAction.Creators, dispatch)



