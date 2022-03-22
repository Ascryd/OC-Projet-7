<template>
    <div class="home">
        <Header :toggleModale="toggleModale" userConnected = true />

        <AccountModale :revele="revele" :toggleModale="toggleModale" />

        <div class="section">
            <NewPost />
            
            <PostList />
            
        </div>

    </div>
</template>


<script>
import PostList from "@/components/PostList.vue"
import Header from "@/components/Header.vue"
import AccountModale from "@/components/AccountModale.vue" 
// import moment from 'moment'

import NewPost from "@/components/NewPost.vue"


export default {
    name: "Home",
    components: {
        Header,
        PostList,
        AccountModale,
        NewPost,
    },

    props: ["userConnected"],

    data() {
        return {
            revele: false,
        }
    },

    mounted() {
        if (this.$store.state.user.id == -1) {   // Test la validité de la session
            this.$router.push("/")
            return
        }

        this.$store.dispatch("getUserInfos")


    },

    methods: {

        toggleModale () {
            this.revele = !this.revele
        },

        // postMessage () {
        //     const axios = require("axios")
        //     const message = document.querySelector("#post_text").value
        //     console.log(message);
        //     let date = moment.utc()
        //     console.log(date)
        //     const image = document.querySelector(".importImage").value
        //     console.log(image);

        //     axios.post("http://localhost:3000/api/post/", {
        //         message,
        //         user_id: 2,
        //         eventDateTime: date,
        //         image

        //     })
        // },

        

        // previewPicture () {
        //     let inputImage = document.querySelector(".importImage").files
        //     console.log(inputImage)

        //     let image = document.querySelector("#image")

        //     image.src = "URL.createObjectURL(inputImage)"
        //     console.log(image)
        // }
    },
    
}


</script>


<style lang="scss">


    .home {
    background: rgb(80,80,80);   
    
        .section {
            max-width: 650px;
            margin: 20px auto 0 auto;
            background-color: rgb(255, 255, 255);
            min-height: 640px;
        }

    }

</style>