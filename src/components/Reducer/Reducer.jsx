export const Reducer = (state, action) => {

    switch (action.type) {
        case 'SET_SCORE': {
            return {
                ...state,
                score: action.payload
            }
        }
        case 'SET_USER_PICK': {
            return {
                ...state,
                userPick: action.payload
            }
        }
        case 'SET_CPU_PICK': {
            return {
                ...state,
                cpuPick: action.payload
            }
        }
        case 'SET_SHOW_GAME': {
            return {
                ...state,
                showGame: action.payload
            }
        }
        default:
            return state;
    }
}