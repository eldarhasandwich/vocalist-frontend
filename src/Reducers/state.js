const defaultState = {
    windowWidth: 0,
    windowHeight: 0
}

const state = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_WINDOW_SIZE': {
            return {
                ...state,
                windowWidth: action.width,
                windowHeight: action.height
            }
        }

        default: {
            return state
        }

    }
}

export default state