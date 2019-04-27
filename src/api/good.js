import axios from 'axios'
import {HOST} from '@/config/myconfig'

export const list = function (params) {
  return axios.get(`${HOST}/api/good/list`, params)
}

export const search = function (params) {
  return axios.get(`${HOST}/api/good/search`, params)
}