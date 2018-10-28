<template>
    <div>
        <Navbar title="个人中心" />
        <h1>个人中心页面</h1>
        <Footer></Footer>
    </div>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
    export default {
        data(){
            return {
            }
        },
        components: {Navbar, Footer}
    }
</script>
<style>
    
</style>