<template>
    <div class="main">
        <div class="search-box">
            <div class="search-item">
                <span class="search-icon">🔎</span>
                <input type="text" placeholder="请输入关键词" v-model="searchList.key" @keydown="search" />
            </div>
        </div>
        <div class="container" v-if="searchList.list.length > 0">
            <div class="card" v-for="(article, index) in searchList.list" :key="index">
                <div class="title">
                    <a :href="withBase(article.regularPath)"> {{ article.frontMatter.title }}</a>
                    <div class="title2">{{ article.frontMatter.date }}</div>
                </div>
                <p class="card-content">
                    {{ article.frontMatter.description }}
                </p>
            </div>
        </div>
        <div class="search-empty" v-else>
            <svg
                xml:space="preserve"
                style="enable-background: new 0 0 1500 1500"
                viewBox="0 0 1500 1500"
                y="0px"
                x="0px"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                id="图层_1"
                version="1.1"
            >
                <rect height="1500" width="1500" class="st0" y="2.8" x="-2"></rect>
                <linearGradient
                    y2="348.2791"
                    x2="741.2178"
                    y1="1451.136"
                    x1="759.1796"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_1_"
                >
                    <stop style="stop-color: #ffffff; stop-opacity: 0" offset="0"></stop>
                    <stop style="stop-color: #d9e2ff" offset="1"></stop>
                </linearGradient>
                <polygon
                    points="185.7,1309.4 185.7,233.5 289.6,233.5 289.6,152.8 424.1,152.8 424.1,497.1 491.3,497.1 491.3,626.2 
	595.2,626.2 595.2,351.8 619.7,351.8 619.7,281.9 836.6,281.9 836.6,351.8 876.3,351.8 876.3,798.3 940.5,798.3 940.5,152.8 
	1020,152.8 1020,526.7 1087.2,526.7 1087.2,357.2 1123.9,357.2 1123.9,220 1310.3,220 1310.3,1309.4"
                    class="st1"
                ></polygon>
                <ellipse ry="57.7" rx="384" cy="1295.1" cx="748" class="st2"></ellipse>
                <g>
                    <path
                        d="M907.3,1203.7H577c-38,0-69.1-31.1-69.1-69.1v-384c0-38,31.1-69.1,69.1-69.1h330.3c38,0,69.1,31.1,69.1,69.1
		v384C976.4,1172.5,945.3,1203.7,907.3,1203.7z"
                        class="st18"
                    ></path>
                </g>
                <path
                    d="M822.7,681.4h-384c-38,0-69.1,31.1-69.1,69.1c0,1.2,0.1,2.4,0.2,3.6c1.9-36.3,32.2-65.5,69-65.5
	c38,0,69.1,31.1,69.1,69.1v61.9h314.9c38,0,69.1-31.1,69.1-69.1C891.9,712.5,860.7,681.4,822.7,681.4z"
                    class="st18"
                ></path>
                <linearGradient
                    y2="718.0462"
                    x2="741.3428"
                    y1="718.0462"
                    x1="368.9573"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_2_"
                >
                    <stop style="stop-color: #a4c4fd" offset="0"></stop>
                    <stop style="stop-color: #5d6ed5" offset="1"></stop>
                </linearGradient>
                <path d="M369,754.2h372.4v-72.2h-312C429.3,681.9,371.1,699.5,369,754.2z" class="st3"></path>
                <linearGradient
                    y2="942.5431"
                    x2="976.3952"
                    y1="942.5431"
                    x1="369.5382"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_3_"
                >
                    <stop style="stop-color: #9fc0f9" offset="0"></stop>
                    <stop style="stop-color: #d9e5fc" offset="1"></stop>
                </linearGradient>
                <path
                    d="M907.3,681.4h-84.6H577H438.7c-38,0-69.1,31.1-69.1,69.1c0,1.2,0.1,2.4,0.2,3.6c1.9-36.3,32.2-65.5,69-65.5
	c38,0,69.1,31.1,69.1,69.1v61.9v314.9c0,38,31.1,69.1,69.1,69.1h330.3c38,0,69.1-31.1,69.1-69.1v-384
	C976.4,712.5,945.3,681.4,907.3,681.4z"
                    class="st4"
                ></path>
                <linearGradient
                    y2="1154.8702"
                    x2="1021.5714"
                    y1="1154.8702"
                    x1="577.5714"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_4_"
                >
                    <stop style="stop-color: #a4c4fd" offset="0"></stop>
                    <stop style="stop-color: #5d6ed5" offset="1"></stop>
                </linearGradient>
                <path
                    d="M951.3,1203.7c38.7,0,70.3-31.6,70.3-70.3V1106l-373.7,0.9v26.6c0,38.7-31.6,70.3-70.3,70.3h0H951.3z"
                    class="st6"
                ></path>
                <g>
                    <path
                        d="M644.1,784.8h-51.4c-5.7,0-10.3,4.6-10.3,10.3v51.4c0,5.7,4.6,10.3,10.3,10.3h51.4c5.7,0,10.3-4.6,10.3-10.3
		v-51.4C654.4,789.4,649.7,784.8,644.1,784.8z"
                        class="st0"
                    ></path>
                    <path
                        d="M644.1,892.1h-51.4c-5.7,0-10.3,4.6-10.3,10.3v51.4c0,5.7,4.6,10.3,10.3,10.3h51.4c5.7,0,10.3-4.6,10.3-10.3
		v-51.4C654.4,896.8,649.7,892.1,644.1,892.1z"
                        class="st0"
                    ></path>
                    <path
                        d="M706.7,807.1h214.3c4.2,0,7.7-3.5,7.7-7.7s-3.5-7.7-7.7-7.7H706.7c-4.2,0-7.7,3.5-7.7,7.7
		S702.4,807.1,706.7,807.1z"
                        class="st0"
                    ></path>
                    <path
                        d="M706.7,847.7h108c4.2,0,7.7-3.5,7.7-7.7v-0.6c0-4.2-3.5-7.7-7.7-7.7h-108c-4.2,0-7.7,3.5-7.7,7.7v0.6
		C698.9,844.2,702.4,847.7,706.7,847.7z"
                        class="st0"
                    ></path>
                    <path
                        d="M920.9,899.1H706.7c-4.2,0-7.7,3.5-7.7,7.7c0,4.2,3.5,7.7,7.7,7.7h214.3c4.2,0,7.7-3.5,7.7-7.7
		C928.7,902.6,925.2,899.1,920.9,899.1z"
                        class="st0"
                    ></path>
                    <path
                        d="M706.7,955.1h108c4.2,0,7.7-3.5,7.7-7.7v-0.6c0-4.2-3.5-7.7-7.7-7.7h-108c-4.2,0-7.7,3.5-7.7,7.7v0.6
		C698.9,951.6,702.4,955.1,706.7,955.1z"
                        class="st0"
                    ></path>
                    <path
                        d="M644.1,997.3h-51.4c-5.7,0-10.3,4.6-10.3,10.3v51.4c0,5.7,4.6,10.3,10.3,10.3h51.4c5.7,0,10.3-4.6,10.3-10.3
		v-51.4C654.4,1001.9,649.7,997.3,644.1,997.3z"
                        class="st0"
                    ></path>
                    <path
                        d="M920.9,1004.2H706.7c-4.2,0-7.7,3.5-7.7,7.7c0,4.2,3.5,7.7,7.7,7.7h214.3c4.2,0,7.7-3.5,7.7-7.7
		C928.7,1007.7,925.2,1004.2,920.9,1004.2z"
                        class="st0"
                    ></path>
                    <path
                        d="M814.7,1044.2h-108c-4.2,0-7.7,3.5-7.7,7.7v0.6c0,4.2,3.5,7.7,7.7,7.7h108c4.2,0,7.7-3.5,7.7-7.7v-0.6
		C822.4,1047.7,818.9,1044.2,814.7,1044.2z"
                        class="st0"
                    ></path>
                </g>
                <linearGradient
                    y2="885.4746"
                    x2="969.2365"
                    y1="1094.5743"
                    x1="956.6401"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_5_"
                >
                    <stop style="stop-color: #a4c4fd" offset="0"></stop>
                    <stop style="stop-color: #5d6ed5" offset="0.7398"></stop>
                </linearGradient>
                <path
                    d="M1002.5,1038.5l-54.3-54.3c-8-8-21.2-8-29.2,0c-8,8-8,21.2,0,29.2l54.3,54.3c8,8,21.2,8,29.2,0
	C1010.6,1059.7,1010.6,1046.5,1002.5,1038.5z"
                    class="st7"
                ></path>
                <linearGradient
                    y2="927.9547"
                    x2="1206.4988"
                    y1="927.9547"
                    x1="752.6002"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_6_"
                >
                    <stop style="stop-color: #bbcdec" offset="0"></stop>
                    <stop style="stop-color: #d9e6f4" offset="1"></stop>
                </linearGradient>
                <path
                    d="M856.5,824.1c-57.4,0-103.9,46.5-103.9,103.9c0,57.4,46.5,103.9,103.9,103.9c57.4,0,103.9-46.5,103.9-103.9
	C960.3,870.6,913.8,824.1,856.5,824.1z M856.5,1005.6c-42.9,0-77.7-34.8-77.7-77.7c0-42.9,34.8-77.7,77.7-77.7
	c42.9,0,77.7,34.8,77.7,77.7C934.2,970.9,899.4,1005.6,856.5,1005.6z"
                    class="st8"
                ></path>
                <linearGradient
                    y2="923.5212"
                    x2="1215.1547"
                    y1="923.5212"
                    x1="761.2561"
                    gradientUnits="userSpaceOnUse"
                    id="SVGID_7_"
                >
                    <stop style="stop-color: #a4c4fd" offset="0"></stop>
                    <stop style="stop-color: #5d6ed5" offset="0.7398"></stop>
                </linearGradient>
                <path
                    d="M865.1,819.7c-57.4,0-103.9,46.5-103.9,103.9c0,57.4,46.5,103.9,103.9,103.9c57.4,0,103.9-46.5,103.9-103.9
	C969,866.2,922.5,819.7,865.1,819.7z M865.1,1001.2c-42.9,0-77.7-34.8-77.7-77.7c0-42.9,34.8-77.7,77.7-77.7s77.7,34.8,77.7,77.7
	C942.8,966.4,908,1001.2,865.1,1001.2z"
                    class="st9"
                ></path>
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../functions'
const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))

