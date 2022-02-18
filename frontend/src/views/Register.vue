<template>
  <div class="register">
    <Header />
    
    <section class="connect">
      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in labels" :key="item">
            <label :for="item" >Entrez votre {{ item }}</label>
            <input :id="item" type="text" required>
        </div>

        <div class="photo">
        <button class= "btn">Importer</button>
        </div>

        <router-link :to="'/'">J'ai déjà un compte</router-link>
      </div>

    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "Register",
  components: {
    Header,
  },

  data() {
    return {
      labels: ["prénom", "nom", "email", "mot de passe"]
    }
  },

  methods : {
    
  },
 }

</script>

<style lang="scss">
  
  .btn_id {
    background-color: blue;
  }
</style>