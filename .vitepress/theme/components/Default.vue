<template>
    <div>
        <div class="banner-box">
            <div class="banner-title">{{ selectTag }}</div>
            <div class="banner-sub-title">{{ selectTag }}</div>
        </div>
        <div class="container">
            <div class="list">
                <div class="list-item" v-for="(article, index) in data[selectTag]" :key="index">
                    <a class="title-item" :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <div class="content-item">{{ article.frontMatter.description }}</div>
                    <div class="date-item">{{ article.frontMatter.date }}</div>
                </div>
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
if(window.location.pathname.includes('/pages/')){
    selectTag = window.decodeURI(window.location.pathname.replace("/pages/",'').replace('.html',''))
}
</script>

<style scoped>
</style>
