import { isArray, ensureStartingSlash, removeExtention } from './utils'

export function isSideBarConfig(sidebar:any) {
  return sidebar === false || sidebar === 'auto' || isArray(sidebar)
}
export function isSideBarGroup(item:any) {
  return item.children !== undefined
}
export function isSideBarEmpty(sidebar:any) {
  return isArray(sidebar) ? sidebar.length === 0 : !sidebar
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(sidebar:any, path:string, lang:string) {
  if (isSideBarConfig(sidebar)) {
    return sidebar
  }
  path = ensureStartingSlash(path)
  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(`${lang}${dir}`))) {
      return sidebar[dir][lang]
    }
  }

  return 'auto'
}

/**
 * Get flat sidebar links from the sidebar items. This method is useful for
 * creating the "next and prev link" feature. It will ignore any items that
 * don't have `link` property and removes `.md` or `.html` extension if a
 * link contains it.
 */
export function getFlatSideBarLinks(sidebar:any) {
  return sidebar.reduce((links:any, item:any) => {
    if (item.link) {
      links.push({ text: item.text, link: removeExtention(item.link) })
    }
    if (isSideBarGroup(item)) {
      links = [...links, ...getFlatSideBarLinks(item.children)]
    }

    return links
  }, [])
}
