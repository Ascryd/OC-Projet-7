<template lang="fr">
    <div class="accueil">
        <div class="post">
            <div class="text">
                <img class="profilPic" :src="userInfos.imageProfilUrl" alt="Photo de profil">
                <div class="post_text">
                    <label for="post_text"> Ajoutez un post pour vos collègues -> </label>
                    <textarea v-model="inputPost" id="post_text" placeholder="Exprimez-vous !" name="post" rows="4"></textarea>
                </div>
            </div>
            <div class="pics">
                <div class="btnImport">
                    <label for="importImages">Ajouter une image</label>
                    <input id="importImages" type="file" class="importImage" >
                </div>
            </div>
            <div class="btnPost">
                <button @click="postMessage" class="btn">Poster</button>         
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

    data() {
        return {
            inputPost : "",
        }
    },

    computed: {
        ...mapState(['user']),
        ...mapState(['userInfos'])
    },

    methods: {

        postMessage () {
            let date = moment.utc().format("YYYY-MM-DD HH:mm:ss")
            let user_id = this.user.userId
            let file = document.querySelector(".importImage").files[0]
            const formData = new FormData()
                formData.append ("message", this.inputPost)
                formData.append ("user_id", user_id)
                formData.append ("eventDateTime", date)
                formData.append ("imageUrl", file)
            
            
            if (this.inputPost.split(' ').join("") != "" || file) {
                const axios = require("axios")
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/api/post/',
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then(res => {
                    let newList = res.data.results
                    this.$root.$emit('update-messages', newList)
                    this.inputPost = ""
                    document.querySelector(".importImage").value = ''
                })
                .catch(err => {
                    console.log(err)
                })
            }   
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

        .post_text {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 8px;
            
            textarea {
                background-color: rgb(61, 61, 61);
                min-width: 200px;
                width: 100%;
                resize: none; 
                border: none;
                border-radius: 5px;
                caret-color: white;
                padding: 5px 10px 5px 10px;
                color: white;
    
                &::placeholder {
                    color: #ffd7d793;
                }
    
                &:focus {
                    outline: solid 2px #ffd7d7; 
                }
            }

            label {
                margin-left: 10px;
                font-size: 0.9rem;
            }
        }
    }

    .pics {
        padding-left: 70px;

        .btnImport {
            display: flex;
            gap: 5px;
            // align-items: center;
            flex-direction: column;

            label {
                font-size: 0.9rem;
            }

            a {
                font-size: 0.8rem;
                color: rgb(129, 129, 129);
            }
        }
    }

    .btnPost {
        display: flex;
        flex-direction: row-reverse;
        padding: 15px 0 15px 0;
    }
}
</style>