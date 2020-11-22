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

    // agregar un todo DESDE EL FORMULARIO
    add_todo(state,todo){

      // front
      // state.todos.push(todo);

      console.log('todo')
      console.log(todo) // ES SOLO EL TITULO

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
          console.log('todo task added')
          console.log(data.data)
          // actualizar front
          // NECESITO EL OBJETO QUE ACABO DE GUARDAR
          state.todos.push(data.data);
      })
    },

    // agregar un todo DESDE DONE
    add_todo_from_done(state, todo){
  
      console.log('todo from done')

      const newTodoFromDone = {
        title: todo.title,
        done: false 
      }

      console.log(newTodoFromDone)

      // back 
        fetch('http://localhost:3000/tasks/'+ todo._id, {
          method: 'PUT', 
          body: JSON.stringify(newTodoFromDone), 
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
          }
        })
        .then(res => res.json())
        .then( data => {

            console.log('data')
            console.log(data)

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

    // SOLO actualiza el front de la app
    // cuando una todo task pasa a done
    delete_todo_front(state, id){
      state.todos = state.todos.filter((todo) => todo._id != id)
    },

    update_todo(state, todo){
      let index = state.todos.findIndex(t => t.id == todo.id )
      if(index != -1){
        state.todos[index] = todo
      }
    },

    // DONE 
    // agregar una tarea en "todo" a "done"
    add_done(state, done){
  
      console.log('done')

      const newDone = {
        title: done.title,
        done: true // necesario
      }

      console.log(newDone)

      // back 
        fetch('http://localhost:3000/tasks/'+ done._id, {
          method: 'PUT', 
          body: JSON.stringify(newDone), // le paso solo el objeto titulo
          headers:{
              'Accept': 'application/json',
              'Content-type': 'application/json',
          }
        })
        .then(res => res.json())
        .then( data => {

            console.log('data')
            console.log(data)

            // actualizar front
            // NECESITO EL OBJETO QUE ACABO DE GUARDAR
            state.dones.push(data.data);
        })
    },

    delete_done(state, id){
      state.dones = state.dones.filter(done => done.id != id)
    },

    delete_done_front(state, id){
      state.dones = state.dones.filter((done) => done._id != id)
    },

    update_done(state, done){
      let index = state.dones.findIndex(d => d.id == done.id)
      if(index != -1){
        state.dones[index] = done
      }
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
