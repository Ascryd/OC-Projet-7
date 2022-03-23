<template lang="fr">
    <div class="postList">
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
            
            let reverseArray = res.data.results.reverse()
            reverseArray.forEach(element => {
                if (element.post_id == "") {
                    element["comments"] = []
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    this.messages.push(element)
                } else {
                    element["comments"] = [] // Non obligatoire, mais en cas d'ajout de profondeur c'est prêt
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    let id = element.post_id
                    // console.log(id);
                    let reference = res.data.results.find (ref => ref.message_id == id)
                    reference.comments.push(element)
                    // console.log(reference);
                }                
            });

            console.log(this.messages);
            this.messages.reverse()

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