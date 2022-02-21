<template>
    <div class="button">
        <button class="btn btn--smooth" @click="changeTemplate"> {{ button_name }} </button>
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

    .btn--smooth {
          background-color: rgb(255, 255, 255);
          border: none;
          color: #df2500;
          :hover {
              color: blue;
              text-decoration: underline;
          }
    }

</style>