import axios from 'axios'
import {HOST} from '@/config/myconfig'
export const addArticle = function (params) {
  return axios.post(`${HOST}/api/article/add`, params)
}

export const delArticle = function (params) {
  return axios.get(`${HOST}/api/article/delete`, params)
}

export const getArticle = function (params) {
  return axios.get(`${HOST}/api/article/get`, params)
}

export const getList = function (params) {
  return axios.get(`${HOST}/api/article/`, params)
}

export const searchArticle = function (params) {
  return axios.get(`${HOST}/api/article/search`, params)
}
