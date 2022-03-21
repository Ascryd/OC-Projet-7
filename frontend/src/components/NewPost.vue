<template lang="fr">
    <div>
        <div class="accueil">
            <div class="post">
                <div class="text">
                    <img class="profilPic" src="@/assets/logo.png" alt="Photo de profil">
                    <textarea id="post_text" placeholder="Exprimez-vous !" name="post" rows="4"></textarea>
                </div>
                <div class="pics">
                    <div class="btnImport">
                    <input type="file" class="importImage" @change="previewPicture()">
                    </div>
                    <img src="#" id="image" alt="image sélectionné">  <!-- remplacer par un v-bind avec une data -->
                </div>
                <div class="btnPost">
                    <button @click="postMessage" class="btn">Poster</button>         
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
    name: "NewPost",
    components: {

    },

    computed: {
        ...mapState(['user'])
    },

    methods: {

        postMessage () {
            const axios = require("axios")
            const message = document.querySelector("#post_text").value
            console.log(message);
            let date = moment.utc()
            console.log(date)
            let user_id = this.user.userId
            console.log(this.user.userId);

            axios.post("http://localhost:3000/api/post/", {
                message,
                user_id,
                eventDateTime: date,
            })
        },
    },
    
}



</script>


<style lang="scss">

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
</style>