<template lang="fr">
    <div class="postList">
        <Post   :message="message" 
                :userId="userInfos._id" 
                :securityLevel="userInfos.securityLevel" 
                v-for="message in messages" :key="message.message_id" 
                @update-messages="updateMessages"
            />
    </div>
</template>


<script>
import moment from 'moment'
import Post from "@/components/Post.vue"
import { mapState } from 'vuex'

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

    computed: {
        ...mapState(['userInfos']),
    },


    mounted() {

        const axios = require("axios")
        axios.get("http://localhost:3000/api/post/")
        .then (res => {
            let localTimeDiff = moment().utcOffset()
            moment.locale("fr")
            
            res.data.results.forEach(element => {
                if (element.post_id == "") {
                    element["comments"] = []
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    this.messages.push(element)
                } else {
                    element["comments"] = [] // Non obligatoire, mais en cas d'ajout de profondeur c'est prêt
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    let id = element.post_id
                    let reference = res.data.results.find (ref => ref.message_id == id)
                    reference.comments.unshift(element)
                }
            });

            this.messages.reverse() // On fait le reverse en JS pour !trier! les données dans le bon ordre.
        })
        .catch (err => {
            console.log(err);
        })


        this.$root.$on('update-messages', newList => { // On utilise $root pour communiquer entre frère et soeur
            console.log("new list dans root !");
            this.updateMessages(newList) 
        })
    },

    methods: {

        updateMessages (newList) {
            let localTimeDiff = moment().utcOffset()
            moment.locale("fr")
            const newMessages = []
            
            newList.forEach(element => {
                if (element.post_id == "") {
                    element["comments"] = []
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    newMessages.push(element)
                } else {
                    element["comments"] = []
                    element.eventDateTime = moment(element.eventDateTime).add(localTimeDiff, "minutes").fromNow()
                    let id = element.post_id
                    let reference = newList.find (ref => ref.message_id == id)
                    reference.comments.unshift(element)
                }
            });

            this.messages = newMessages
            this.messages.reverse()
        }
    },
}

</script>


<style lang="scss">

</style>