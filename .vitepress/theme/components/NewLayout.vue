<template>
    <Nav />
    <div class="box">
        <Sidebar></Sidebar>
        <Content class="content" />
    </div>
    <Copyright />
</template>
<script setup>
import Copyright from './Copyright.vue'
import Nav from './Nav.vue'
import Page from './Page.vue'
import Sidebar from './Sidebar.vue'
</script>
<style scoped>
.box{
    display: flex;
	width: 100%;
	height: 100%;
	min-height: 90vh;
}

</style>
