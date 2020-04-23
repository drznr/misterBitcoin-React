import { userService } from '../../services/UserService';

const initialState = {
    loggedUser: userService.getUser()
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGGED_USER': 
            return { ...state, loggedUser: JSON.parse(JSON.stringify(action.user)) };
        
        default:
            return state;
    }
}