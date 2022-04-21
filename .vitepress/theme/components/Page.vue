<template>
    <div>
        <div class="banner-box">
            <div class="banner-item1">{{banner.title}}</div>
            <div class="banner-item2">{{banner.subTitle}}</div>
            <div class="banner-item3">{{banner.description}}</div>
        </div>
       <div class="container mg-t">
           <div class="category">
               <div class="item item-bg1">
                    <div>💡</div>
                    <div class="title">A地址手册</div>
                   <div class="icon"><a href="" target="__blank">➣➣</a></div>
                </div>
                <div class="item item-bg2">
                    <div>💡</div>
                    <div class="title">B地址手册</div>
                   <div class="icon"><a href="" target="__blank">➣➣</a></div>
                </div>
                <div class="item item-bg3">
                    <div>💡</div>
                    <div class="title">C地址手册</div>
                   <div class="icon"><a href="" target="__blank">➣➣</a></div>
                </div>
           </div>
            <div
                class="card"
                v-for="(article, index) in posts" :key="index"
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
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../functions'

const props = defineProps({
    posts: Array,
    pageCurrent: Number,
    pagesNum: Number
})

const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))

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
    flex-basis: 30%;
    margin: 0 1%;
    padding: 30px 40px;
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
.banner-box {
    height: 340px;
    padding-left: 20vw;
    background-color: #f0eefd;
}

.banner-item1 {
    margin: 0 auto;
    padding-top: 80px;
    color: #5248b5;
    font-size: 44px;
}

.banner-item2 {
    margin: 0 auto;
    padding-top: 20px;
    color: #000;
    font-size: 44px;
}

.banner-item3 {
    margin: 0 auto;
    padding-top: 20px;
    color: rgba(7, 10, 57, 0.6);
    font-size: 16px;
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
.card-content{
    max-width: 70vw;
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