<template>
    <div>
    <Navbar title="购物车" />
    <h1> 购物车页面 </h1>

    <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
  export default {
      name: "cart",
      data(){
          return {
          }
      },
      components: {Navbar,Footer}
  }
</script>
<style>
    
</style>