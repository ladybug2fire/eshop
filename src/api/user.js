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

export const history = function(params){
  return axios.get(`${HOST}/api/history`, params)
}

export const addHistory = function(params){
  return axios.get(`${HOST}/api/history/add`, params)
}

export const clearHistory = function(params){
  return axios.get(`${HOST}/api/history/clear`, params)
}