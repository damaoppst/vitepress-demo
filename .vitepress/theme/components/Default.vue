<template>
    <div>
        <div class="banner-box">
            <div class="banner-title1">{{ selectTag }}</div>
            <div class="banner-title2">随笔</div>
        </div>
        <div class="container">
            <div
                class="card"
                v-for="(article, index) in data[selectTag]"
                :key="index"
            >
                <div class="title">
                    <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <div class="title2">{{ article.frontMatter.date }}</div>
                </div>
                <p class="card-content">
                    {{
                        article.frontMatter.description
                    }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
  ref, computed
} from 'vue'
import { useRoute, useData,withBase } from 'vitepress'
import { initTags } from '../functions'
const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))
let selectTag = 'vue'
console.log('window.location.pathname',window.location.pathname);
if(window.location.pathname.includes('/pages/')){
    selectTag = window.location.pathname.replace("/pages/",'').replace('.html','')
}
</script>

<style scoped>
.banner-box {
    height: 320px;
    padding-left: 20vw;
    background-color: #f0eefd;
}
.banner-title1 {
    margin: 0 auto;
    padding-top: 80px;
    color: #5248b5;
    font-size: 44px;
}
.banner-title2 {
    margin: 0 auto;
    padding-top: 20px;
    opacity: 0.2;
    color: #171a2e;
    font-size: 34px;
}
.container {
    min-height: 600px;
    padding-top: 40px;
    padding-bottom: 120px;
}
.card {
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid #e9e8e8;
}
.title {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
}
.title1 {
    font-style: normal;
    color: #1f7b8f;
    margin-left: 10px;
}
.title2 {
    color: #2c3e50;
    font-style: normal;
    margin-left: 10px;
    font-weight: 400;
    font-size: 20px;
}
</style>
