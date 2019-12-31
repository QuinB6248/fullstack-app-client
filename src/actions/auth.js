import request from 'superagent'
const baseUrl = 'http://localhost:4000'
//const baseUrl ='https://pure-hamlet-15394.herokuapp.com'


//////////////////SIGN IN ACTION////////////////
export const SIGNUP_SUCCES = 'SIGNUP_SUCCES'
const signupSucces = event => ({
  type: SIGNUP_SUCCES,
  payload: event
})

export const signup = (name, email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/signup`)
    .send({name, email, password})
    .then(response => dispatch(signupSucces(response.body)))
    .catch(console.error)
}

///////////////LOGIN, LOGOUT, CHECK TOKEN ACTION//////////////
export const LOGIN_SUCCES = 'LOGIN_SUCCES'
const loginSucces = data => ({
  type: LOGIN_SUCCES,
  payload: data
})

////////////////////LOGIN////////////////////
export const login = (name, email, password) => (dispatch) => {
  //sessionStorage.setItem("name", name)
  request
    .post(`${baseUrl}/login`)
    .send({email, password})
    .withCredentials()
    .then((response)=> {dispatch(loginSucces(response.body.jwt))})
    .catch(console.error)
}

////////////////////LOGOUT//////////////////
export const logout = () => (dispatch) => {
  request(`${baseUrl}/clearcookie`)
    .withCredentials()
    .then(response => dispatch(loginSucces(response.body)))
    .catch(console.error)
}

////////////////////CHECK TOKEN///////////////
export const checkToken = (check) => (dispatch) => {
  dispatch(loginSucces(check))
}

