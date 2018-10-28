<template>
  <div class="category">
    <Navbar title="分类" />
    <div class="container">
      <p class="title">手机</p>
      <div class="category-banner"><img src="../assets/images/res/category-banner.png" alt=""></div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell" v-for="item in list" :key="item.id">
            <router-link :to="'/detail/'+item.id" class="mui-navigate-right">
                  <img class="mui-media-object mui-pull-left" src="../assets/images/res/category-item.png">
                  <div class="mui-media-body">
                      {{item.title}}
                  </div>
            </router-link>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
  export default {
    name:"category",
      data(){
          return {
            list: []
          }
      },
      created() {
        this.list = [
              {id: 1, title: "坚果 Pro 2S"},
              {id: 2, title: "坚果 R1"},
              {id: 3, title: "坚果 3"},
              {id: 4, title: "坚果 Pro 2 特别版"},
              {id: 5, title: "坚果 Pro 2"},
            ]
      },
      components: {Navbar,Footer}
  }
</script>
<style>
    .container{
      margin-top: 50px;
    }
    .category .title {
      height: 40px;
      padding-left: 12px;
      line-height: 40px;
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #666;
    }
    .category .category-banner{
      height: 122px;
      width: 375px;
      padding: 12px;
      border-top: 1px solid #aaa;
    }
    .category .category-banner img {
      width: 350px;
      height: 90px;
    }
    .mui-table-view  .mui-table-view-cell .mui-media-body{
      line-height: 45px;
    }
</style>