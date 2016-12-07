import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store';
import Home from './pages/Home';

Vue.use(VueRouter);

require('./assets/css/common.styl');

const routes = [{
    path: '/',
    redirect: {
        name: 'home'
    }
}, {
    path: '/index',
    name: 'home',
    component: Home
}];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    store
});
app.$mount('#app');

/* eslint-disable no-new
new Vue({
  el: '#app',
  template: '<Home/>',
  components: { Home }
}) */
