import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)






import menu from './modules/menu'
import role from './modules/role.js'
import manger from './modules/manger'
import cate from './modules/cate'
import specs from './modules/specs'
import user from './modules/user'
export default new Vuex.Store({
      modules:{
          menu,
          role,
          manger,
          cate,
          specs,
          user
      }
})
