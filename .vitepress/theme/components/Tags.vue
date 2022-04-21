<template>
    <div>
        <div class="banner-box">
              <div class="banner-title1">标签分类</div>
              <div class="banner-title2">随笔</div>
        </div>
        <div class="container">
            <div class="grid-list">
                <div class="grid-item scale-up-center" v-for="(item, key) in data" :key="key">
                    <a :href="'/pages/category.html?key='+encodeURI(key)" class="nav-item"><div class="item"  @click="toggleTag(key)">
                        <!-- {{ data[key].length }} -->
						<div class="emoi-icon"></div>
                        <span class="title"> {{ key }}</span>
                    </div>
                    </a>
                </div>
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
.grid-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}
.grid-item {
    width: 200px;
    height: 140px;
    background-color: #fff;
    margin: 20px;
    box-shadow: 0 6px 18px 0 rgb(0 0 0 / 10%);
}
.grid-item:hover {
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 18%);
}
.grid-item .item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 35px;
    padding-left: 35px;
}
.grid-item .icon {
    width: 26px;
    margin-bottom: 10px;
}


.emoi-icon{
	font-size: 24px;
	margin-bottom: 4px;
}

.grid-item:nth-child(1n + 0) .emoi-icon:after{
	content:'🍅';
}
.grid-item:nth-child(2n + 0) .emoi-icon:after{
	content:'🍈';
}
.grid-item:nth-child(3n + 0) .emoi-icon:after{
	content:'🍉';
}
.grid-item:nth-child(4n + 0) .emoi-icon:after{
	content:'🍊';
}
.grid-item:nth-child(5n + 0) .emoi-icon:after{
	content:'🍋';
}
.grid-item:nth-child(6n + 0) .emoi-icon:after{
	content:'🍌';
}
.grid-item:nth-child(7n + 0) .emoi-icon:after{
	content:'🍍';
}
.grid-item:nth-child(8n + 0) .emoi-icon:after{
	content:'🥭';
}
.grid-item:nth-child(9n + 0) .emoi-icon:after{
	content:'🍏';
}
.grid-item:nth-child(10n + 0) .emoi-icon:after{
	content:'🍑';
}
.grid-item:nth-child(11n + 0) .emoi-icon:after{
	content:'🍐';
}
.grid-item:nth-child(12n + 0) .emoi-icon:after{
	content:'🍒';
}
.grid-item:nth-child(13n + 0) .emoi-icon:after{
	content:'🍓';
}
.grid-item:nth-child(14n + 0) .emoi-icon:after{
	content:'🥝';
}
.grid-item:nth-child(15n + 0) .emoi-icon:after{
	content:'🥥';
}

.grid-item .title {
    font-size: 20px;
    font-weight: 700;
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
