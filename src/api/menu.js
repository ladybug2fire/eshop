import axios from 'axios'
import {HOST} from '@/config/myconfig'
export const addArticle = function (params) {
  return axios.post(`${HOST}/api/menu/addarticle`, params)
}

export const delArticle = function (params) {
  return axios.get(`${HOST}/api/menu/delArticle`, params)
}

export const delMenu = function (params) {
  return axios.get(`${HOST}/api/menu/delete`, params)
}

export const addMenu = function (params) {
  return axios.get(`${HOST}/api/menu/add`, params)
}

export const allMenu = function (params) {
  return axios.get(`${HOST}/api/menu/list`, params)
}

export const getMyMenus = function (params) {
  return axios.get(`${HOST}/api/menu/my`, params)
}

export const getMenu = function (params) {
  return axios.get(`${HOST}/api/menu/get`, params)
}
