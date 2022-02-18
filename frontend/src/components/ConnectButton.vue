<template>
    <div class="button">
        <button class="ChangeTemplate" @click="emitChangeTemplate"> {{ button_name }} </button>
    </div>
</template>


<script>
export default {
    name: "ConnectButton",
    components: {
    
    },

    data() {
        return {
            
        }
    },

    methods: {
        emitChangeTemplate() {
            this.$emit('change-template')
        }
    },

    computed: {
        
    },
}
</script>


<style lang="scss">
    
</style>