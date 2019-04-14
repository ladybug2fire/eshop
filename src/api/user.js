import axios from 'axios'
import {HOST} from '@/config/myconfig'
export const getUser = function () {
  return axios.get(`${HOST}/api/getuser`, {
    params: {
      ID: 12345
    }
  })
}

export const register = function (params) {
  return axios.post(`${HOST}/api/register`, params)
}

export const login = function (params) {
  return axios.post(`${HOST}/api/login`, params)
}

export const updateUser = function (params) {
  return axios.post(`${HOST}/api/updateUser`, params)
}
