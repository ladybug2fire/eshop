import _ from 'lodash'
import {history, addHistory, clearHistory} from '@/api/user'
export default {
  state: {
    userInfo: {
      history:[]
    },
    preRoute: null,
  },
  mutations: {
    logout (state) {
      state.userInfo = {}
    },
    logInfo (state, payload) {
      state.userInfo = payload
    },
    favor(state, payload){
      let favorites = _.get(state, 'userInfo.favorite', []);
      if(payload.like){
        if(!_.includes(favorites, payload.id)){
          favorites.push(payload.id)
        }
      } else {
        _.remove(favorites, e=> e === payload.id);
      }
      state.userInfo = _.assign(state.userInfo,{favorite: favorites});
    },
    follow(state, payload){
      let follows = _.get(state, 'userInfo.follow', []);
      if(payload.like){
        if(!_.includes(follows, payload.id)){
          follows.push(payload.id)
        }
      } else {
        _.remove(follows, e=> e === payload.id);
      }
      state.userInfo = _.assign(state.userInfo,{follow: follows}); 
    }
  },
  actions: {
    checkLogin({state}, payload){
      if(state.userInfo._id){
        return Promise.resolve(true);
      }else{
        state.preRoute = payload.route;
        payload.router.push('/login')
        return Promise.resolve(false)
      }
    },
    getHistory({state}){
      history({
        params:{
          id: state.userInfo._id,
        }
      }).then(res=>{
        if(_.get(res, 'data.code')==200){
          state.userInfo = _.assign(state.userInfo, {
            history: res.data.data
          })
        }
      })
    },
    addHistory({state}, payload){
      addHistory({
        params:{
          id: state.userInfo._id,
          key: payload
        }
      }).then(res=>{
        if(_.get(res, 'data.code')===200){
          if(!_.includes(state.userInfo.history, payload)){
            state.userInfo.history.push(payload)
          }
        }
      })
    },
    clearHistory({state}){
      clearHistory({
        params:{
          id: state.userInfo._id
        }
      }).then(res=>{
        if(_.get(res, 'data.code')===200){
          state.userInfo = _.assign(state.userInfo, {
            history: []
          })
        }
      })
    }
  },
  getters: {
    userid (state) {
      return state.userInfo._id
    },
    username (state) {
      return state.userInfo.username
    },
    userInfo (state) {
      return state.userInfo
    },
    preRoute(state){
      return state.preRoute;
    },
    favorite(state){
      return _.get(state, 'userInfo.favorite', [])
    },
    history(state){
      return _.get(state, 'userInfo.history', []) 
    }
  }
}
