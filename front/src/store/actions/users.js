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
    if(!user.password.length) throw Error('No password')
    return axios.post('/users', user)
    .then(user => true)
    .catch(err => {
        throw err
    })
}

export const fetchUser = () => dispatch =>
    axios.get('/api/sessions')
        .then(user => dispatch(getUser(user.data)))

export const loginUser = (username, password) => dispatch =>{
    if(!password.length) throw Error('No password')
    return axios.post("/api/sessions", {username, password})
        .then(res => dispatch(logUser(res.data)))
        .catch(err => {
            throw err
        })
};

export const userLogOut = () => dispatch => {
    axios.delete('/api/sessions')
    .then(res => {
      dispatch(getUser({}))
    }).catch(error => console.log(error))
  }
