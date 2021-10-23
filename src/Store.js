import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        todos: [
            { 
                id: 1,
                text: 'build website 1',
                done: false
            },
            { 
                id: 2,
                text: 'build website 2',
                done: true
            },
            { 
                id: 3,
                text: 'build website 3',
                done: true
            },
            { 
                id: 4,
                text: 'build website 4',
                done: false
            }
        ]
    },
    getters: {
        doneTodos: state => {
          return state.todos.filter( todo => todo.done )
        },
        doneTodosCount : (state,getters) => {
            return getters.doneTodos.length
        }
    }
})

export default store