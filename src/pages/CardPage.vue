<template>
    <div>
    <header>
        <h1 class="header__title">Пост №{{ $route.params.id }}</h1>
    </header>
    <main class="cart-page">
        <router-link class="link--back" :to="{name: 'home'}">← Вернуться к спискам</router-link>
        <div v-if="!isLoading">
            <UserInformation/>
            <PostInformation/>
            <CommentsInformation/>
        </div> 
        <LoaderComponent v-else/>
    </main>
    </div>
</template>
<script>
import UserInformation from "@/components/UserInformation.vue";
import PostInformation from "@/components/PostInformation.vue";
import CommentsInformation from "@/components/CommentsInformation.vue";
import LoaderComponent from "@/components/ui/LoaderComponent.vue"
import { mapActions, mapGetters } from 'vuex';


export default{
    data(){
        return{
            isLoading: false,
        }
    },
    components:{
        UserInformation,
        PostInformation,
        CommentsInformation,
        LoaderComponent,
    },
    methods:{
        ...mapActions('postsModule',['loadPostId']),
        ...mapActions('usersModule',['loadUserId']),
        ...mapActions('commentsModule',['loadComments']),
    },
    computed:{
        ...mapGetters('postsModule',['getPost'])
    },
    async mounted(){
        this.isLoading = true
        await this.loadPostId(this.$route.params.id)
        await this.loadUserId(this.getPost.userId)
        await this.loadComments(this.$route.params.id)
        this.isLoading = false
    }
}

</script>

<style scoped>
    .link--back{
        text-decoration: none;
    }
    .cart-page{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px 25px;
    }
</style>