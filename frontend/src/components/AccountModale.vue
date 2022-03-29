<template>
    <div class="modale" v-if="revele">
        <div class="overlay" @click="toggleModale"></div>
        
        <div class="card">
            <h2>Mon compte</h2>
            <button @click="toggleModale" class="btn--close">X</button>

            <div class="profil">

                <img :src="userInfos.imageProfilUrl" alt="photo de profil">

                <ul class="infos">
                    <li class="info">{{userInfos.firstName}}</li>
                    <li class="info">{{userInfos.lastName}}</li>
                    <li class="info info--noBorder">{{userInfos.email}}</li>
                </ul>
            </div>

            <button @click="deleteUser" class="btn btn--light">Supprimer mon compte</button>
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
                firstName: "",
                lastName: "",
                email: ""
            }

            
        }
    },

    computed: {

        ...mapState ([
            'userInfos'
        ]),
    },

    methods: {
        deleteUser () {
            this.$store.dispatch("deleteUser")
            this.$router.push("/")
        }
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

                &:hover {
                    cursor: pointer;
                }
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
                    gap: 15px;

                    .info {
                        border-bottom: solid black 2px;
                        padding-bottom: 15px;
                        font-size: 18px;
                        width: 100%;
                        text-align: center;
                        
                        &--noBorder {
                            border: none;
                            padding: 0;

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