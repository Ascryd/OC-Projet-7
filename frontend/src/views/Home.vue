<template>
    <div class="home">

        <Header @toggle-modale="toggleModale" userConnected = true />

        <AccountModale :revele="revele" @toggle-modale="toggleModale" />

        <div class="section">

            <NewPost  />
            
            <PostList  />

        </div>
    </div>
</template>


<script>
import PostList from "@/components/PostList.vue"
import Header from "@/components/Header.vue"
import AccountModale from "@/components/AccountModale.vue" 
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
        }
    }
}

</script>


<style lang="scss">

.home {
background: rgb(80,80,80);   

    .section {
        max-width: 650px;
        margin: 20px auto 0 auto;
        background: linear-gradient(90deg, rgba(255,215,215,1) 0%, rgba(254,130,108,1) 50%, rgba(253,45,1,1) 100%);
        min-height: 640px;
        box-shadow: 5px 2px 20px black;
    }
}

</style>