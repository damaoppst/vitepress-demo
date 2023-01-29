<script setup lang="ts">
import { useSideBar } from './sidebar/sideBar'
import { SideBarLink } from './SideBarLink'
const items = useSideBar()


</script>

<template>
	<div class="seize-a-seat" v-if="items.length > 0"></div>
  <div class="home" v-if="items.length > 0">
    <h2>💡 目录</h2>
    <ul  class="sidebar-links">
     <SideBarLink v-for="(item,index) of items" :item="item" :key="index"/>
  </ul>
  </div>

</template>
<style scoped>
.home{
	position: fixed;
	top: 10vh;
	bottom: 10vh;
	left: 20px;
    width: 20vw;
	height: 80vh;
    background-color: #f0faf9;
    border-radius: 10px;
    padding: 20px;
    overflow: scroll;
    background-image: linear-gradient(180deg, #fff, #fff);
    box-shadow: 0 2px 7px 0 rgb(5 34 97 / 10%);
    margin-right: 20px;
	margin-top: 20px;
}
.seize-a-seat{
	width: 24vw;
	height: 80vh;
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
