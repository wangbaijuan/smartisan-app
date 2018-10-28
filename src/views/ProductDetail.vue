<template>
    <div class="detail">
        <Navbar title="坚果 Pro 2S" />
        <div class="content">
            <div class="box item-banner">
                <img src="../assets/images/res/detail.png" alt="">
            </div>
            <section class="box item-info">
                <div class="item-title">商品信息</div>
                <div class="title-content" v-cloak>
                    <h5> {{detail.title}} </h5>
                    <p>双系统，无限屏，骁龙 ™ 710 处理器 · 前置 1600 万像素摄像头 · 6.01 英寸全高清全面屏 · AI 通话降噪 · 人脸解锁 + 指纹解锁 </p>
                    <p class="price">￥ {{ Number.parseFloat(detail.price).toFixed(2)}}</p>
                </div>
            </section>
            <section class="box item-specs">
                <h6>已选版本</h6>
                <p>颜色：<span>炫光蓝</span> </p>
                <p>容量：<span>6G + 64G</span> </p>
                <p>数量：<span>1</span> </p>
            </section>
            <section class="box item-floor">
                <div class="item-title">商品详情</div>
                <img src="../assets/images/res/item1.png" alt="">
                <img src="../assets/images/res/item2.png" alt="">
                <img src="../assets/images/res/item3.png" alt="">
            </section>
        </div>
        <div class="tabbar">
            <div class="cart-png" @click="toCart()">
                <mt-badge type="error">{{this.$store.state.count}}</mt-badge>
                <img src="../assets/images/res/cart.png" alt="">
            </div>
            <div class="btn" @click="addCart()">加入购物车</div>
            <div class="btn btn-primary" @click="buyNow()">现在购买</div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                detail: {}
            }
        },
      components: {Navbar},
      created(){
          var data = [
              {id: 1, title: "坚果 Pro 2S", price: "1998"},
              {id: 2, title: "坚果 R1", price: "2999"},
              {id: 3, title: "坚果 3", price: "1999"},
              {id: 4, title: "坚果 Pro 2 特别版", price: "1899"},
              {id: 5, title: "坚果 Pro 2", price: "1799"},
            ]
        var id = this.$route.params.id;
        var res = data.filter( function(item) {
            if(item.id == id){
                return true;
            }
        } );
        this.detail = res[0];
        console.log(this.detail);
      },
      methods: {
          toCart(){
              this.$router.push('/cart');
          },
          addCart(){
              this.$store.commit('increment');
              Toast({
                    message: '加入购物车成功',
                    position: 'bottom',
                    duration: 2000,
                    iconClass: 'icon icon-warning'
                });
          },
          buyNow(){
              this.$router.push('/login');
          }
      }
    }
</script>

<style scoped>
    .content {
        margin-top: 50px;
    }
    .content .box {
        background-color: #fff;
        margin-bottom: 6px;
        box-shadow: 0 5px 13px rgba(0,0,0,.1);
    }
    .box .item-title {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 12px;
    }
    .box.item-banner {
        text-align: center;
    }
    .box.item-banner img{
        width: 300px;
        height: 300px;
    }
    .box.item-info .title-content {
        padding: 16px 18px;
        font-size: 12px;
        color: #7f7f7f;
        margin-bottom: 6px;
        line-height: 1.5;
        overflow: hidden;
    }
    .box.item-info .title-content h5 {
        font-size: 16px;
        color: #333;
        font-weight: 800;
        margin-bottom: 8px;
    }
    .box.item-info .title-content .price {
        color: #d44d44;
        font-weight: 800;
    }
    .box.item-specs {
        padding: 18px 16px;
    }
    .box.item-specs h6 {
        margin-bottom: 8px;
    }
    .box.item-specs span {
        color: #333;
        font-weight: 700;
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
    .cart-png .mint-badge {
        color: #fff;
        text-align: center;
        display: inline-block;
        position: absolute;
        top: 6px;
        left: 26px;
        padding: 2px;
        border-radius: 50%;
        font-size: 10px;
        width: 20px;
        height: 20px;
        line-height: 18px;
        text-align: center;
    }
</style>
