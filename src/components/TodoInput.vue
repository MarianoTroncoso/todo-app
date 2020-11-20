<template>
    <div>
        <!-- no se puede ingresar tareas sin descripcion -->
        <b-alert v-model="noDescription" variant="danger" dismissible>
            Please enter a Description of the Task
        </b-alert>
        <!-- no se puede ingresar tareas repetidas -->
        <b-alert v-model="exists" variant="danger" dismissible>
            The task already exists
        </b-alert>
        <div class="row">
            <input @change="todoTextChange" v-bind:value="todoText" @keyup.enter="addTodoI" class="col form-control mr-2" type="text"> 
            <button @click="addTodoI" class="btn btn-primary">Add</button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex'
    import { v1 } from 'uuid'

    export default {

        computed: {
            validation() {
                return this.todoText > 0
            }
        },

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
                
                // todoAux: variable que guardará "undefined" si el elemento no existe
                // por lo que tendré que guardarlo 
                // si todoAux es distinto de "undefined" el elemento ya existe y por lo tanto no lo guardo
                const todoAux = this.allTodos().find(t => t.title == this.todoText)
                const exists = todoAux == undefined? false : true

                console.log(exists)

                if(exists){
                    this.exists = true
                } 
                else if(this.todoText == ''){
                    this.noDescription = true
                }
                else{
                    this.addTodo({
                        id: v1(),
                        title: this.todoText
                    })
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