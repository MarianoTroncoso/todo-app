import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    todos:[],

    // todos:[
    //   {
    //     id: 1,
    //     title: 'One'
    //   },
    //   {
    //     id: 2,
    //     title: 'Two'
    //   },
    //   {
    //     id: 3,
    //     title: 'Three'
    //   }
    // ],

    dones: [
      {
        id: 4,
        title: 'Four'
      },
      {
        id: 5,
        title: 'Five'
      }
    ]
  },
  getters:{
    allTodos: (state) => state.todos,
    allDones: (state) => state.dones
  },
  actions: {

    // TO DO 
    addTodo({commit}, todo){
      commit("add_todo", todo)
    },

    deleteTodo({commit}, id){
      commit("delete_todo", id)
    },

    updateTodo({commit},todo){
      commit("update_todo", todo)
    },

    // DONE 
    addDone({commit}, done){
      commit('add_done', done)
    },
    deleteDone({commit}, id){
      commit('delete_done', id )
    },
    updateDone({commit}, done){
      commit('update_done', done)
    },

    // fetchs
    addTodos({commit}, todos){
      commit("add_todos", todos)
    },

  },
  mutations: {

    // TO DO 
    add_todo(state,todo){
      state.todos.push(todo);
    },

    delete_todo(state, id){
      state.todos = state.todos.filter((todo) => todo.id != id)
    },

    update_todo(state, todo){
      let index = state.todos.findIndex(t => t.id == todo.id )
      if(index != -1){
        state.todos[index] = todo
      }
    },

    // DONE 

    add_done(state, done){
        state.dones.push(done)
    },

    delete_done(state, id){
      state.dones = state.dones.filter(done => done.id != id)
    },

    update_done(state, done){
      let index = state.dones.findIndex(d => d.id == done.id)
      if(index != -1){
        state.dones[index] = done
      }
    },

    // fetchs
    add_todos(state,todos){

      state.todos = todos.filter(todo => {
        return todo.done == false
      })
    },
    
  },
  modules: {
  }
})
