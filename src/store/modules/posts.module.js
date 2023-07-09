import axios from 'axios'
import {API_Base_URL} from '../../config'

export default{
  namespaced: true,
  state: {
    posts: [],
    post: {},
  },
  getters: {
    getPosts(state){
      return state.posts
    },
    getPost(state){
      return state.post
    },
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    setPost (state, post){
      state.post = post
    },
  },
  actions: {
    async loadPosts({commit}){
      try{
        const posts = await axios.get(`${API_Base_URL}/posts/`)
        commit('setPosts', posts.data)
      } catch(error){
        console.log(error)
      }    
    },
    async loadPostId({commit}, id){
      try{
        const post = await axios.get(`${API_Base_URL}/posts/${id}`)
        commit('setPost', post.data)
      } catch(error){
        console.log(error)
      }
    },
    filterPosts({commit, getters},userId){
      if(!userId || +userId === 0) return getters.getPosts
      return getters.getPosts?.filter(post => post.userId === +userId) ?? []
    }
  },

  modules: {
  }
}
