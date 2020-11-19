<template>
    <div>
        <div class="row my-3 justify-content-between">
            <h3>{{done.title}}</h3>
            <button class="btn btn-primary mx-2">Edit</button>
            <button @click="deleteDone(done.id)" class="btn btn-danger">Edit</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        props:{
            done: {}
        },
        methods:{
            ...mapActions(["deleteDone"])
        }
    }
</script>

<style lang="scss" scoped>

</style>