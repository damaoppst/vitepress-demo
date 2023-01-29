import { computed } from 'vue'
import { useRoute } from 'vitepress'
export const defaultLang = 'zh-CN'

export const PREFERRED_LANG_KEY = 'vuetom_lang'

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 960,
  xlg: 1280,
  xxl: 1440,
}
export const useLang = () => {
  const route = useRoute()

  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let lang:string|undefined = ''

    if (path&&path.includes('/')) {
      lang = path.split('/').shift()
    } else {
      lang = defaultLang
    }

    return lang
  })
}
