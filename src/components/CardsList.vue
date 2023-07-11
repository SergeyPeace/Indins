<template>
    <ul>
        <li v-for="cardsItem in posts" 
        :key="cardsItem.id" 
        @click="$router.push({name:'card', params:{id: cardsItem.id}})"
        >
            <h3>{{getUsername(cardsItem.userId)}}</h3>
            {{ cardsItem.title }}
        </li>
    </ul>
</template>
<script>
import {mapGetters} from 'vuex'

export default{
    props:['posts'],
    methods:{
        getUsername(userId){
            return this.getUsers.find(name => name.id === userId)?.username
        }
    },

    computed:{
        ...mapGetters('usersModule',['getUsers']),
    },
}
</script>
<style scoped>
    ul{
        padding: none;
    }
    li{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 20px auto;
        padding: 10px 15px;
        width: 70%;
        list-style-type: none;
        background: white;
        border-radius: 15px;
        cursor: pointer;
    }
    li h3{
        margin: 0;
        margin-bottom: 5px;
    }
</style>