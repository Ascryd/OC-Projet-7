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

  .btn {
        background-color: #fd2d01;
        border-radius: 5px;
        width: 100px;
        height: 25px;
        font-size: 10px;
  }

  body {
    background-color: rgba(180, 180, 180, 1)
  }
</style>
