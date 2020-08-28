<template>
  <div>
    <Hero />
    <Features class="mt-5"/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    Features,
  }
}
</script>
