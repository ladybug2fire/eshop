import _ from 'lodash'
import { list, del } from "@/api/order";
export default {
  state: {
    orderlist: []
  },
  mutations: {
    setOrderlist(state, payload){
        state.orderlist = payload;
    },
    del(state, payload){
        state.orderlist = _.filter(state.orderlist, e=>e._id !== payload)
    }
  },
  actions: {
    getOrderList({state, commit}){
        list({
            params: {
              userid: state.userid
            }
        }).then(res => {
            if(_.get(res, 'data.code') === 200){
                commit('setOrderlist', _.get(res, 'data.data'))
            }
        });
    },
    delOrder({state, commit}, payload){
        return del({
            params: {
                id: payload
            }
        })
    }
  },
  getters: {
    ordercount(state){
        return state.orderlist.length;
    },
    orderlist (state) {
      return state.orderlist
    }
  }
}
