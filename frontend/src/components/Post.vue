<template lang="fr">

    <div class="Post">

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

        <!-- <div class="comments">
            <h2 class="comments_h2">Commentaires</h2>
            <div class="input">
                <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                <textarea v-model="item.inputComment" rows="2" placeholder="Répondez !" name="post"></textarea>
                <font-awesome-icon @click="postComment(item.message_id, index)" class="send_icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
            </div>
            <div v-for="comment in item.comments" :key="comment.id" class="post_comments">
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
        </div> -->

    </div>

</template>


<script>
export default {
    name: "Post",
    components: {

    },

    props: ["message"],

    data() {
        return {
            
        }
    },
}
</script>


<style lang="scss">
    .Post {
        color: white;
        .originalPost {
            background-color: rgb(34, 33, 33);
            padding: 0px 15px 0px 15px;
            padding-bottom: 10px;
            margin-top: 1px;

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
            }
        }
    }
</style>