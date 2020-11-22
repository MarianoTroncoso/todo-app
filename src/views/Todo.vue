<template>
    <div class="container"> 
        <h1>Todo Tasks</h1>
        <TodoInput />
        <TodoList />

    </div>
</template>

<script>
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

export default {
    name: 'Home',
    components: {
        TodoInput,
        TodoList
    }
}
</script>
