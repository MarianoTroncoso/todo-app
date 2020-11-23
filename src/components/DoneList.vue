<template>
    <div>
        <h2 class="bg-success h2-color">Done</h2>
        <b-alert show variant="dark" v-if="allDones.length == 0">No Tasks Done</b-alert>
        <div v-for="done in allDones" :key=done._id> 
            <DoneItem :done='done' />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import DoneItem from './DoneItem';

    export default {
        components:{
            DoneItem
        },
        computed:{
            ...mapGetters(["allDones"])
        }
    }
</script>

<style scoped>
    .h2-color{
        color: white
    }
</style>