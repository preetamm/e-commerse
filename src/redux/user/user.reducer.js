import {UserActionType} from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

const userReducter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionType.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducter;