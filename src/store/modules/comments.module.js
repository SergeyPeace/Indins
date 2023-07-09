import axios from 'axios'
import {API_Base_URL} from '../../config'

export default{
  namespaced: true,
  state: {
    comments: [],
  },
  getters: {
    getComments(state){
      return state.comments
    },
  },
  mutations: {
    setComments (state, comments) {
      state.comments = comments
    },
  },
  actions: {
    async loadComments({commit}, postId){
      try{
        const comments = await axios.get(`${API_Base_URL}/posts/${postId}/comments`)
        commit('setComments', comments.data)
      } catch(error){
        console.log(error)
      }    
    },
  },

  modules: {
  }
}
