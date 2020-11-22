<template>
  <div id="app" class="container">
    <TodoInput />
    <TodoList />
    <DoneList />
  </div>
</template>

<script>

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import DoneList from './components/DoneList'

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    DoneList,
  },

  created(){
    // this.getTodos()
    this.getAllTasks()
  },
  methods:{
    ...mapActions(["getTasks"]), // lista completa de todos

    // nuevo
    // todos and dones
    getAllTasks(){
      fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => {
          this.getTasks(data)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
