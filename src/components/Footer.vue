<template>
    <mt-tabbar v-model="selected" fixed >   
        <mt-tab-item id="index">
            <img slot="icon" v-if=" selected === 'index' "  src='../assets/images/index/tabbar-sub1-active.png'>
            <img slot="icon" v-else  src='../assets/images/index/tabbar-sub1.png'> 
            首页
        </mt-tab-item>
        <mt-tab-item id="category">
            <img slot="icon" v-if=" selected === 'category' "  src='../assets/images/index/tabbar-sub2-active.png'>
            <img slot="icon" v-else  src='../assets/images/index/tabbar-sub2.png'> 
            分类
        </mt-tab-item>
        <mt-tab-item id="cart" >
          <mt-badge type="error">10</mt-badge>
            <img slot="icon" v-if=" selected === 'cart' "  src='../assets/images/index/tabbar-sub3-active.png'>
            <img slot="icon" v-else  src='../assets/images/index/tabbar-sub3.png'> 
            购物车
        </mt-tab-item>
        <mt-tab-item id="profile">
            <img slot="icon" v-if=" selected === 'profile' "  src='../assets/images/index/tabbar-sub4-active.png'>
            <img slot="icon" v-else  src='../assets/images/index/tabbar-sub4.png'> 
            个人中心
        </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
    name: 'Footer',
    data(){
      return {
        selected: "index",
      }
    },
    methods: {
      tabClick(id){
        console.log('tabClick', this.selected)
        this.$router.push('/'+id);
      }
    },
    watch: {
      selected: function(val, oldVal){
        // tabClick(val);
        console.log(val)
        this.$router.push('/'+val);
      }
    }
}
</script>

