<template>
    <div class="product-container">
        <h2 class="title">
            <span>热销商品</span>
            <span class="mui-icon mui-icon-arrowright"></span>
        </h2>
        <div class="pro-box">
            <div class="product-items">
                <ProductItem imgUrl="../../assets/images/res/hot1.png"></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem> 
                <ProductItem></ProductItem>       
            </div>
        </div>
    </div>
</template>

<script>

import ProductItem from '@/components/subComponents/ProductItem.vue'
    export default {
        components: {ProductItem}
    }
</script>

<style  scoped>
    .product-container .title {
        height: 40px;
        line-height: 40px;
        font-size: .75rem;
        font-weight: 700;
        color: #666;
        padding: 0 1.2rem;
        margin: 0;
        border-bottom: 1px solid #e1e1e1;
        box-shadow: 0 1px 1px 0 #e1e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product-container .pro-box {
        width: 100%;
        padding:10px 0;
        overflow-x: scroll;
    }
    .product-container .product-items {
        width: 1108px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
    }
</style>
