<template lang="html">
  <div class="">
    <TopMenu @logout="logoutUser"></TopMenu>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <!--左侧菜单组件-->
            <el-menu
            :default-active="isId"
            @select="handleSelect"
            class="el-menu-vertical-demo"
            background-color="#f0f9fd"
            text-color="#3C3F41"
            active-text-color="#f60">
            <NavMenu :navMenus="totalList"></NavMenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import config from './config'
import TopMenu from '@/components/TopMenu';
import NavMenu from '@/components/LeftMenu'
import {mapMutations} from 'vuex'
export default {
  data() {
    return{
      totalList:[],
      isId:"权限管理"
    }

  },
  methods: {
    ...mapMutations([
      'logout', // 将 `this.loginSuccess()` 映射为 `this.$store.commit('loginSuccess')`
    ]),
    handleSelect(key,keyPath){
      console.log(key,keyPath)
    },
    logoutUser(){
        this.logout()
        //执行退出动作，再刷线页面，就会自动跳转到登陆页
       this.$router.go(0)
    }
  },
  components: {
    NavMenu,TopMenu
  },
  beforeRouteEnter (to, from, next) {
    console.log("我从哪里来",to.params.id,from)
    var self = this
    next(vm=>{
        vm.isId = to.params.id
    })
  },
  watch:{
   $route(to,from){
        this.isId =to.params.id
     }
  },
  created(){
    this.totalList = config.childs
  },
}
</script>

<style lang="css">
</style>
