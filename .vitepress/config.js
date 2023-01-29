const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 30
    await generatePaginationPages(pageSize)
    return {
        title: 'PPST',
        base:'/',
        description: 'vitepress,blog,blog-theme',
        lang:'zh',
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'http://git.ppst.top/ppst/vitepress-demo',
            logoTitle:'PPST',
            nav: [
                { text: '首页', link: '/' ,icon:'🌊'},
                { text: 'DEMO', link: '/pages/demo',icon:'🌞' },
                { text: '搜索', link: '/pages/search' ,icon:'🔎'},
                { text: '归档', link: '/pages/archives',tag:'archives',target:'_self'},
            ],
            banner:{
                title:'标题',
                subTitle:'小标题',
                description:'路在脚下，踏实一步步走。'
            }
        },
        srcExclude: ['README.md']
    }
}

module.exports = config()
