<template>
    <div>
        <div class="banner-box">
            <div class="banner-title">{{banner.title}}</div>
            <div class="banner-sub-title">{{banner.subTitle}}</div>
            <div class="banner-desc">{{banner.description}}</div>
        </div>
       <div class="container mg-t">

            <div class="list">
                <div class="list-item" v-for="(article, index) in posts" :key="index">
                    <a class="title-item" :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <div class="content-item">{{ article.frontMatter.description }}</div>
                    <div class="date-item">{{ article.frontMatter.date }}</div>
                </div>
            </div>
            <div class="pagination">
                <a
                    class="link"
                    :class="{ active: pageCurrent === i }"
                    v-for="i in pagesNum"
                    :key="i"
                    :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
                    >{{ i }}</a
                >
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { Article } from 'shims-vue';
import { useData, withBase } from 'vitepress'

const props = defineProps({
    posts: Array<Article>,
    pageCurrent: Number,
    pagesNum: Number
})

const { theme } = useData()

const banner = theme.value.banner;
</script>

<style scoped>
.mg-t{
    margin-top: 20px;
}
.category{
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 70vw;
    margin: 0 auto;
    margin-bottom: 20px;
}
.category .item{
    flex: 1;
    padding: 30px 40px;
    margin: 4px;
    font-size: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-bg1{
    background-color: #f0faf9;
}
.item-bg2{
    background-color: #ffebf5;
}
.item-bg3{
    background-color: #fff0ed;
}
.category .item .title{
    margin-left: 16px;
    font-size: 16px;
}
.category .item .icon{
    font-size: 16px;
    margin-left: 16px;
}

.banner-box{
    height: 340px;
    background-color: #f0eefd;
}
.banner-title {
    margin-left: 20vw;
    color: #5248b5;
    font-size: 44px;
}

.banner-sub-title {
    margin-left: 20vw;
    color: #000;
    font-size: 44px;
}

.banner-desc {
    margin-left: 20vw;
    color: rgba(7, 10, 57, 0.6);
    font-size: 16px;
}


/* 分页 */
.pagination {
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
.link {
    display: inline-block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border: 1px var(--c-divider-light) solid;
    border-right: none;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    /* margin: 0.3rem; */
    background-color: #fff;
}
.link.active {
    background: var(--c-brand);
    color: #fff;
    border: 1px solid var(--c-brand) !important;
}
.link:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
}
.link:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    border-right: 1px var(--c-divider-light) solid;
}
</style>
