const initialState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'TODO/UPDATE_STATE',
        GET_TODOS: 'GET_TODOS'
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getTodos: () => ({
            type: Action.Types.GET_TODOS
        })

    }
}

export const reducer = function(state=initialState, action) {
    switch (action.type) {
        default:
            return state

        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}