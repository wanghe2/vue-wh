import Vue from 'vue'
import Vuex from 'vuex'
import LoginStore from './module/login'

Vue.use(Vuex)
/**
 * 具体的store实现放在各个模块当中
 */
export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        login:LoginStore
    }

})