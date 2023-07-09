<template>
    <ul>
        <li v-for="cartsItem in posts" 
        :key="cartsItem.id" 
        @click="$router.push({name:'cart', params:{id: cartsItem.id}})"
        >
            <h3>{{getUsername(cartsItem.userId)}}</h3>
            {{ cartsItem.title }}
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