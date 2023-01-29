<template>
    <header class="header-box">
        <div class="logo-box">
            <span><a href="/" class="logo-title">{{logoTitle}}</a></span>
        </div>
        <div class="nav-box">
            <div class="nav-list">
                <a :href="item.link" class="nav-item"  v-for="(item, key) in data" :key="key" :target="item.target" ><span>{{item.text}}</span></a>
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
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 0 2px 7px 0 rgb(5 34 97 / 10%);
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
    line-height: 40px;
    padding: 8px 16px;
	font-weight: 700;
}

.header-box .nav-item:hover {
    border-radius: 6px;
    background-color: #f0eefd;
}
.active{
     border-radius: 6px;
    background-color: #f0eefd;
}
</style>
