import { homeActions } from './reducer'
import axios from 'axios'
import { AsyncStorage } from 'react-native'
import {constants} from '../../constants'

export function signIn(data) {
  return (dispatch) => {
    dispatch({
      type: homeActions.SIGN_IN,
    })

    axios.post(`http://${constants.serverAddress}:8080/api/auth/signin`, {
      username: data.username,
      password: data.password
    })
      .then((response) => {
        AsyncStorage.setItem('token', response.data.accessToken)
        AsyncStorage.setItem('username', response.data.username)
        dispatch({
          type: homeActions.SIGN_IN_SUCCESS
        })
      })
      .catch((error) => {
        dispatch({
          type: homeActions.SIGN_IN_FAIL,
          payload: 'lol'
        })
      });
  }
}

export function signUp(data) {
  return (dispatch) => {
    dispatch({
      type: homeActions.SIGN_UP,
    })

    axios.post(`http://${constants.serverAddress}:8080/api/auth/signup`, {
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.mail,
      roles: ['user'],
      confirmed: false
    })
      .then(() => {
        dispatch({
          type: homeActions.SIGN_UP_SUCCESS,
        })
      })
      .catch(() => {
        dispatch({
          type: homeActions.SIGN_UP_FAIL,
          payload: 'lol'
        })
      });
  }
}

export function exit() {
  return (dispatch) => {
    dispatch({
      type: homeActions.EXIT,
    })

    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('username').then(() => {
      dispatch({
        type: homeActions.EXIT_SUCCESS,
      })
    })
  }
}

