import { entryActions } from './reducer'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

export function signIn(data) {
  return (dispatch) => {
    dispatch({
      type: entryActions.SIGN_IN,
    })

    axios.post('http://172.18.156.188:8080/api/auth/signin', {
      username: data.username,
      password: data.password
    })
      .then(function (response) {
        AsyncStorage.setItem('token', response.data.accessToken)
        AsyncStorage.setItem('username', response.data.username)
        dispatch({
          type: entryActions.SIGN_IN_SUCCESS,
          payload: response.data
        })
      })
      .catch(function (error) {
        dispatch({
          type: entryActions.SIGN_IN_FAIL,
          payload: 'lox'
        })
      });
  }
}

export function signUp(data) {
  return (dispatch) => {
    dispatch({
      type: entryActions.SIGN_UP,
    })

    axios.post('http://172.18.156.188:8080/api/auth/signup', {
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.mail,
      roles: ['user'],
      confirmed: false
    })
      .then(function (response) {

        dispatch({
          type: entryActions.SIGN_UP_SUCCESS,
          payload: true
        })
      })
      .catch(function (error) {
        dispatch({
          type: entryActions.SIGN_UP_FAIL,
          payload: 'lox'
        })
      });
  }
}

