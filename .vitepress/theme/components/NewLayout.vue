<template>
   <div  id="top">
        <Nav></Nav>
    <div class="layout-box">
        <Sidebar></Sidebar>
        <Content class="content" />
    </div>
    <a href="#top" class="return-top"><BackPng class="return-img" /></a>
    <Copyright />
   </div>
</template>
<script setup>
import Copyright from './Copyright.vue'
import Nav from './Nav.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
import BackPng from './BackPng.vue'
</script>
<style scoped>
.layout-box{
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 90vh;
    justify-content: space-around;
}
.return-top{
    position: fixed;
    z-index: 1;
    right: 10px;
    bottom: 10px;
}
</style>
