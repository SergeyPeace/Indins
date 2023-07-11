<template>
    <div class="card-page__comments comments">
        <h3 class="comments__title">Комментарии</h3>
        <ul class="comments__list">
            <li class="comments__item" v-for="(item, id) in getComments" :key="item.id">
                <span class="comments__number">Комментарий {{ id+1 }}</span>
                <p>{{ item.body }}</p>
            </li>
        </ul>  
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
     computed:{
        ...mapGetters('commentsModule',['getComments']),
    },
}
</script>

<style scoped>
    .card-page__comments{
        margin: 0 auto;
        margin-top: 30px;
        padding: 20px 15px;
        background: white;
        border-radius: 15px; 
    }
    .comments__title{
        font-size: 1.5em;
    }
    .comments__list{
        text-align: left;
    }
    .comments__item{
        list-style-type: none;
    }
    .comments__number{
        font-weight: 700;
    }
           
</style>