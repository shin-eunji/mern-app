import store from './store';
import {bindActionCreators} from "redux";
import {Action as AppAction} from './app/redux'

const dispatch = store.dispatch;

export const appAction = bindActionCreators(AppAction.Creators, dispatch)



