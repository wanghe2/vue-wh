<template>
<div  id="topfence" >
    <div class="topleft">
        <a href="http://www.baidu.com" target="_blank" >
            <img src="../assets/images/logo.png" title="系统首页" />
        </a>
    </div>
    <ul class="nav">
        <li>
            <a href="http://www.baidu.com" target="_blank" >
                  <img  src="../assets/images/home.png" title="首页" />
                <h2>
                    首页
                </h2>
            </a>
        </li>
        <li>
            <a href="http://www.baidu.com" target="_blank" ><img src="../assets/images/icon03.png" title="我的待办" />
                <h2>
                    我的待办
                </h2>
            </a>
        </li>
		<li>
            <a href="http://www.baidu.com" target="_blank" >
                <img src="../assets/images/icon01.png" title="历史待办" />
                <h2>
                    历史待办
                </h2>
            </a>
        </li>
	</ul>

	<div class="topright">
		<ul>
			<li>
				<span><img src="../assets/images/help.png" title="帮助" class="helpimg" />
				</span><a style="cursor: pointer;" href="#">帮助</a>
			</li>
			<li>
			    <a href="http://www.baidu.com" target="_blank"  >修改密码</a>
			</li>	
            <li>
                <a style="cursor: pointer;" href="#">关于</a>
            </li>
            <li>
               <a @click="userLogout" type="danger">退出</a>
            </li>
		</ul>
        <div class="user position1">
            <span>{{username}}</span>
        </div>

	</div>

</div>
</template>
<script>
export default {
    name:'top',
    data(){
        return {
            username:'管理员'
        }
    },
    methods:{
        userLogout(){
            this.$emit("logout");
        }
    }
}
</script>
<style  scoped>
@import "../assets/css/style.css";
#topfence{
  background-color: #1c77ac;
  background-repeat: -X;
   background-position: center top;
    overflow: hidden;
    background-image: url(../assets/images/topbg.gif);
}
.position1{
    margin-left: 140px;
}
</style>
