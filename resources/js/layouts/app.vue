<template>
  <div>
    <Navbar />
    <div style="padding-top: 147px">
      <router-view></router-view>  
    </div>
    <MyFooter />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style>
.custom-container{
  @apply container;
  @apply mx-auto lg:px-0 px-5;
}
.header{
  @apply text-3xl;
  @apply font-black;
}
b {
  font-weight: bold;
}
</style>