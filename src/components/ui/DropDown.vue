<template>
    <select @click="$emit('select', $event.target.value)">
        <option value="0">{{placeholder}}</option>
        <option 
            v-for="item in items" 
            :key="item.id" 
            :value="item.id"
            >{{item[filde]}}
        </option> 
    </select>
</template>

<script>

export default{
    props:['placeholder','items','filde'],
}
</script>

<style>
    select{
        cursor: pointer;
    }
</style>