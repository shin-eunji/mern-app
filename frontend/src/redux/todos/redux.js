import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    list:[],
    detail: {}
}

export const Action = createActions({
    updateState: ['state'],
    getTodos: null,
    addTodo: ['data'],
    getTodoById: ['id'],
    updateTodoDetail: ['id', 'todo'],
    deleteTodo: ['id'],
    updateTodo: ['id', 'data']
}, {prefix: 'TODO'})

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}