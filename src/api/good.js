import axios from 'axios'
import {HOST} from '@/config/myconfig'

export const list = function (params) {
  return axios.get(`${HOST}/api/good/list`, params)
}

export const search = function (params) {
  return axios.get(`${HOST}/api/good/search`, params)
}

export const get = function (params) {
  return axios.get(`${HOST}/api/good/get`, params)
}

export const review = function(params){
  return axios.get(`${HOST}/api/goodreview/list`, params) 
}

export const delGoodReview = function(params){
  return axios.get(`${HOST}/api/goodreview/del`, params) 
}