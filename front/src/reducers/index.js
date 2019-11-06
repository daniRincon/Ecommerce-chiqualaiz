import { LOG_USER, GET_USER } from '../constants/index';

const initialState ={
    loggedName: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                loggedName: action.user
            }
        case LOG_USER:
            return {
                ...state,
                loggedName: action.logUser
            }
        default:
            return state
    }
}