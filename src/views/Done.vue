<template>
    <div class="container"> 
        <h1>Done Tasks</h1>
        <TodoInput />
        <DoneList />

    </div>
</template>

<script>
import TodoInput from '../components/TodoInput'
import DoneList from '../components/DoneList'

export default {
    name: 'Home',
    components: {
        TodoInput,
        DoneList
    }
}
</script>
