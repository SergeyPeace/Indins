<template>
    <div class="cart-page__post post">
        <h3 class="post__title">{{ getPost?.title }}</h3>
        <p class="post__description">{{ getPost?.body }}</p>     
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
     computed:{
        ...mapGetters('postsModule',['getPost']),
    },
}
</script>

<style>
    .cart-page__post{
        margin: 0 auto;
        margin-top: 30px;
        padding: 20px 15px;
        background: white;
        border-radius: 15px; 
    }
    .post__title{
        font-size: 1.5em;
    }
           
</style>