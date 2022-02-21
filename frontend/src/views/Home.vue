<template>
    <div class="home">
        <Header />

        <div class="accueil">
            <div class="post">
                <p>Poster un message</p>
                <input type="text" placeholder="Exprimez-vous !">
                <button class="btn">Poster</button>         
              
                <button></button>
            </div>
        </div>
    </div>
</template>


<script>
import Header from "@/components/Header.vue"

export default {
    name: "Home",
    components: {
        Header,
    }
    
}


</script>


<style lang="scss">
    .accueil {
        background-color: rgb(255, 255, 255);
        min-height: 640px;
        max-width: 650px;
        margin: 20px auto 0 auto ;
    }
</style>