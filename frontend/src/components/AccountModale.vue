<template>
    <div class="modale" v-if="revele">
        <div class="overlay" @click="toggleModale"></div>
        
        <div class="card">
            <h2>Mon compte</h2>
            <button @click="toggleModale" class="btn--close">X</button>
            <!-- <div class="modifier">
                <h3>Modifier mes informations</h3>

                <div class="form">
                    <div class="champs" v-for="item in labels" :key="item">
                        <label :for="item" >Entrez votre nouveau {{ item }} :</label>
                        <input :id="item" type="text" required>
                    </div>
                </div>
            </div> -->
            <div class="profil">

                <img src="@/assets/logo.png" alt="photo de profil">

                <ul class="infos">
                    <div class="bloc_info"><li class="info">{{userInfos.firstName}}</li></div>
                    <div class="bloc_info"><li class="info">{{userInfos.lastName}}</li></div>
                    <div class="bloc_info"><li class="info">{{userInfos.email}}</li></div>
                </ul>
            </div>

            <button class="btn btn--light">Supprimer mon compte</button>
        </div>
        
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
    name: "AccountModale",
    components: {

    },

    props: ["toggleModale", "revele"],

    data() {
        return {
            labels: ["email", "mot de passe"],

            User: {
                firstName: "John",
                lastName: "Doe",
                email: "JohnDoe@exemple.com"
            }

            
        }
    },

    computed: {

        ...mapState ([
            'userInfos'
        ]),
    },

    methods: {
        
    },
}
</script>



<style lang="scss">
    .modale {
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .overlay {
            background-color: rgba(0, 0, 0, 0.397);
            position: fixed;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            
        }
        .card {
            position: fixed;
            top: 200px;
            background-color: rgb(221, 220, 220);
            padding: 10px;
            border-radius: 5px;
            max-width: 600px;
            min-width: 430px;

            h2 {
                text-align: center;
                font-size: 1.3rem;
            }

            .btn--close {
                font-size: 11px;
                text-align: center;
                height: 17px;
                width: 20px;
                background-color: rgb(255, 49, 49);
                border: none;
                border-radius: 5px;
                color: white;
                position: absolute;
                right: 7px;
                top: 7px;
            }

            .profil {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap-reverse;
                padding: 20px;

                img {
                    width: 150px;
                }

                .infos {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;

                    .bloc__info {
                        border: black solid 1px;
                        

                        .info {
                            border-bottom: solid black 2px;
                            font-size: 18px;
                            
                        }
                    }
                }

            }

            .btn--light {
                background-color: rgb(221, 220, 220);
                color: rgb(255, 0, 0);
                font-weight: 500;

                &:hover {
                    text-decoration: underline ;
                }
            }       
        }
    }
</style>