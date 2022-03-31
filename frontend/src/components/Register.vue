<template>

  <section class="card">
    <div class="connect">

      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in input" :key="item.label">
          <label :for="item.label" >Entrez votre {{ item.label }} :</label>
          <input v-model="item.value" :id="item.label" type="text" required>
        </div>
      </div>

      <div class="photo">
        <label class="photo__label" for="photo">Votre photo de profil :</label>
        <input id="photo" type="file" class="photo__input">
      </div>
      
      <p class="error" v-if ="status == 'error_create'"> {{this.errMessage}}</p>
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
      errMessage: ""
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
      const imageProfil = document.querySelector(".photo__input").files[0]
      const formData = new FormData()
        formData.append ("firstName", this.input[0].value)
        formData.append ("lastName", this.input[1].value)
        formData.append ("email", this.input[2].value)
        formData.append ("password", this.input[3].value)
        formData.append ("imageUrl", imageProfil)
        formData.append ("securityLevel", 1)

      this.$store.dispatch("register", formData)
      
      .then(res => {
        console.log(res);
        this.$router.go()
      })
      .catch(err => {
        this.errMessage = err.response.data.message
        console.log(err);
      })
    },
  },
}

</script>

<style lang="scss">

.photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

</style>