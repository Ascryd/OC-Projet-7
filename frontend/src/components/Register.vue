<template>

  <section class="card">
    <div class="connect">

      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in labels" :key="item">
          <label :for="item" >Entrez votre {{ item }} :</label>
          <input class="input_data" :id="item" type="text" required>
        </div>
      </div>

      <div class="photo">
        <button class="btn btn--import">Importer</button>
        <img src="@/assets/logo.png" alt="Photo de profil">
      </div>
      
      <button @click="register" class="btn btn_connect" >Inscription</button>

      <div class="connect_link">
      <ConnectLink button_name="J'ai déjà un compte" />
      </div>
    </div>
  </section>
  
</template>

<script>
import ConnectLink from "@/components/ConnectLink.vue"

export default {
  name: "Register",
  components: {
    ConnectLink
  },

  data() {
    return {
      labels: ["prénom", "nom", "email", "mot de passe"],
      
    }
  },

  methods : {
    emitChangeTemplate () {
            this.$emit('emit-change-template')
    },

    register () {
      // const axios = require("axios")
      let input = document.querySelector(".input_data")
      console.log(input)
      // axios.post("http://localhost:3000/api/auth/signup", {
        
      // })
        
    }

  },


 }

</script>

<style lang="scss">
  .photo {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      width: 100px;
    }
  }
</style>