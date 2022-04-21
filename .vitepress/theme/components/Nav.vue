<template>
    <header class="header-box">
        <div class="logo-box">
            <span><a href="/" class="logo-title">{{logoTitle}}</a></span>
        </div>
        <div class="nav-box">
            <div class="nav-list">
                <a :href="item.link" class="nav-item" v-for="(item, key) in data" :key="key"><span>{{item.icon}} {{item.text}}</span></a>
            </div>
        </div>
    </header>
</template>
<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
const data = theme.value.nav;
const logoTitle = theme.value.logoTitle;
</script>
<style scoped>
.header-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: #fff;
}

.header-box .logo-box {
    width: 120px;
}

.header-box .logo-title {
    font-size: 20px;
    font-weight: 700;
}

.header-box .nav-box {
    display: flex;
    padding: 0 10px;
    justify-content: space-evenly;
}

.header-box .nav-list {
    display: flex;
}

.header-box .nav-item {
    height: 40px;
    line-height: 40px;
    padding-right: 6px;
    margin:0 10px;
}

.header-box .nav-item:hover {
    border-radius: 6px;
    background-color: #f0eefd;
}
</style>
