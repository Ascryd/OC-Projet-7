<template>
    <div class="modale" v-if="revele">
        <div class="overlay" @click="toggleModale"></div>
        <div class="card">

            <h2>Mon compte</h2>
            <button @click="toggleModale" class="btn--close">X</button>
            <div class="modifier">
                <h3>Modifier mes informations</h3>

                <div class="form">
                    <div class="champs" v-for="item in labels" :key="item">
                        <label :for="item" >Entrez votre nouveau {{ item }} :</label>
                        <input :id="item" type="text" required>
                    </div>
                </div>
            </div>
            <button class="btn btn--delete">Supprimer mon compte</button>
        </div>
        
    </div>
</template>


<script>

export default {
    name: "AccountModale",
    components: {

    },

    props: ["toggleModale", "revele"],

    data() {
        return {
            labels: ["email", "mot de passe"],
            
        }
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
            background-color: grey;
            padding: 10px;
            border-radius: 5px;

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

            



            
        }
    }
</style>