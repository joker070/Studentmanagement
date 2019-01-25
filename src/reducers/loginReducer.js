// import { LOGIN } from '../actions';
// export default(state= '', {type}) => {
// switch(type) {
//     case LOGIN:
//         return 'Logged In';
//     default:
//         return state;
//     }   
// }

import { createServiceAction } from '../util/actionHelper.js';

const defaultState = {
    
    loginData: {}
  };

export default function login(state = defaultState, action) {
    switch (action.type) {
      case createServiceAction('login', 'success').type:
        return { ...state, loginData: action.data };  
      default:
        return state;
    }
  }