<template>
  <div id="home" class="container"> 
    <h1>To Do App</h1>
    <TodoInput />
    <TodoList />
    <DoneList />

  </div>
</template>

<script>
// @ is an alias to /src
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import DoneList from '../components/DoneList'

export default {
  name: 'Home',
  components: {
    TodoInput,
    TodoList,
    DoneList
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
