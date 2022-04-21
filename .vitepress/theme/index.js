import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import Page from './components/Page.vue'
import Default from './components/Default.vue'
import Category from './components/Category.vue'
import Tags from './components/Tags.vue'
import Search from './components/Search.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // register global compoment
        app.component('Tags', Tags)
        app.component('Default', Default)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Category', Category)
        app.component('Search', Search)
    }
}
