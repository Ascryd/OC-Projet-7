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
                    <!-- <img src="#" id="image" alt="image sélectionné">  remplacer par un v-bind avec une data -->
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
            let message = document.querySelector("#post_text").value
                console.log(message);
            let date = moment.utc()
                console.log(date)
            let user_id = this.user.userId
                console.log(user_id);
            let file = document.querySelector(".importImage").files[0]
                console.log(file);
            const formData = new FormData()
                formData.append ("message", message)
                formData.append ("user_id", user_id)
                formData.append ("eventDateTime", date)
                formData.append ("imageUrl", file)

            const axios = require("axios")
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/post/',
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
    
}



</script>


<style lang="scss">

        .post {
            background-color: rgb(34, 33, 33);
            padding: 15px 15px 15px 15px;
            color: white;
            margin-bottom: 15px;

            .text {
                display: flex;
                align-items: center;
                gap: 20px;
                padding-bottom: 7px;

                textarea {
                    background-color: rgb(61, 61, 61);
                    min-width: 200px;
                    width: 80%;
                    resize: none; 
                    border: none;
                    border-radius: 5px;
                    caret-color: white;
                    padding: 5px 10px 5px 10px;
                    color: white;

                    &::placeholder {
                        color: #FFD7D7;
                    }

                    &:focus {
                        outline: solid 2px #ffd7d7; 
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