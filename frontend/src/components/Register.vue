<template>

  <section class="card">
    <div class="connect">

      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in input" :key="item[0]">
          <label :for="item.label" >Entrez votre {{ item.label }} :</label>
          <input v-model="item.value" class="input_data" :id="item.label" type="text" required>
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
      input: [
        { label: "Prénom", value: ""},
        { label: "Nom", value: ""},
        { label: "email", value: ""},
        { label: "Mot de passe", value: ""},
      ],
      
    }
  },


  methods : {

    emitChangeTemplate () {
      this.$emit('emit-change-template')
    },

    register () {
      const axios = require("axios")
      axios.post("http://localhost:3000/api/auth/signup", {
        firstName: this.input[0].value,
        lastName: this.input[1].value,
        email: this.input[2].value,
        password: this.input[3].value
      })
      .then(res => {
          console.log("Donnés envoyées" + res)
      })
      .catch(err => {
          console.log("Register failed" + err.response.data)
      }) 
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