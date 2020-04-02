import { reject } from "q";
import axios from "@/common/servlet"
/**
 * 这里把状态userId放到本地存储 sessionStorage 中，防止页面刷新导致state数据丢失
 */
const state={
    userId:sessionStorage.getItem('userId')? sessionStorage.getItem('userId'): 'null'
}
const mutations={
    loginSuccess(state,userId){
        sessionStorage.setItem("userId",userId)
        state.userId=sessionStorage.getItem('userId')
    },
    logout(state){
        sessionStorage.setItem("userId","null")
        state.userId=sessionStorage.getItem('userId')
    }
}
/**
 * 这里说明一下 {commit}其实是context.commit的另外一种写法，
 * 主要是Action 去调用 mutations的方法，如 commit('loginSuccess','data')
 * 
 * Promise其实是一个构造函数,有同步的作用，
 * 只有执行完第一个方法，才能执行第二个方法，适用于这种链式调用
 * resolve是成功状态下的回调函数(调用时对应then)，reject是失败时调用的
 */
const actions={    
    loginActoin({commit},param){
        return new Promise((resolve,reject)=>{
            axios.getRequest({
                url:'/login',
                params:{
                    username:param.name,
                    password:param.password
                }
            }).then(resp=>{
                resolve(resp.data);
            })
        }).catch(error => {
            reject(error)
        })



    }
}


export default {
    state,
    mutations,
    actions
}



/**
 * 
 * promise的示范样例
 * 
function getStr1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('我');
        }, 1000);
    });
}
function getStr2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('爱');
        }, 1000);
    });
}
function getStr3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('米');
        }, 1000);
    });
}
function getStr4() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('饭');
        }, 1000);
    });
}
getStr1().then(function (data) {
    console.log(data);
    return getStr2();
}).then(function (data) {
    console.log(data);
    return getStr3();
}).then(function (data) {
    console.log(data);
    return getStr4();
}).then(function (data) {
    console.log(data);
})
 * 
 * 
 */