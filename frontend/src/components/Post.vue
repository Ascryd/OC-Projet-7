<template lang="fr">

    <div class="Post" >

        <div class="originalPost">
            <div class="info">
                <img class="profilPic" src="@/assets/logo.png" alt="Photo de profil">
                <h2>{{message.firstName}} {{message.lastName}}</h2>
                <p>{{message.eventDateTime}}</p>
                <button @click="deleteMessage(message.message_id)" class="btn">Supprimer</button>
            </div>

            <div class="post_content">
                <p class="postMessage">{{message.message}}</p>
                <img class="postPic" src="@/assets/logo.png" alt="image du post">
            </div>
        </div>

        <div class="comments">
            <h2 class="comments_h2">Commentaires</h2>
            <div class="input">
                <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                <textarea class="inputComment" rows="2" placeholder="Répondez !" name="post"></textarea>
                <font-awesome-icon @click="postComment(message.message_id)" class="send_icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
            </div>
            <div v-for="comment in message.comments" :key="comment.id" class="post_comments">
                <div class="info">
                    <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                    <h2>{{comment.firstName}} {{comment.lastName}}</h2>
                    <p>{{comment.eventDateTime}}</p>
                    <button @click="deleteMessage(comment.message_id)" class="btn">Supprimer</button>
                </div>

                <div class="comment_content">
                    <p class="message">{{comment.message}}</p>
                    <img class="postPic" src="@/assets/logo.png" alt="image du post">
                </div>
            </div>
        </div>

    </div>

</template>


<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
    name: "Post",
    components: {

    },

    props: ["message"],

    data() {
        return {
            
        }
    },

    computed: {
        ...mapState(['user'])
    },

    methods: {
        postComment (id) {
            console.log(id);
            const message = document.querySelector(".inputComment").value // ah bon ?
            console.log(message);
            const date = moment.utc()
            console.log(date);
            const user_id = this.user.userId
            console.log(user_id);

            // const axios = require("axios")
            // axios.post("http://localhost:3000/api/post/", {
            //     message,
            //     post_id: id,
            //     user_id,
            //     eventDateTime: date
            // })
            // .then(res => {
            //     console.log("Commentaire enregistré" + res)
            // })
            // .catch(err => {
            //     console.log(err)
            // })
        },

        deleteMessage (id) {
            const axios = require("axios")
            console.log(id)
            axios.delete(`http://localhost:3000/api/post/${id}`)
        },
    },

}
</script>


<style lang="scss">
    .Post {
        color: white;
        background-color: rgb(34, 33, 33);
        border-radius: 20px 0 20px 0;

        .originalPost {
            padding: 0px 15px 0px 15px;
            padding-bottom: 10px;
            margin-top: 5px;

            .info {
                padding-top: 10px;
                display: flex;
                align-items: center;
                gap: 20px;

                p {
                    font-size: 12px;
                    font-style: italic;
                }
            }

            .post_content {

                .postMessage {
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
            }
        }

        .comments {
            padding: 25px 25px 0 20px;

            .comments_h2 {
                margin-bottom: 15px;
            }

            .input {
                display: flex;
                gap: 10px;
                align-items: center;
                resize: none;
                min-height: 20px;
                padding-bottom: 25px;

                textarea {
                    background-color: rgb(61, 61, 61);
                    width: 70%;
                    resize: none;
                    border: none;
                    border-radius: 5px;
                    caret-color: white;
                    padding: 5px 10px 5px 10px;
                    color: white;
                    border: none;

                    &::placeholder {
                        color: #FFD7D7;
                    }

                    &:focus {
                        outline: solid 2px #ffd7d7; 
                    }
                }

                .send_icon {
                    color: #ffd7d7;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .post_comments {
                border-top : thin rgb(150, 150, 150) solid;
                // margin-top: 25px;
                padding-left: 30px;

                .info {
                    padding-top: 10px;
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    p {
                        font-size: 12px;
                        font-style: italic;
                    }
                }
                
                .comment_content {
                    margin: 10px 20px 0 50px ;
                    min-width: 200px;

                    .message {
                        width: 80%;
                        border: white solid 1px;
                        border-radius: 5px;
                        padding: 5px 10px 5px 10px;
                        border-right: none;
                        border-left: none;
                    }

                    .postPic {
                        max-width: 250px;
                    }
                }
            }
        }
    }
</style>