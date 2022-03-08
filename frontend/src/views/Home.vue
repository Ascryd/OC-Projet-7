<template>
    <div class="home">
        <Header :toggleModale="toggleModale" userConnected = true />

        <AccountModale :revele="revele" :toggleModale="toggleModale" />

        <div class="accueil">
            <div class="post">
                <div class="text">
                    <img class="profilPic" src="@/assets/logo.png" alt="Photo de profil">
                    <textarea id="post_text" placeholder="Exprimez-vous !" name="post" rows="4"></textarea>
                </div>
                <div class="pics">
                    <div class="btnImport">
                    <button class="importImage"><font-awesome-icon :icon="['fas', 'image']"></font-awesome-icon></button>
                    <a :href="imgLink"> {{imgLink}}</a>
                    </div>
                    <img src="@/assets/logo.png" alt="image sélectionné">  <!-- remplacer par un v-bind avec une data -->
                </div>
                <div class="btnPost">
                    <button @click="postMessage" class="btn">Poster</button>         
                </div>
            </div>

            <News />
        </div>
    </div>
</template>


<script>
import Header from "@/components/Header.vue"
import News from "@/components/News.vue"
import AccountModale from "@/components/AccountModale.vue" 


export default {
    name: "Home",
    components: {
        Header,
        News,
        AccountModale,
    },

    props: ["userConnected"],

    data() {
        return {
            imgLink: "Lien de l'image",
            revele: false,

            
            
        }
    },

    methods: {

        toggleModale () {
            this.revele = !this.revele
        },

        postMessage () {
            const axios = require("axios")
            const message = document.querySelector("#post_text").value

            axios.post("http://localhost:3000/api/post/", {
                message,
                user_id: 2
            })
        }
    },
    
}


</script>


<style lang="scss">


    .home {
    background: rgb(80,80,80);
    // background: linear-gradient(90deg, rgba(80,80,80,1) 0%, rgba(223,37,0,1) 50%, rgba(80,80,80,1) 100%);

    }


    .accueil {
        background-color: rgb(255, 255, 255);
        min-height: 640px;
        max-width: 650px;
        margin: 20px auto 0 auto ;
        

        .post {
            background-color: rgb(34, 33, 33);
            padding: 15px 15px 15px 15px;
            color: white;

            .text {
                display: flex;
                align-items: center;
                gap: 20px;
                padding-bottom: 7px;

                textarea {
                    background-color: rgb(34, 33, 33);
                    min-width: 200px;
                    width: 80%;
                    resize: none; 
                    border: none;
                    border-radius: 5px;
                    caret-color: white;
                    padding: 5px 10px 5px 10px;
                    color: white;

                    &:focus {
                        outline: solid 2px #FFD7D7
                    }
                    
                    
                }
            }

            .pics {
                padding-left: 70px;

                .btnImport {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    a {
                        font-size: 0.8rem;
                        color: rgb(129, 129, 129);
                    }
                }
    
            }

            .btnPost {
                display: flex;
                flex-direction: row-reverse;
                padding-bottom: 15px; 
            }
        }
    }
</style>