import './bootstrap';
import Vue from 'vue';
import App from './layouts/app.vue'
import router from './router'

const vm = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
