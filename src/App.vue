<template>
  <div>
    <v-app id="app">
      <router-view/>
    </v-app>
  </div>
</template>

<script>


export default {
  name: 'App',

};
</script>

<style>

#app {
  background-image: linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("https://dammedia.ledvance.info/media/img/asset-1983570//s,x,1600,y,1200/GettyImages-734166007.jpg");
  -moz-background-size: cover; /* Firefox 3.6+ */
  -webkit-background-size: cover; /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: cover; /* Opera 9.6+ */
  background-size: cover;
  /*background-position: center center;*/


}


</style>
