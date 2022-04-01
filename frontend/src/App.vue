<template>
  <div id="app">
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
  background-color: rgb(80,80,80);
  font-family: roboto;
}

.btn {
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
    }

    &--delete {
      border: none;
      background-color: rgba(202, 0, 0, 0.993);
      color: black;
      font-weight: 550;
      text-align: center;

      &:hover {
        color: black;
      }
    }
}

.btn--light {
    background-color: rgb(34, 33, 33);
    border: none;
    color: #ff3c15;    
}

.profilPic {
  height: 50px;
  width: 50px;
  border: rgba(197, 197, 197, 0.637) solid 1px;
  border-radius: 100%;
  object-fit: cover;

  &--small {
    height: 30px;
    width: 30px;
  }
}

</style>
