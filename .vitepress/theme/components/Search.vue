<template>
    <div>
        <div class="search-box">
            <div class="search-item">
                <span class="search-icon">搜索</span>
                <input type="text" placeholder="请输入关键词" v-model="searchList.key" @keydown="search" />
                 <span class="search-clean" v-if="searchList.key!=''" @click="cleanAll">+</span>
            </div>
        </div>
        <div class="container" v-if="searchList.list.length > 0">
            <div class="list">
                <div class="list-item" v-for="(article, index) in searchList.list" :key="index">
                    <a class="title-item" :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <div class="content-item">{{ article.frontMatter.description }}</div>
                    <div class="date-item">{{ article.frontMatter.date }}</div>
                </div>
            </div>

        </div>
        <div class="container" v-else>
            <div class="grid-list">
                <div class="grid-item scale-up-center" v-for="(item, key) in tags" :key="key">
                    <span class="nav-item"><div class="item"  @click="toggleTag(item)">
                        <span class="title"> {{ item }}</span>
                    </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { Article } from 'shims-vue';
import { useData, withBase } from 'vitepress'
import { initTags,getTags } from '../functions'

const props = defineProps({
    posts: Array<Article>,
    pageCurrent: Number,
    pagesNum: Number
})

const { theme } = useData()
const tags = computed(() => getTags(theme.value.posts))


const searchList:{
    key:string
    list: Array<Article>
} = reactive({ key: '', list: [] })
const cleanAll = ()=>{
    searchList.key = '';
    searchList.list = [];
}
const toggleTag =  (key: string) => {
    searchList.key = key;
    let list = initTags(theme.value.posts)
    let tempValueList = list[key];
    searchList.list = tempValueList
}
const search = (event: any) => {
    if (event.code == 'Enter') {
        searchList.list = []
        let list = initTags(theme.value.posts)
        let tempValueList = []
        if(searchList.key==""){
            searchList.list = [];
        }else{
            for (let [key, value] of Object.entries(list)) {
            if (key.includes(searchList.key)) {
               if(value&& Array.isArray(value)) tempValueList.push(...value)
            }
            if(value&& Array.isArray(value))
            for (const itemKey in value) {
                if (Object.prototype.hasOwnProperty.call(value, itemKey)) {
                    const ele = value[itemKey]
                    let hasArticle = false
                    if (ele.frontMatter.title.includes(searchList.key)) {
                        hasArticle = true
                    }
                    if (ele.frontMatter.description.includes(searchList.key)) {
                        hasArticle = true
                    }
                    if (hasArticle) {
                        tempValueList.push(ele)
                    }
                }
            }
        }
        tempValueList = [...new Set(tempValueList)]
        searchList.list = tempValueList
        }

    }
}
</script>

<style scoped>
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin: 0 auto;
    padding: 50px 0;
}
.search-item {
    display: flex;
    flex: 1;
    align-items: center;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c9d0e7;
}
.search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    font-weight: 700;
    border-right: 2px solid #c9d0e7;
}
.search-clean{
    font-size: 40px;
    transform: rotate(45deg);
    color: #666;
}

::-webkit-input-placeholder {
    line-height: 1.375em;
}
input {
    flex: 1;
    outline: none;
    color: #666;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    /* border: 1px solid #e3e3e3; */
    border: none;
    -webkit-appearance: none;
}
input:hover {
    border: none;
    /* border: 1px solid #b4a078; */
}
input:focus {
    border: none;
    /* border: 1px solid #b4a078; */
    /* box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2); */
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
.title2 {
    color: #2c3e50;
    font-style: normal;
    margin-left: 10px;
    font-weight: 400;
    font-size: 20px;
}
.grid-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 70vw;
    margin: 0 auto;
}
.grid-item {
    background-color: #fff;
}
.grid-item:hover {
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 18%);
}
.grid-item .item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 6px 30px;
    border-radius: 10px;
    margin: 6px 10px;
    background-color: #e3e1e4;
    color: #000;
    font-weight: 100;
    border: none;
}
.grid-item .icon {
    width: 26px;
    margin-bottom: 10px;
}

.grid-item .title {
    font-size: 18px;
    font-weight: 100;
}


/* 分类 */
.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

</style>
