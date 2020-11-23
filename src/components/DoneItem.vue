<template>
    <div>
        <div class="row my-3 justify-content-between">
            <button @click="addTodoFromDoneI" class="btn btn-warning mx-2"> ✓ </button>
            <h3 v-if="!editing"><del>{{done.title}}</del></h3>
            <input v-bind:value="doneText" @change="doneTextChange" v-else type="text" class="col form-control" @keyup.enter="updateDoneI(done)">
            <div>
                <button @click="updateDoneI(done)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
                <button @click="deleteDone(done._id)" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            done: {}
        },
        data(){
            return{
                doneText: "",
                editing: false,
            }
        },
        methods:{
            ...mapActions(["deleteDone", "updateDone", "addTodo", "addTodoFromDone", "deleteDoneFront"]),
            doneTextChange(e){
                this.doneText = e.target.value
            },
            updateDoneI(done){
                this.editing = this.editing == true? false : true
                if(this.editing){
                    this.doneText = done.title
                } else{
                    if(done.title != this.doneText){

                        const newDone = {
                            _id: done._id,
                            title: this.doneText
                        }
                        this.updateDone(newDone)
                    }
                    done.title = this.doneText
                }
            },
            addTodoFromDoneI(){
                this.done.done = false
                this.addTodoFromDone(this.done)            
                this.deleteDoneFront(this.done._id)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>