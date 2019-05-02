import _ from 'lodash'
export default {
  state: {
    userInfo: {
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
    }
  }
}
