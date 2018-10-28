<template>
    <div>
        <Navbar title="个人中心" />
      <div class="container">

            <section class="user">
                <div class="user-info">
                   <div class="user-info-1">
                        <img class="user-info-img" src="https://static.smartisanos.cn/account/asset/img/default-user-avatar.png">
                    </div>
                    <div class="user-info-2">
                          <span> 登陆/注册</span>
                    </div>
                    <div class="user-info-3">
                        <router-link>></router-link>
                    </div>
                </div>

                <div class="user-order">
                    <div class="user-order-item">
                        <span class="mui-icon mui-icon-list"></span>
                        <p>全部订单</p>
                    </div>
                      <div class="user-order-item">
                        <span class="mui-icon mui-icon-loop"></span>
                        <p>代付款</p>
                    </div>
                      <div class="user-order-item">
                        <span class="mui-icon mui-icon-home"></span>
                        <p>代收货</p>
                    </div>
                      <div class="user-order-item">
                        <span class="mui-icon mui-icon-navigate"></span>
                        <p>售后</p>
                    </div>
                </div>
            </section>

            <section class="server-one">
                 <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">地址管理</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">我的优惠券</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">优先购买码</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">提货兑换卡</a>
                        </li>
                    </ul>
            </section>

             <section class="server-two">
                  <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">常见问题</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">服务支持</a>
                        </li>
                    </ul>
            </section>

             <section class="server-three">
                  <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">意外碎屏保修服务</a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">延长保修服务</a>
                        </li>
                    </ul>
            </section>

        <Footer></Footer>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
    export default {
        name: 'Profile',
        data(){
            return {
            }
        },
        components: {Navbar, Footer}
    }
</script>
<style scoped>
    .user-info {
        width: 100%;
        height: 86px;
        display: flex;
        align-items: center;
        border-bottom: 1px;
    }
    .user-info-1 {
        flex: 1;
        text-align: center;
    }
    .user-info-2 {
        flex: 1;
        text-align: center;
    }
    .user-info-3 {
        flex: 2;
    }
    .user-info-img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        flex: 1;
    }
    .user-order-item {
        border-right: 1px;
    }
    .container {
        margin-top: 50px;
        padding: 10px;
        background: url("https://static.smartisanos.cn/mobile/assets/images/bg-layout@2x.5611bddf255be8472b81b7a740665a5d.png");
    }
    section {
        border-radius: 1rem;
        background-color: white;
        margin-bottom: .7rem;
    } 
    .mui-table-view-cell > a:not(.mui-btn) {
        height: 5rem;
        line-height: 5rem;
        font-size: 2rem;
        text-indent: 2rem;
        padding: 0;
        margin: 0;
    }
    .mui-table-view{
        border-radius: 15.5%
    }
    .user-order {
        display: flex;
        width: 100%;
    }
    .user-order div {
        flex: 1;
        text-align: center;
        border-right: 1px;
    }

</style>