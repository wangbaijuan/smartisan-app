<template>
    <div class="detail">
        <Navbar title="坚果 Pro 2S" />
        <div class="content">
            <div class="box item-banner">
                <img src="../assets/images/res/detail.png" alt="">
            </div>
            <section class="box item-info">
                <div class="item-title">商品信息</div>
                <div class="title-content">
                    <h5>坚果 Pro 2S</h5>
                    <p>双系统，无限屏，骁龙 ™ 710 处理器 · 前置 1600 万像素摄像头 · 6.01 英寸全高清全面屏 · AI 通话降噪 · 人脸解锁 + 指纹解锁 </p>
                    <p class="price">￥ 1998.00</p>
                </div>
            </section>
            <section class="box item-specs">
                <h6>已选版本</h6>
                <p>颜色：炫光蓝</p>
                <p>容量：6G + 64G</p>
                <p>数量：1</p>
            </section>
            <section class="box item-floor">
                <div class="item-title">商品详情</div>
                <img src="../assets/images/res/item1.png" alt="">
                <img src="../assets/images/res/item2.png" alt="">
                <img src="../assets/images/res/item3.png" alt="">
            </section>
        </div>
        <div class="tabbar">
            <div class="cart-png"><img src="../assets/images/res/cart.png" alt=""></div>
            <div class="btn">加入购物车</div>
            <div class="btn btn-primary">现在购买</div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
    export default {
        data(){
            return {}
        },
      components: {Navbar}
    }
</script>

<style scoped>
    .content .box {
        background-color: #fff;
        margin-bottom: 6px;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
    }
    .box.item-banner {
        text-align: center;
    }
    .box.item-banner img{
        width: 300px;
        height: 300px;
    }
    .box.item-floor {
        margin: 0;
    }
    .box.item-floor img {
        width: 100%;
        padding: 0;
        margin: 0;
        vertical-align: top;
    }
    .tabbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 57px;
        background-color: #fff;
        box-shadow: 0 -11px 27px rgba(0,0,0,.08);
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        color: #8c8c8c;
    }
    .tabbar .btn {
        width: 149px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #f0f0f0;
        border-radius: 5px;
        font-size: 16px;
    }
    .tabbar .btn.btn-primary {
        border-color: #3f6aec;
        background-color: #3f6aec;
        color: #f0f0f0;
    }
    .tabbar .cart-png img{
        width: 28px;
        height: 28px;
        vertical-align: middle;
    }
</style>
