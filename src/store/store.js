import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: [
    {name: 'AJ', age: 28},
    {name: 'Stacie', age: 29},
    {name: 'Matt', age: 28},
    {name: 'Jeremy', age: 30}
  ],
  getters: {
    sillyNames: state => {
      return state.map(name => {
        return {
          name: 'silly' + ' ' + name.name,
          age: name.age
        }
      })
    }
  }
})
