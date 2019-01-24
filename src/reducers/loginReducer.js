import { LOGIN } from '../actions';
export default(state= '', {type}) => {
switch(type) {
    case LOGIN:
        return 'Logged In';
    default:
        return state;
    }   
}