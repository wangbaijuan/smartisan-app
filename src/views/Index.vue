<template>
    <div class="index-container">
        <!--固定顶部-->
        <Navbar />
        <div class="index-content">
            <!-- 轮播 -->
            <div class="home-box ">
                <mt-swipe :show-indicators="false" :auto='5000'>
                    <mt-swipe-item><img src="../assets/images/index/banner1.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/index/banner2.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../assets/images/index/banner3.png" alt=""></mt-swipe-item>
                </mt-swipe>
                <div class="shot-cut-container">
                    <div class="shot-cut">
                        <img src="../assets/images/index/icon1.png" alt="">
                        <p>手机</p>
                    </div>
                    <div class="shot-cut">
                        <img src="../assets/images/index/icon2.png" alt="">
                        <p>空气净化</p>
                    </div>
                    <div class="shot-cut">
                        <img src="../assets/images/index/icon3.png" alt="">
                        <p>官方配件</p>
                    </div>
                    <div class="shot-cut">
                        <img src="../assets/images/index/icon4.png" alt="">
                        <p>品牌周边</p>
                    </div>
                    <div class="shot-cut">
                        <img src="../assets/images/index/icon5.png" alt="">
                        <p>以旧换新</p>
                    </div>
                </div>
            </div>
            <!-- 热销 - slider -->
            <div class="home-box no-pad">
                <ScrollList></ScrollList>
            </div>
            <div class="home-box"></div>
        </div>

        <Footer></Footer>
    </div>   
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ScrollList from '@/components/ScrollList.vue'
import Footer from '@/components/Footer.vue'
    export default {
        data(){
            return {
            }
        },
        components: {Navbar,ScrollList, Footer}
    }
</script>

<style>
    .index-container {
        display: flex;
        flex-flow: column nowrap;
    }
    .index-container .index-content {
        flex: 1;
        margin-top: 50px;
    }
    .index-content .home-box {
        background-color: #fff;
        margin-bottom: 6px;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
        overflow: hidden;
        padding: 14px 0;
    }
    .index-content .home-box.no-pad {
        padding: 0;
    }
    .home-box .mint-swipe {
        width: 100%;
        height: 145px;
        margin-bottom: 24px;
    }
    .mint-swipe-items-wrap {
        width: 90%;
        margin: 0 auto;
    }
    .mint-swipe-item img {
        width: 100%;
    }
    .shot-cut-container{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .shot-cut-container .shot-cut {
        width: 20%;
    }
    .shot-cut-container .shot-cut img {
        width: 25px;
        height: 25px;
    }
    .shot-cut-container .shot-cut p {
        font-size: 1.2rem;
    }
    /* 热销商品 */
    
    
</style>