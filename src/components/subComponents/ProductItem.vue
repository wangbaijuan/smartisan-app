<template>
    <div class="product-item">
        <img src="../../assets/images/res/hot1.png" alt="">
        <div class="info">
            <h4>坚果 Pro 2S</h4>
            <p>双系统，无限屏</p>
            <p class="price">¥ 2298.00</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
               
            }
        }
    }
</script>
<style scoped>
.product-item {
    width: 126px;
    text-align: center;
    color: #7f7f7f;
    /* margin-right: 10px; */
}
.product-item img {
    width: 126px;
    height: 126px;
    border: 1px solid #e1e1e1;
    border-radius: .5rem;
}
.product-item .info h4{
    font-size: 12px;
    font-weight: 700;
}

.product-item .info p {
    font-size: 12px;
    margin-bottom: .5rem;
}
.product-item .info .price {
    color: #d44d44;
}
</style>
