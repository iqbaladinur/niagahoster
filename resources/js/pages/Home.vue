<template>
  <div>
    <Hero />
    <Features class="mt-5" />
    <Benefits class="mt-5" />
    <hosting-fasility class="mt-5" />
    <Laravel class="mt-5" />
    <modules class="mt-10" />
    <support class="mt-5" />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Benefits from '../components/Benefits.vue';
import HostingFasility from '../components/HostingFasility.vue';
import Laravel from '../components/Laravel.vue';
import Modules from '../components/Modules.vue';
import Support from '../components/Support.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    Features,
    Benefits,
    HostingFasility,
    Laravel,
    Support,
    Modules
  }
}
</script>
