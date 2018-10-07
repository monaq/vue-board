import Vue from 'vue'
import Vuex from 'vuex'

import home from './module/home'
// import auth from './auth.module'
// import article from './article.module'
// import profile from './profile.module'

Vue.use(Vuex)

export default new Vuex.Store({
    moudles: {
        home
        // auth,
        // articles,
        // profile
    }
})