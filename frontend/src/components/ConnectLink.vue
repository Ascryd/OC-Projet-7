<template>
    <div class="button">
        <button class="btn btn--light" @click="changeTemplate"> {{ button_name }} </button>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex"

export default {
    name: "ConnectLink",
    components: {
        
    },

    props: ["button_name",],

    data() {
        return {
            
        }
    },

    methods: {
        ...mapActions(['changeTemplate'])
    },

    computed: {
        ...mapState(['haveAccount'])
    },
}
</script>


<style lang="scss">

    

</style>