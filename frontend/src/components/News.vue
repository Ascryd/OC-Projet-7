<template >
    <div class="News">
        <div v-for="item in post" :key="item.id" class="post">
            <div class="info">
                <img class="profilPic" src="@/assets/logo.png" alt="Photo de profil">
                <h2>{{item.firstName}} {{item.lastName}}</h2>
                <p>Il y a {{item.timeStamp}}</p>
                <button class="btn">Supprimer</button>
            </div>
            <p class="userPost">{{item.userPost}}</p>
            <img class="postPic" src="@/assets/logo.png" alt="image du post">
            <div class="interaction">
                <div class="dislike">
                    <button aria-pressed="false" class="dislike__button">
                        <font-awesome-icon class="like__icon" :icon="['fas', 'thumbs-up']"></font-awesome-icon>
                        <p>254</p>
                    </button>
                </div>
                <font-awesome-icon class="dislike_icon" :icon="['fas', 'thumbs-down']"></font-awesome-icon>
                <font-awesome-icon class="comment_icon" :icon="['fas', 'comment']"></font-awesome-icon>
            </div>

            <div class="comments">
                <h2 class="comments_h2">Commentaires</h2>
                <div class="input">
                    <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                    <textarea rows="2" placeholder="Répondez !" name="post" ></textarea>
                    <font-awesome-icon class="send_icon" :icon="['fas', 'paper-plane']"></font-awesome-icon>
                </div>
                <div class="post_comments">
                    <div class="info">
                        <img class="profilPic profilPic--small" src="@/assets/logo.png" alt="Photo de profil">
                        <h2>{{item.firstName}} {{item.lastName}}</h2>
                        <p>Il y a {{item.timeStamp}}</p>
                        <button class="btn">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
export default {
    name: "News",
    components: {

    },

    data() {
        return {
            post: [
                {
                    firstName: "John",
                    lastName: "Doe",
                    timeStamp: "13 minutes",
                    userPost: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    id: 12,
                    comments: [
                        {

                        }
                    ]
                },

                {
                    firstName: "John",
                    lastName: "Doe",
                    timeStamp: "13 minutes",
                    userPost: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    id: 12
                },

            ],

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
                margin: 20px 5px 0 70px;

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
                margin-top: 25px;
                display: flex;
                align-items: center;
                
            }
        }
    }
</style>