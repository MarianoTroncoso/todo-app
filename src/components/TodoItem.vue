<template>
    <div>
        <div class="row my-3 justify-content-between">
            <button class="btn btn-success mx-2"> ✓ </button>
            <h3 v-if="!editing">{{todo.title}}</h3>
            <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="col form-control">
            <div>
                <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
                <button @click="deleteTodo(todo.id)" class="btn btn-danger mx-2"> Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            todo:{}
        },
        data(){
            return {
                todoText: "",
                editing: false
            }
        },
        
        methods:{
            ...mapActions(["deleteTodo", "updateTodo"]),

            todoTextChange(e){
                this.todoText = e.target.value
            },
            updateTodoI(todo){
                this.editing = this.editing == true? false : true
                if(this.editing) {
                    this.todoText = todo.title
                    this.updateTodo(todo)
                } else {
                    todo.title = this.todoText
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>