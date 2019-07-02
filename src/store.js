import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import pathify from '@/store/pathify';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    auth: {
      accessRights: state.auth.accessRights,
    }
  })
});

export default new Vuex.Store({
  modules: {
    pathify
  },

  plugins: [vuexLocal.plugin]
});
