<template>
    <div>
        <h2>Done</h2>
        <div v-for="done in allDones" :key=done.id> 
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

<style lang="scss" scoped>

</style>