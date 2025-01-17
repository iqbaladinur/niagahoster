import Vue from 'vue';
import VueRouter from 'vue-router';

// import page here
import Home from './pages/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

export default router;
