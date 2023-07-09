import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from './modules/users.module'
import postsModule from './modules/posts.module'
import commentsModule from './modules/comments.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
  },
  getters: {
  },
  mutations: {       
  },
  actions: {
  },
  modules: {
    usersModule,
    postsModule,
    commentsModule,
  }
})
