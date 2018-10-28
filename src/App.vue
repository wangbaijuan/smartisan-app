<template>
  <div id="app">
    <router-view></router-view>
    <!-- <mt-tabbar v-model="selected" fixed @click.native="tabClick(selected)">   
        <mt-tab-item id="index">
            <img slot="icon" v-if=" selected === 'index' "  src='./assets/images/index/tabbar-sub1-active.png'>
            <img slot="icon" v-else  src='./assets/images/index/tabbar-sub1.png'> 
            首页
        </mt-tab-item>
        <mt-tab-item id="category">
            <img slot="icon" v-if=" selected === 'category' "  src='./assets/images/index/tabbar-sub2-active.png'>
            <img slot="icon" v-else  src='./assets/images/index/tabbar-sub2.png'> 
            分类
        </mt-tab-item>
        <mt-tab-item id="cart" >
          <mt-badge type="error">10</mt-badge>
            <img slot="icon" v-if=" selected === 'cart' "  src='./assets/images/index/tabbar-sub3-active.png'>
            <img slot="icon" v-else  src='./assets/images/index/tabbar-sub3.png'> 
            购物车
        </mt-tab-item>
        <mt-tab-item id="profile">
            <img slot="icon" v-if=" selected === 'profile' "  src='./assets/images/index/tabbar-sub4-active.png'>
            <img slot="icon" v-else  src='./assets/images/index/tabbar-sub4.png'> 
            个人中心
        </mt-tab-item>
  </mt-tabbar> -->
  </div>
</template>

<script>
  export default {
    name: "App",
    // data(){
    //   return {
    //     selected: "index",
    //   }
    // },
    // methods: {
    //   tabClick(id){
    //     this.$router.push('/'+id);
    //   }
    // },
    // watch: {
    //   selected: function(val, oldVal){
    //     // console.log(val, oldVal);
    //   }
    // }

  }
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
html,body {
  font-size: 10px !important;
}
#app {
  background-color: #f5f5f5;
}
#app .mint-tabbar {
    background: #fff;
    box-shadow: 0 -11px 32px rgba(0,0,0,.08);
}
#app .mint-tabbar > .mint-tab-item .mint-tab-item-label{
  color: #9a9a9a;
  font-size: 12px;
  position: relative;
}
.mint-tab-item .mint-tab-item-label .mint-badge {
    color: #fff;
    text-align: center;
    display: inline-block;
    position: absolute;
    top: -36px;
    right: 23px;
    padding: 2px;
    border-radius: 50%;
    font-size: 10px;
    width: 20px;
    height: 20px;
    line-height: 18px;
    text-align: center;
}
#app .mint-tabbar > .mint-tab-item.is-selected {
  background: linear-gradient(0deg,hsla(0,0%,100%,.05),rgba(0,0,0,.05));
  box-shadow: inset 5px 0 3px -3px rgba(0,0,0,.01), inset -5px 0 3px -3px rgba(0,0,0,.01);
}
#app .mint-tabbar > .mint-tab-item.is-selected .mint-tab-item-label{
  color: #333;
}

</style>
