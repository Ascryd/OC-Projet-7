<template>
  <div class="login">
    <Header />
    
    <section>
      <div class="connect">
        <h1>Connexion</h1>
          <div class="champs" v-for="item in labels" :key="item">
            <label :for="item" >Entrez votre {{ item }}</label>
            <input :id="item" type="text" required>
          </div>
        
          <button class="btn">Connexion</button>
          <router-link :to="'/register'">Créer un compte</router-link>
      </div>
    </section>
  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'


export default {
  name: 'Login',
  components: {
    Header,
    // Register
  },

  data() {
    return {
      labels: ["email", "mot de passe"]
    }
  },
}






</script>

<style scoped lang="scss">

  section {
    background-color: rgb(163, 163, 163);
    height: 100%;
  }

</style>
