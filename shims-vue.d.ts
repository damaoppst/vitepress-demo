declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

export interface Article {
    regularPath: string
    frontMatter: {
        description: string
        date: string
        title: string
    }
}
