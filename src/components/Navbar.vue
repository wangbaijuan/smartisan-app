<template>
        <!-- <h1 class="mui-title"><img src="" alt=""></h1> -->
        <header id="header" class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-bars mui-pull-left" v-if=" title === undefined || title ==='分类' " ></a>
            <h1 class="mui-title"> <div class="logo" v-if="title === undefined"></div> {{title}}  </h1>
                <a class="mui-icon mui-icon-search mui-pull-right" v-if=" title === undefined || title ==='分类' "></a>
                <a class="mui-btn mui-btn-outlined mui-pull-right" v-if=" title === '购物车' " v-text="cartOperation" @click="cartClick"></a>
                <router-link class="mui-btn mui-btn-outlined mui-pull-left" v-if=" title === '坚果 Pro 2S' " to="/category" > 返回 </router-link >
        </header>
  
</template>

<script>
    export default {
        data(){
            return {
                cartOperation:'编辑'
            }
        },
        props: {
            title:''
        },
        methods: {
            cartClick(){
                if(this.cartOperation === '编辑'){
                    this.cartOperation = "完成"
                }
                else {
                    this.cartOperation === '编辑';
                }
            }
        }
    }
</script>
<style scoped>
#header {
    background-color: #333;
    height: 50px;
}
#header .mui-title {
    color: #eee;
}
#header .mui-title .logo{
    background: url(../assets/images/index/nav-logo.png) no-repeat 0 0;
    background-size: cover;
    height: 50px;
    margin: auto;
    width: 50px;
}
#header .mui-icon {
    color: #eee;
}
#header .mui-btn.mui-btn-outlined {
        background: linear-gradient(#8a8a86,#151515);
        border: 1px solid #666;
        color: #fafafa;
}
</style>

