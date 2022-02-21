<template>
    <div class="Connexion">
        <Header />
        <div class="element">
            <div v-if="$store.state.haveAccount == true" class="login">
            <Login @emit-change-template="changeTemplate" />
            </div>
            <div v-else class="register">
            <Register @emit-change-template="changeTemplate" />
            </div>
        </div>
        
    </div>
</template>


<script>
import Header from "@/components/Header.vue"
import Login from "@/components/Login.vue"
import Register from "@/components/Register.vue"



export default {
    name: "Connect",
    components: {
        Header,
        Login,
        Register,
    },

    data() {
        return {
            userConnected: true
        }
    },

    methods: {
       
        
    }

}
</script>


<style lang="scss">


.connect {
    width: 300px;
    background-color: white;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    // border: solid rgb(221, 221, 221) 2px;
    box-shadow: 2px 2px 10px rgb(78, 78, 78);
    
    
    h1 {
        font-size: 1.3rem;
        font-weight: 530;
        text-align: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        .champs {
            width: 200px;
            display: flex;
            flex-direction: column;
            

            input {
                border-radius: 2px;
                border: none;
                height: 25px;
                background-color: rgb(199, 199, 199);
                margin: 5px 0 15px 0;
            }
        }
    }

    .btn_connect {
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: center;
    }

    .connect_link {
        margin: 20px 0 0 10px;
    }
}



    
</style>