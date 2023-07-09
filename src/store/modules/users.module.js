import axios from 'axios'
import {API_Base_URL} from '../../config'

export default{
  namespaced: true,
  state: {
    users: [],
    user: {},
  },
  getters: {
    getUsers(state){
      return state.users
    },
    getUser(state){
      return state.user
    }
  },
  mutations: {
    setUsers (state, users) {
      state.users = users
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    async loadUsers({commit}){
      try{
        const users = await axios.get(`${API_Base_URL}/users/`)
        commit('setUsers', users.data)
      } catch(error){
        console.log(error)
      }    
    },
    async loadUserId({commit}, userId){
      try{
        const user = await axios.get(`${API_Base_URL}/users/${userId}`)
        commit('setUser', user.data)
      } catch(error){
        console.log(error)
      }    
    },
  },

  modules: {
  }
}
