import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'http://localhost:3000/tasks/'

export default new Vuex.Store({
  state: {

    todos:[],

    dones: []
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

    addTodoFromDone({commit}, todo){
      commit("add_todo_from_done", todo)
    },

    deleteTodo({commit}, id){
      commit("delete_todo", id)
    },

    deleteTodoFront({commit}, id){
      commit("delete_todo_front", id)
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
    deleteDoneFront({commit}, id){
      commit("delete_done_front", id)
    },
    updateDone({commit}, done){
      commit('update_done', done)
    },

    getTasks({commit}, tasks){
      commit("get_tasks", tasks)
    }

  },
  mutations: {

    // TO DO 

    // agregar un todo desde el input
    add_todo(state,todo){
      // bd
      fetch(url, {
          method: 'POST', 
          body: JSON.stringify(todo),
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
          }
      })
      .then(res => res.json())
      .then( data => {
          // front
          state.todos.push(data.data);
      })
    },

    // agregar un todo desde done
    add_todo_from_done(state, todo){

      const newTodoFromDone = {
        title: todo.title,
        done: false 
      }

      // back 
      fetch(url+ todo._id, {
        method: 'PUT', 
        body: JSON.stringify(newTodoFromDone), 
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
      })
      .then(res => res.json())
      .then( data => {
            // front
            state.todos.push(data.data);
        })
    },

    // eliminar un todo
    delete_todo(state, id){
      // eliminar en bd
      fetch(url + id,{
        method: 'DELETE',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then( res => {
          res.json()
          state.todos = state.todos.filter((todo) => todo._id != id)
      })
    },

    // SOLO actualiza el front de la app
    // cuando una todo task pasa a done
    delete_todo_front(state, id){
      state.todos = state.todos.filter((todo) => todo._id != id)
    },

    // todo = el nuevo
    update_todo(state, todo){

      // back 
        fetch(url+ todo._id, {
          method: 'PUT', 
          body: JSON.stringify(todo), 
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
          }
        })
        .then(res => {
            res.json()
            // front
            let index = state.todos.findIndex(t => t._id == todo._id )
            if(index != -1){
              state.todos[index] = todo
            }
        })
    },

    // DONE 
    // agregar una tarea en "todo" a "done"
    add_done(state, done){
  
      const newDone = {
        title: done.title,
        done: true 
      }

      // bd
        fetch(url+ done._id, {
          method: 'PUT', 
          body: JSON.stringify(newDone),
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
          }
        })
        .then(res => res.json())
        .then( data => {
            // front
            state.dones.push(data.data);
        })
    },

    delete_done(state, id){
    
      // bd
      fetch(url+ id,{
        method: 'DELETE',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then( res => {
          res.json()
          // front
          state.dones = state.dones.filter((done) => done._id != id)
      })
    },

    delete_done_front(state, id){
      state.dones = state.dones.filter((done) => done._id != id)
    },

    update_done(state, done){
      // bd
      fetch(url+ done._id, {
        method: 'PUT', 
        body: JSON.stringify(done), 
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
      })
      .then(res => {
          res.json()
          // front
          let index = state.dones.findIndex(t => t._id == done._id )
          if(index != -1){
            state.dones[index] = done
          }
      })      
    },

    // fetchs
    get_tasks(state, tasks){
      // get todos
      state.todos = tasks.filter(todo => {
        return todo.done == false
      }) 
      // get dones
      state.dones = tasks.filter(todo => {
        return todo.done == true
      }) 
    }
  },
  modules: {
  }
})
