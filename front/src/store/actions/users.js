import axios from 'axios';

const getUser = user => ({
    type: GET_USER,
    user
   });
   
const logUser = logUser => ({
    type: LOG_USER,
    logUser
   });

export const fetchUser = () => dispatch =>
    axios.get('/api/')
        .then(user => dispatch(getUser(user.data)))

export const loguser = () => dispatch =>
    axios
        .post("/api/login")
        .then(res => res.data)
        .then(user => dispatch(logUser(user.data)));