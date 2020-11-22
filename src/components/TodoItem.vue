<template>
    <div>
        <div class="row my-3 justify-content-between">
            <button @click="addDoneI" class="btn btn-success mx-2"> ✓ </button>
            <!-- para el addDone faltaria lo de todoTextChange (pero de done), pero creo que se puede usar el de todo-->
            <h3 v-if="!editing">{{todo.title}}</h3>
            <input v-bind:value="todoText" @change="todoTextChange" v-else type="text" class="col form-control"
            @keyup.enter="updateTodoI(todo)">
            <div>
                <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
                
                <!-- <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button> -->

                <b-button id="show-btn" @click="showModal" class="btn btn-danger">Delete</b-button>

                <b-modal ref="my-modal" hide-footer title="Delete To Do">
                    <div class="d-block text-center">
                        <p>The task has not been completed. Are you sure to delete it?</p>
                    </div>
                    <div class="row">
                        <b-button class="col mt-2" block @click="hideModal">Close</b-button>
                        <b-button   b-button class="col btn btn-danger mt-2" block @click="deleteTodoAndHide(todo._id)">Delete</b-button>
                    </div>
                    
                </b-modal>

                
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
            },

            // MODAL 

            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide()
            },

            deleteTodoAndHide(id){
                this.$refs['my-modal'].hide() // esconder ventana modal
                this.deleteTodo(id)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>