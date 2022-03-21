<template>

  <section class="card">
    <div class="connect">

      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in input" :key="item.label">
          <label :for="item.label" >Entrez votre {{ item.label }} :</label>
          <input v-model="item.value" class="input_data" :id="item.label" type="text" required>
        </div>
      </div>

      <div class="photo">
        <button class="btn btn--import">Importer</button>
        <img src="@/assets/logo.png" alt="Photo de profil">
      </div>
      
      <p class="error" v-if ="status == 'error_create'">Adresse email déjà utilisée</p>
      <button @click="register" class="btn btn_connect" >
        <span v-if ="status == 'loading'" >Création du compte...</span>
        <span v-else>Inscription</span>
      </button>

      <div class="connect_link">
      <ConnectLink button_name="J'ai déjà un compte" />
      </div>
    </div>
  </section>
  
</template>

<script>
import ConnectLink from "@/components/ConnectLink.vue"

import {mapState} from "vuex"

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

  computed : {
    ...mapState(['status'])
  },


  methods : {

    emitChangeTemplate () {
      this.$emit('emit-change-template')
    },

    register () {
      // const self = this
      this.$store.dispatch("register", {
        firstName: this.input[0].value,
        lastName: this.input[1].value,
        email: this.input[2].value,
        password: this.input[3].value
      })
      .then(res => {
        console.log(res);
        this.$router.go()
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
}

</script>

<style lang="scss">
  .photo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 100px;
    }
  }
</style>