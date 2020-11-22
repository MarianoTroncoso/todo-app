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
    // original
    // addTodos({commit}, todos){
    //   commit("add_todos", todos)
    // },

    getTasks({commit}, tasks){
      commit("get_tasks", tasks)
    }

  },
  mutations: {

    // TO DO 

    // agregar un todo
    add_todo(state,todo){

      // front
      // state.todos.push(todo);

      // agregar a la bd
      fetch('http://localhost:3000/tasks', {
        method: 'POST', 
        body: JSON.stringify(todo),
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    })
    .then(res => res.json())
    .then( data => {
        console.log('data')
        console.log(data.data)
        // actualizar front
        // NECESITO EL OBJETO QUE ACABO DE GUARDAR
        state.todos.push(data.data);
    })
    },

    // eliminar un todo
    delete_todo(state, id){
      // eliminar en bd
      fetch('http://localhost:3000/tasks/' + id,{
        method: 'DELETE',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then( res => res.json())
      .then( data => {
        console.log(data) // undefined
        // actualizar front
        state.todos = state.todos.filter((todo) => todo._id != id)
      })
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

    // original
    // add_todos(state,todos){

    //   state.todos = todos.filter(todo => {
    //     return todo.done == false
    //   })
    // },

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