const searchList = ref({ key: '', list: [] })
const search = (event: any) => {
    if (event.code == 'Enter') {
        searchList.value.list = []
        let list = initTags(theme.value.posts)
        let tempValueList = []
        for (let [key, value] of Object.entries(list)) {
            if (key.includes(searchList.value.key)) {
                tempValueList.push(...value)
            }
            for (const itemKey in value) {
                if (Object.prototype.hasOwnProperty.call(value, itemKey)) {
                    const ele = value[itemKey]
                    let hasArticle = false
                    if (ele.frontMatter.title.includes(searchList.value.key)) {
                        hasArticle = true
                    }
                    if (ele.frontMatter.description.includes(searchList.value.key)) {
                        hasArticle = true
                    }
                    if (hasArticle) {
                        tempValueList.push(ele)
                    }
                }
            }
        }
        tempValueList = [...new Set(tempValueList)]
        searchList.value.list = tempValueList
    }
}
</script>

<style scoped>
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
}
.search-item {
    display: flex;
    flex-basis: 60%;
    align-items: center;
    border-radius: 4px;
    border: 2px solid #7d95e7;
}
.search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    border-right: 2px solid #7d95e7;
}
.search-empty {
    display: flex;
    justify-content: center;
    height: 60vh;
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

main {
    width: 100%;
    height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
}
::-webkit-input-placeholder {
    line-height: 1.375em;
}
input {
    flex: 1;
    outline: none;
    color: #666;
    font-size: 0.9em;
    padding: 0.5em;
    border-radius: 0.2em;
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

.st0 {
    fill: #ffffff;
}
.st1 {
    fill: url(#SVGID_1_);
}
.st2 {
    fill: #d6dffd;
}
.st3 {
    fill: url(#SVGID_2_);
}
.st4 {
    fill: url(#SVGID_3_);
}
.st5 {
    fill: #f0f6ff;
}
.st6 {
    fill: url(#SVGID_4_);
}
.st7 {
    fill: url(#SVGID_5_);
}
.st8 {
    fill: url(#SVGID_6_);
}
.st9 {
    fill: url(#SVGID_7_);
}
.st10 {
    fill: url(#SVGID_8_);
}
.st11 {
    fill: url(#SVGID_9_);
}
.st12 {
    fill: url(#SVGID_10_);
}
.st13 {
    fill: url(#SVGID_11_);
}
.st14 {
    fill: url(#SVGID_12_);
}
.st15 {
    fill: #7f9aef;
}
.st16 {
    fill: url(#SVGID_13_);
}
.st17 {
    fill: url(#SVGID_14_);
}
.st18 {
    fill: #8694c9;
}
.st19 {
    fill: url(#SVGID_15_);
}
.st20 {
    fill: url(#SVGID_16_);
}
.st21 {
    fill: url(#SVGID_17_);
}
.st22 {
    fill: url(#SVGID_18_);
}
.st23 {
    fill: url(#SVGID_19_);
}
.st24 {
    fill: url(#SVGID_20_);
}
.st25 {
    fill: url(#SVGID_21_);
}
</style>
