import axios from 'axios';
import {GET_USER, LOG_USER} from '../constants/index'

const getUser = user => ({
    type: GET_USER,
    user
   });
   
const logUser = logUser => ({
    type: LOG_USER,
    logUser
   });

export const signUpUser = (user) => dispatch =>{
    axios.post('register', user)
    .then(user => true)
    .catch(err => err)
}

export const fetchUser = () => dispatch =>
    axios.get('/users')
        .then(user => dispatch(getUser(user.data)))

export const loginUser = (username, password) => dispatch =>{
    axios.post("/users/login", {username, password})
        .then(res => dispatch(logUser(res.data)))
        .catch(err => console.error(err))
};