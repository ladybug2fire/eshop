import axios from 'axios'
import {HOST} from '@/config/myconfig'

// 我的订单
export const list = function (params) {
  return axios.get(`${HOST}/api/order/list`, params)
}
// 购买
export const buy = function (params) {
  return axios.post(`${HOST}/api/order/buy`, params)
}

export const del = function (params) {
  return axios.get(`${HOST}/api/order/del`, params)
}
