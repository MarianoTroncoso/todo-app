<template>
    <div>
        <h2>To Do</h2>
        <div v-for="todo in allTodos" :key="todo.id">
            <TodoItem :todo="todo" />
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TodoItem from './TodoItem'

    export default {
        components:{
            TodoItem,
        },
        computed:{
            ...mapGetters(["allTodos"])
        }
    }
</script>

<style lang="scss" scoped>

</style>