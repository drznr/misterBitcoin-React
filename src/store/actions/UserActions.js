import { userService } from '../../services/UserService';

export function doSignUp(name) {
    return dispatch => {
        const user = userService.signup(name);
        dispatch({ type: 'SET_LOGGED_USER', user });
    }
}
export function addMove(contact, amount) {
    return dispatch => {
        const user = userService.addMove(contact, amount);
        dispatch({ type: 'SET_LOGGED_USER', user });
    }
}