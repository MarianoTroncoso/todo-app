<template>
    <div>
        <div class="row my-3 justify-content-between">
            <button class="btn btn-success mx-2"> ✓ </button>
            <h3 v-if="!editing">{{done.title}}</h3>
            <input v-bind:value="doneText" @change="doneTextChange" v-else type="text" class="col form-control">
            <div>
                <button @click="updateDoneI(done)" class="btn btn-primary mx-2">{{editing?'Update':'Edit'}}</button>
                <button @click="deleteDone(done.id)" class="btn btn-danger">Delete</button>
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
            ...mapActions(["deleteDone", "updateDone"]),
            doneTextChange(e){
                this.doneText = e.target.value
            },
            updateDoneI(done){
                this.editing = this.editing == true? false : true
                if(this.editing){
                    this.doneText = done.title
                    this.updateDone(done)
                } else{
                    done.title = this.doneText
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>