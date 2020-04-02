<template>
  <div class="loginpage" id="loginpage" >
    <div id="mainBody">
			<div id="cloud1" class="cloud" style="background-position: 612.8px 100px;"></div>
			<div id="cloud2" class="cloud" style="background-position: 148px 460px;"></div>
		</div>
    <div class="logintop">
			<span>欢迎登录树维合同管理软件--wanghe</span>
			<ul>
				<li>
					<a href="#">回首页</a>
				</li>
				<li>
					<a href="#">帮助</a>
				</li>
				<li>
					<a href="#">关于</a>
				</li>
			</ul>
		</div>
    <div class="loginbody">
			<form method="post">
				<span class="systemlogo"></span>
				<div class="loginbox">
					<ul>
						<li>
							<input v-model="user.name" type="text" class="loginuser"  />
						</li>
						<li>
							<input v-model="user.password" type="password" class="loginpwd" />
						</li>
						<li>
							<input @click="login" type="button" class="loginbtn" value="登录" />
						</li>
					</ul>
				</div>
			</form>
		</div>
  </div>
</template>

<script>
import "@/assets/js/jquery-1.11.1.min.js"
import "@/assets/js/cloud.js"
import {mapMutations,mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
			msg: 'Welcome to Your Vue.js App',
			user:{
				 name: '',
         password: ''
			}
    }
  },
  mounted:function(){
    this.resizePage();
  },
  methods:{
		...mapMutations([
      'loginSuccess', // 将 `this.loginSuccess()` 映射为 `this.$store.commit('loginSuccess')`
		]),
		...mapActions([
			'loginActoin'
		]),
    resizePage:function(){
      $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
       $(window).resize(function(){  
        $('.loginbox').css({'position':'absolute','left':($(window).width()-692)/2});
       });
		},
		
		login:function(){
			if(this.user.name==''){
				alert('姓名不能为空');
				return;
			}
			if(this.user.password==''){
				alert('密码不能为空');
				return;
			}
			this.loginActoin(this.user).then(resp=>{
					if(resp.flag=='success'){
             this.loginSuccess('wanghe');
						 this.$router.push({name:'mainpage',params:{name:'管理员'}});
           }else{
             alert(resp.message);
           }
			})
		}
  }
}
</script>
<style scoped>
@import "../assets/css/style.css";
#mainBody{
  background-color: #1c77ac;
  background-repeat: no-repeat;
   background-position: center top;
    overflow: hidden;
    background-image: url(../assets/images/light.png);

		
}

</style>
