import DefaultTheme from 'vitepress/theme'

import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import Page from './components/Page.vue'
import Default from './components/Default.vue'
import Search from './components/Search.vue'
import './custom.css'

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // register global compoment
        app.component('Search', Search)
        app.component('Default', Default)
        app.component('Archives', Archives)
        app.component('Page', Page)
    }
}
