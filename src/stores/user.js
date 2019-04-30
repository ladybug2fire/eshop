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
    }
  }
}
