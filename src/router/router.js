import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.debug('Routing to', { to, auth: store.state.auth });

  // Fall through to target route
  next();
});

export default router;
