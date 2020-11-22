<template>
    <div>
        <h2 class="bg-warning">To Do</h2>
        <div v-for="todo in allTodos" :key="todo._id">
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