const initialState = {
    list: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE'
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        })
    }

}

export const reducer = function(state = initialState, action) {
    switch(action.type) {
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}