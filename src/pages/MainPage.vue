<template>
  <div>
    <FilterComponent @filterChange="filterHandler"/>
    <CardsList :posts="posts"/>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import FilterComponent from '@/components/FilterComponent.vue'
import CardsList from '@/components/CardsList.vue'

export default {
    data(){
        return{
            posts: [],
        }
    },
    components:{
        FilterComponent,
        CardsList,
    },
    computed:{
        ...mapGetters('postsModule', ['getPosts'])
    },
    methods:{
        ...mapActions('postsModule',['loadPosts', 'filterPosts']),
        async filterHandler(userId){
            this.posts = await this.filterPosts(userId)
        }
    },
    async mounted() {
        await this.loadPosts()
        this.posts = this.getPosts
    },
}
</script>