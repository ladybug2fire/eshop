import _ from "lodash";
import { list, del } from "@/api/order";
import { review, delGoodReview } from "@/api/good";
export default {
  state: {
    orderlist: [],
    goodReviews: []
  },
  mutations: {
    setOrderlist(state, payload) {
      state.orderlist = payload;
    },
    setGoodReviews(state, payload) {
      state.goodReviews = payload;
    },
    del(state, payload) {
      state.orderlist = _.filter(state.orderlist, e => e._id !== payload);
    },
    delGoodReview(state, payload) {
      state.goodReviews = _.filter(state.goodReviews, e => e._id !== payload);
    }
  },
  actions: {
    getOrderList({ state, commit }) {
      list({
        params: {
          userid: state.userid
        }
      }).then(res => {
        if (_.get(res, "data.code") === 200) {
          commit("setOrderlist", _.get(res, "data.data"));
        }
      });
    },
    getGoodReview({ state, commit }, payload) {
      review({
        params: {
          id: payload
        }
      }).then(res => {
        if (_.get(res, "data.code") === 200) {
          commit("setGoodReviews", _.get(res, "data.data"));
        }
      });
    },
    delOrder({ state, commit }, payload) {
      return del({
        params: {
          id: payload
        }
      });
    },
    delGoodReview({ state, commit }, payload) {
      return delGoodReview({
        params: {
          id: payload
        }
      });
    }
  },
  getters: {
    ordercount(state) {
      return state.orderlist.length;
    },
    orderlist(state) {
      return state.orderlist;
    },
    goodReviews(state){
      return state.goodReviews;
    }
  }
};
