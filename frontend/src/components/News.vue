<template >
    <div class="News">
        <div v-for="item in messages" :key="item.id" class="post">

            <div class="info">
                <img class="profilPic" src="@/assets/logo.png" alt="Photo de profil">
                <h2>{{item.firstName}} {{item.lastName}}</h2>
                <p>Il y a {{item.timeStamp}}</p>
                <button @click="deleteMessage(item._id)" class="btn">Supprimer</button>
            </div>

            <p class="userPost">{{item.message}}</p>
            <img class="postPic" src="@/assets/logo.png" alt="image du post">

            <!-- <div class="interaction">
                <div class="dislike">
                    <button aria-pressed="false" class="dislike__button">
                        <font-awesome-icon class="like__icon" :icon="['fas', 'thumbs-up']"></font-awesome-icon>
                        <p>254</p>
                    </button>
                </div>
                <font-awesome-icon class="dislike_icon" :icon="['fas', 'thumbs-down']"></font-awesome-icon>
                <font-awesome-icon class="comment_icon" :icon="['fas', 'comment']"></font-awesome-icon>
            </div> -->

            <div class="comments">
                <h2 class="comments_h2">Commentaires</h2>
                <div class="input">
                    <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                    <textarea id="postComment" rows="2" placeholder="Répondez !" name="post" ></textarea>
                    <font-awesome-icon @click="postComment(item._id)" class="send_icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
                </div>
                <div v-for="comment in item.comments" :key="comment.id" class="post_comments">
                    <div class="info">
                        <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                        <h2>{{comment.firstName}} {{comment.lastName}}</h2>
                        <p>Il y a {{comment.timeStamp}}</p>
                        <button class="btn">Supprimer</button>
                    </div>
                    <p class="userPost">{{comment.message}}</p>
                    <img class="postPic" src="@/assets/logo.png" alt="image du post">
                </div>
                
                <!-- <div class="interaction">
                    <div class="dislike">
                        <button aria-pressed="false" class="dislike__button">
                            <font-awesome-icon class="like__icon" :icon="['fas', 'thumbs-up']"></font-awesome-icon>
                            <p>254</p>
                        </button>
                    </div>
                    <font-awesome-icon class="dislike_icon" :icon="['fas', 'thumbs-down']"></font-awesome-icon>
                    <font-awesome-icon class="comment_icon" :icon="['fas', 'comment']"></font-awesome-icon>
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
import moment from 'moment'

export default {
    name: "News",
    components: {

    },

    data() {
        return {
            moment: moment(),
            messages: null
        }
    },

    mounted() {
        
        // Récupération des messages
        const axios = require("axios")
        axios.get("http://localhost:3000/api/post/")

            .then(res => {
                let allMessages = []
                res.data.results.forEach((message) => {
                    message["comments"] = []
                    allMessages.push(message)

                   res.data.results.forEach((comment) => {
                       if (message._id == comment.post_id) {                       
                        message.comments.push(comment)
                        let index = allMessages.indexOf(comment)
                        allMessages.splice(index, 1)
                       }
                   })
                })
                
                this.messages = allMessages
            })
             
            .catch(err => {
                console.log(err)
            })
    },


    methods: {

        deleteMessage (id) {
            const axios = require("axios")
            console.log(id)
            axios.delete(`http://localhost:3000/api/post/${id}`)
        },


        postComment (_id) {
            console.log(_id)
            const message = document.querySelector("#postComment").value
            console.log(message)
            const axios = require("axios")
            axios.post("http://localhost:3000/api/post/", {
                message,
                post_id: _id,
                user_id: 1
            })
            .then(res => {
                console.log("Commentaire enregistré" + res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },


}
</script>


<style lang="scss">
    .News {
        
        
        .post {
            padding: 0px 15px 0px 15px;
            padding-bottom: 10px;
            margin-top: 1px;

            .info {
                display: flex;
                align-items: center;
                gap: 20px;

                p {
                    font-size: 12px;
                    font-style: italic;
                }
            }

            .userPost {
                background-color: rgb(34, 33, 33);
                margin: 10px 20px 0 70px ;
                min-width: 200px;
                width: 80%;
                border: white solid 1px;
                border-radius: 5px;
                padding: 5px 10px 5px 10px;
                border-right: none;
                border-left: none;
            }

            .postPic {
                max-width: 250px;
                margin-left: 70px;
            }

            .interaction {
                display: flex;
                justify-content: space-between;
                // background-color: rgb(255, 65, 65);
                width: 30%;
                margin: 5px 0 0 70px;
                
                
                .dislike {
                    &__button {
                        display: flex;
                        gap: 5px;
                        border: none;
                        align-items: center;

                        p{
                            font-size: 0.8rem;
                        }
                    }
                }
            }
            
            .comments {
                margin: 20px 5px 0 0px;

                .comments_h2 {
                    margin-bottom: 10px;
                }

                .input {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    resize: none;
                    min-height: 20px;

                    textarea {
                        width: 70%;
                        resize: none;
                        background-color: rgb(34, 33, 33);
                        border: none;
                        caret-color: white;
                        color: white;
                        border-radius: 5px;

                        &:focus {
                            border: none;
                            outline: solid 2px #ffd7d7;  
                        }
                    }

                    .send_icon {
                        color: #ffd7d7;
                    }
                    
                }
            }

            .post_comments {
                border-top : thin rgb(150, 150, 150) solid;
                margin-top: 25px;
                padding-left: 30px;
                

                .info {
                    padding-top: 10px;
                    display: flex;
                    align-items: center;  
                }
                
                .userPost {
                    margin-left: 50px;
                }

                .postPic {
                    margin-left: 50px;
                }
            }
        }
    }
</style>