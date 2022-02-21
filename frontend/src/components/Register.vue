<template>

  <section class="card">
    <div class="connect">

      <h1>Inscription</h1>
      <div class="form">
        <div class="champs" v-for="item in labels" :key="item">
          <label :for="item" >Entrez votre {{ item }} :</label>
          <input :id="item" type="text" required>
        </div>
      </div>

      <div class="photo">
        <button class="btn btn--import">Importer</button>
        <img src="@/assets/logo.png" alt="Photo de profil">
      </div>
      
      <button class="btn btn_connect" >Inscription</button>

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
      labels: ["prénom", "nom", "email", "mot de passe"]
    }
  },

  methods : {
    emitChangeTemplate () {
            this.$emit('emit-change-template')
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