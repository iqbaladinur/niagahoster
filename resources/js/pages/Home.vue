<template>
  <div>
    <Hero />
    <Features class="mt-10" />
    <packages class="mt-10" />
    <Benefits class="mt-10" />
    <hosting-fasility class="mt-10" />
    <Laravel class="mt-10" />
    <modules class="mt-10" />
    <support class="mt-10" />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Packages from '../components/Packages.vue';
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
    Packages,
    Benefits,
    HostingFasility,
    Laravel,
    Support,
    Modules
  }
}
</script>
