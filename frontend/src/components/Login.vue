<template>

  <section class="card">
    <div class="connect">

      <h1>Connexion</h1>
      <div class="form">
        <div class="champs" v-for="item in input" :key="item.label">
          <label :for="item.label" >Entrez votre {{ item.label }} :</label>
          <input  v-model="item.value" :id="item.label" type="text" required>
        </div>
      </div>
      
      <p class="error" v-if ="status == 'error_login'">{{errMessage}}</p>
      <button @click="login" class="btn btn_connect">
        <span v-if ="status == 'loading'" >Connexion en cours...</span>
        <span v-else>Connexion</span>
      </button>

      <div class="connect_link">
      <ConnectLink button_name="Créer un compte" />
      </div>
    </div>
  </section>


</template>

<script>
// @ is an alias to /src
import ConnectLink from "@/components/ConnectLink.vue"

import {mapState} from "vuex"




export default {
  name: 'Login',
  components: {
    ConnectLink,
  },

  data() {
    return {
      input: [
        { label: "email", value: ""},
        { label: "mot de passe", value: ""},
      ],
      errMessage: ""
    }
  },

  computed: {
    ...mapState(['status'])
  },

  methods: {

    changeTemplate () {
        this.$emit('emit-change-template')
    },

    login () {
      const self = this
      this.$store.dispatch("login", {
        email: this.input[0].value,
        password: this.input[1].value,
      }) 
      .then(res => {
        console.log(res)
        self.$router.push('/home')
      })
      .catch(err => {
        this.errMessage = err.response.data.message
        console.log(err);
      })
    },

  }
}






</script>

<style scoped lang="scss">

</style>
