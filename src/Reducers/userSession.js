const defaultState = {

}

const state = (state = defaultState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION': {
            return {
                ...state
            }
        }

        default: {
            return state
        }

    }
}

export default state