<template>
<div class="banner-box">
            <div class="banner-title">归档</div>
            <div class="banner-sub-title">随笔</div>
        </div>
    <div class="archives-box">
        <div v-for="yearList in data">
            <div class="year">
                {{ yearList[0].frontMatter.date.split('-')[0] }}
            </div>
            <a :href="withBase(article.regularPath)" v-for="(article, index) in yearList" :key="index" class="article">
                <div class="title">
                    <div class="title-o"></div>
                    {{ article.frontMatter.title }}
                </div>
                <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
            </a>
        </div>
		<div class="body-bg"></div>
    </div>
</template>

<script lang="ts" setup>
import { useData,withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../functions'

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
</script>

<style scoped>
.year {
    padding: 16px 0 8px 0;
    font-size: 1.4rem;
    font-weight: 600;
}
.archives-box{
    margin: 20px 20vw;
    border-radius: 5px;
    background: #fbfafc;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    padding: 40px;
}
.article {
    padding: 4px 0 4px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    color: var(--title-color);
    font-size: 1rem;
}
.title:hover {
    color: var(--c-brand);
}
.date {
    color: var(--date-color);
}
</style>
