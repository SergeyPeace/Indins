<template>
  <header>
    <h1 class="header__title">Списки</h1>
    <DropDown 
    :placeholder="'Все пользователи'" 
    :items="getUsers" 
    :filde="'username'" 
    @select="selectHandler"
    />
  </header>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import DropDown from './ui/DropDown.vue';
export default {
  components:{
    DropDown,
  },
  computed:{
    ...mapGetters('usersModule',['getUsers']),
  },
  methods:{
    ...mapActions('usersModule', ['loadUsers']),
    selectHandler(userId){
      this.$emit('filterChange', userId)
    }
  },
  async mounted(){
    await this.loadUsers()
  }
}
</script>

<style>
  header{
    display: flex;
    margin: 0;
    padding: 20px 30px;
    background: #4C5866;
    color: white;
  }

  .header__title{
    margin: 0;
    margin-right: auto;
    font-size: 2em;
  }
</style>