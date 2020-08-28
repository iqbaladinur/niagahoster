<template>
  <div>
    <Navbar />
    <div class="pt-40">
      <router-view></router-view>  
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.custom-container{
  @apply container;
  @apply mx-auto lg:px-0 px-5;
}
</style>