import axios from 'axios'
import {HOST} from '../../config/myconfig'
export const addFood = function (params) {
  return axios.post(`${HOST}/api/food/add`, params)
}

export const delFood = function (params) {
  return axios.get(`${HOST}/api/food/delete`, params)
}

export const getFood = function (params) {
  return axios.get(`${HOST}/api/food/get`, params)
}

export const getList = function (params) {
  return axios.get(`${HOST}/api/food/`, params)
}

export const searchFood = function (params) {
  return axios.get(`${HOST}/api/food/search`, params)
}
