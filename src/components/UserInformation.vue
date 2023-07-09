<template>
    <div class="cart-page__user user"> 
        <h2 class="user__title">{{getUser?.username}}</h2>
        <span class="user__name">Имя пользователя: {{getUser?.name ?? 'Не найдено'}}</span>
        <span class="user__email">Электронный адрес: {{getUser?.email ?? 'Не найдено'}}</span>
        <span class="user__phone">Номер телефона: {{getUser?.phone ?? 'Не найдено'}}</span>
        <span class="user__city">Город: {{getUser?.address?.city ?? 'Не найдено'}}</span>
    </div>
    
</template>
<script>
import {mapGetters} from 'vuex'

export default{
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters('usersModule',['getUser']),
    },
}

</script>
<style>
    .user{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto;
        margin-top: 30px;
        padding: 20px 15px;
        background: white;
        border-radius: 15px;
    }
    .user__title{
        margin: 0 auto;
        margin-bottom: 10px;
        font-size: 1.5em;
    }
</style>