<template>
    <div>
        <Navbar title="登陆官网" />
        <div class="container">
            <form class="mui-input-group" @submit.prevent="login">
                <div class="mui-input-row">
                    <input v-model="user.phone" type="text" class="mui-input-clear" placeholder="手机号/邮箱">
                </div>
                <div class="mui-input-row">
                    <input v-model="user.pwd" type="password" class="mui-input-password" placeholder="密码">
                </div>
                <button class="btn mui-btn mui-btn-primary" >登陆</button> 
            </form>
        </div>
        
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { Toast } from 'mint-ui';
export default {
    name: "Login",
    components: {Navbar},
    data() {
        return {
            user: {
                    
            }
        }
    },
    methods: {
        login: function() {
            // login
            if(!this.user.phone || !this.user.pwd) {
                Toast('请输入用户登陆信息');
                return ;
            }
        
            console.log("login success")
             Toast({
                message: '登陆成功',
                iconClass: 'icon icon-success',
                duration: 500
             });
            this.$router.push("/cart")

        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 50px;
        padding: 10px;
    }
    .btn {
        width: 100%;
        height: 60px;
        border-radius: 0.3;
        line-height: 60px;
        font-size: 1.5rem;
        padding: 0;
    }
</style>


