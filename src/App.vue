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
    this.getTodos()
  },
  methods:{
    ...mapActions(["addTodos"]), // lista completa de todos

    getTodos(){
      fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          this.addTodos(data)
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
