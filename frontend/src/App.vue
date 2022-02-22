<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {box-sizing: border-box;}
  html,body,ul,li,h1,h2,h3,h4,h5,p,img {margin: 0; padding: 0; font-weight: normal;}
  body {font-size: 16px; font-weight: normal;}
  h1,h2,h3,h4,h5,p {font-size: 1rem;}
  img {display: block;}
  a {color: black; text-decoration: none;}
  ul {list-style-type: none;}


  body {
    background-color: grey;
  }

  .btn {
        // background-color: #fd2d01;
        // border-radius: 5px;
        // min-width: 100px;
        // height: 25px;
        // font-size: 15px;
        // font-weight: 550;
        // align-items: center;
        border-radius: 5px;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        height: 25px;
        min-width: 100px;
        border: 3px #df2500 solid;
        background-color: rgb(34, 33, 33);
        color: white;
        border-top: none;
        border-bottom: none;
        

          &:hover {
            color: #df2500;
            cursor: pointer;
            // min-width: 0px;
            // width: 0px;
          }
          
        
  }

  .btn--light {
      background-color: rgb(34, 33, 33);
      border: none;
      color: #df2500;
            
    }

  .profilPic {
    height: 50px;
    width: 50px;
    border: rgba(197, 197, 197, 0.637) solid 1px;
    border-radius: 100%;

    &--small {
      height: 30px;
      width: 30px;
    }
  }

  

@keyframes BorderCollision {
    0% {
      width: 0%;
    }
    50% {
      width: 0px;
    }
    100% {
      width: 0%;
    }
}

</style>
