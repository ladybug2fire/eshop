import axios from 'axios'
import {HOST} from '@/config/myconfig'
export const addAddress = function (params) {
  return axios.post(`${HOST}/api/address/add`, params)
}

export const delAddress = function (params) {
  return axios.get(`${HOST}/api/address/del`, params)
}

export const getAddress= function (params) {
  return axios.get(`${HOST}/api/address/get`, params)
}

export const getList = function (params) {
  return axios.get(`${HOST}/api/address/list`, params)
}

export const updateAddress = function (params) {
  return axios.post(`${HOST}/api/address/update`, params)
}

export const setDefault = function (params) {
  return axios.post(`${HOST}/api/address/default`, params)
}