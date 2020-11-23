<template>
    <div class="my-3">
        <h2 class="bg-warning">To Do</h2>
        <b-alert show variant="dark" v-if="allTodos.length == 0">No Tasks To Do</b-alert>
        <div v-for="todo in allTodos" :key="todo._id">
            <TodoItem :todo="todo" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TodoItem from './TodoItem'

    export default {
        data(){
            return{
                noTaskTodo: true
            }
        },
        components:{
            TodoItem,
        },
        computed:{
            ...mapGetters(["allTodos"])
        }
    }
</script>