<script setup lang="ts">
import { useSideBar } from './sidebar/sideBar'
import { SideBarLink } from './SideBarLink'
const items = useSideBar()


</script>

<template>
  <div class="mark-box" v-if="items.length > 0"></div>
  <div class="home" v-if="items.length > 0">
    <h2>💡 目录</h2>
    <ul  class="sidebar-links">
     <SideBarLink v-for="(item,index) of items" :item="item" :key="index"/>
  </ul>
  </div>
  
</template>
<style scoped>
.home{
    width: 300px;
    max-width: 20vw;
    background-color: #f0faf9;
    border-radius: 10px;
    padding: 20px;
    position: fixed;
    top: 76px;
    left: 30px;
    height: 80vh;
    overflow: scroll;
    bottom: 80px;
    background-image: linear-gradient(180deg, #fff, #fff);
    box-shadow: 0 2px 7px 0 rgb(5 34 97 / 10%);
    padding-top: 0;
}
.mark-box{
    width: 300px;
    max-width: 20vw;
    border-radius: 10px;
    padding: 20px;
    margin: 40px;
    height: 100%;
}
.sidebar-links{
    list-style: revert;
}
.sidebar-links{
    padding: 0;
    padding-left: 20px;
    padding-top: 6px;
}
</style>