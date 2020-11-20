<template>
    <div>
        <div class="row my-3 justify-content-between">
            <button @click="addDoneI" class="btn btn-success mx-2"> ✓ </button>
            <!-- para el addDone faltaria lo de todoTextChange (pero de done), pero creo que se puede usar el de todo-->
            <h3 v-if="!editing">{{todo.title}}</h3>
            <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="col form-control">
            <div>
                <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
                <button @click="deleteTodo(todo.id)" class="btn btn-danger"> Delete</button>
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
                editing: false,
                doneText: "",
            }
        },
        
        methods:{
            ...mapActions(["deleteTodo", "updateTodo", "addDone"]),

            // TO DO
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
            },

            // DONE
            addDoneI(){

                this.addDone({
                    id: this.todo.id,
                    title: this.todo.title,
                })

                this.deleteTodo(this.todo.id)
                // LO SIGUIENTE CREO QUE NO ES NECESARIO
                // this.doneText = ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>