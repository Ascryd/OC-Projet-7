<template>

  <section class="card">
    <div class="connect">

      <h1>Connexion</h1>
      <div class="form">
        <div class="champs" v-for="item in labels" :key="item">
          <label :for="item" >Entrez votre {{ item }} :</label>
          <input :id="item" type="text" required>
        </div>
      </div>
      
      <button class="btn btn_connect">Connexion</button>

      <div class="connect_link">
      <ConnectLink @emit-change-template="changeTemplate" button_name="Créer un compte" />
      </div>
    </div>
  </section>


</template>

<script>
// @ is an alias to /src
import ConnectLink from "@/components/ConnectLink.vue"


export default {
  name: 'Login',
  components: {
    ConnectLink,
    // Register
  },

  data() {
    return {
      labels: ["email", "mot de passe"],
    }
  },

  methods: {
    changeTemplate () {
            this.$emit('emit-change-template')
        }
  }
}






</script>

<style scoped lang="scss">

</style>
