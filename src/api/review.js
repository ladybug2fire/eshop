import axios from 'axios'
import {HOST} from '../../config/myconfig'

export const register = function (params) {
  return axios.post(`${HOST}/api/register`, params)
}

export const list = function (params) {
  return axios.get(`${HOST}/api/review/list`, params)
}

export const publish = function (params) {
  return axios.post(`${HOST}/api/review/add`, params)
}
