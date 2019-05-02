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

export const review = function(params){
  return axios.post(`${HOST}/api/review/add`, params) 
}

export const getReviewList = function (params) {
  return axios.get(`${HOST}/api/review/list`, params)
}

export const delReview = function (params) {
  return axios.get(`${HOST}/api/review/del`, params)
}

export const view = function (params) {
  return axios.get(`${HOST}/api/article/view`, params)
}

export const favor = function (params) {
  return axios.post(`${HOST}/api/article/favor`, params)
}

export const myfavor = function (params) {
  return axios.post(`${HOST}/api/article/myfavor`, params)
}