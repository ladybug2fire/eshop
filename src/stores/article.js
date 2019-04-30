import {getReviewList, delReview} from '@/api/article'
import _ from 'lodash'
export default {
  state: {
      reviews: [],
  },
  mutations: {
      setReviewList(state, payload){
          state.reviews = payload;
      },
      delReview(state, payload){
        state.reviews = _.filter(state.reviews, e => e._id !== payload);
      }
  },
  actions: {
    getReviewList({state, commit}, payload){
        getReviewList({
            params:{id: payload}
        }).then(res=>{
            if(_.get(res, 'data.code') === 200){
                commit('setReviewList', _.get(res, 'data.data'))
            }
        })
    },
    delReview({state, commit}, payload){
        return delReview({
            params:{
                id: payload
            }
        })
    }
  },
  getters: {
      reviews(state){
          return state.reviews;
      }
  }
};
