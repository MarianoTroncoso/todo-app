<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/done">Done</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {},

  created(){
    this.getAllTasks()
  },

  methods: {
    ...mapActions(["getTasks"]),

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
