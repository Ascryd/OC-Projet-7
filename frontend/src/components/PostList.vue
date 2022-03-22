<template lang="fr">
    <div>
        <Post :message="message" v-for="message in messages" :key="message.message_id" />
    </div>
</template>


<script>
import moment from 'moment'
import Post from "@/components/Post.vue"

export default {
    name: "PostList",
    components: {
        Post,
    },

    data() {
        return {
            messages: [],
        }
    },


    // Passer les commentaires en props pour les inclure directement avec Post.vue ?
    mounted() {
        const axios = require("axios")
        axios.get("http://localhost:3000/api/post/")
        .then (res => {
            let localTimeDiff = moment().utcOffset()
            moment.locale("fr")
            
            res.data.results.forEach(element => {
                if (element.post_id == "") {
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    console.log(element);
                    element["comments"] = []
                    this.messages.push(element)
                } else {
                    // Mettre les commentaires quelque part dans une variable utilisable dans Post.vue

                }
                
            });
            console.log(this.messages);

        })
        .catch (err => {
            console.log(err);
        })
    },

    methods: {
        
    },
}

</script>


<style lang="scss">
    
</style>