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
<<<<<<< HEAD
    return axios.post('/api/register', user)
=======
    return axios.post('/users', user)
>>>>>>> 5544eaed3fed58bc656f98620e9e06a9f867ab03
    .then(user => true)
    .catch(err => {
        throw err
    })
}

export const fetchUser = () => dispatch =>
    axios.get('/api/users')
        .then(user => dispatch(getUser(user.data)))

export const loginUser = (username, password) => dispatch =>{
<<<<<<< HEAD
    return axios.post("/api/users/login", {username, password})
=======
    return axios.post("/sessions", {username, password})
>>>>>>> 5544eaed3fed58bc656f98620e9e06a9f867ab03
        .then(res => dispatch(logUser(res.data)))
        .catch(err => {
            throw err
        })
};