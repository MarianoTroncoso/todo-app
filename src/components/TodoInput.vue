<template>
    <div class="container">
        <!-- no se puede ingresar tareas sin descripcion -->
        <b-alert v-model="noDescription" variant="danger" dismissible>
            Please enter a Description of the Task
        </b-alert>
        <!-- no se puede ingresar tareas repetidas -->
        <b-alert v-model="exists" variant="danger" dismissible>
            The task already exists
        </b-alert>
        <div class="row">
            <input @change="todoTextChange" v-bind:value="todoText" @keyup.enter="addTodoI" class="col form-control mr-2" type="text" placeholder="enter a task"> 
            <button @click="addTodoI" class="btn btn-primary">Add</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex'

    export default {

        data(){
            return {
                todoText: "",
                noDescription: false,
                exists: false
            }
        },

        methods:{
            ...mapActions(["addTodo"]),
            ...mapGetters(["allTodos"]),

            todoTextChange(e){
                this.todoText = e.target.value
            },

            addTodoI(){
                
                // si todoAux es distinto de "undefined" el elemento ya existe y por lo tanto no lo guardo
                const todoAux = this.allTodos().find(t => t.title == this.todoText)
                const exists = todoAux == undefined? false : true

                if(exists){
                    this.exists = true
                    this.noDescription = false 
                } 
                else if(this.todoText == ''){
                    this.noDescription = true
                    this.exists = false
                }
                else{

                    const newTodo = {
                        title: this.todoText
                    }

                    this.addTodo(newTodo);
                    this.todoText = ""
                    this.noDescription = false  
                    this.exists = false
                }

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>