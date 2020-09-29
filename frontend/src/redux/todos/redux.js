const initialState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'TODO/UPDATE_STATE'
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
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