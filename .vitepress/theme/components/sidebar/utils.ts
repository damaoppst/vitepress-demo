export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i
export function isNullish(value:string) {
  return value === null || value === undefined
}
export function isArray(value:string) {
  return Array.isArray(value)
}
export function isExternal(path:string) {
  return outboundRE.test(path)
}
export function isActive(route:{data:{relativePath:string}}, path:string) {
  if (path === undefined) {
    return false
  }
  const routePath = normalize(`/${route.data.relativePath}`)
  const pagePath = normalize(path)

  return routePath === pagePath
}
export function normalize(path:string) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}
export function joinUrl(base:string, path:string) {
  const baseEndsWithSlash = base.endsWith('/')
  const pathStartsWithSlash = path.startsWith('/')
  if (baseEndsWithSlash && pathStartsWithSlash) {
    return base.slice(0, -1) + path
  }
  if (!baseEndsWithSlash && !pathStartsWithSlash) {
    return `${base}/${path}`
  }

  return base + path
}

/**
 * get the path without filename (the last segment). for example, if the given
 * path is `/guide/getting-started.html`, this method will return `/guide/`.
 * Always with a trailing slash.
 */
export function getPathDirName(path:string) {
  const segments = path.split('/')
  if (segments[segments.length - 1]) {
    segments.pop()
  }

  return ensureEndingSlash(segments.join('/'))
}
export function ensureSlash(path:string) {
  return ensureEndingSlash(ensureStartingSlash(path))
}
export function ensureStartingSlash(path:string) {
  return /^\//.test(path) ? path : `/${path}`
}
export function ensureEndingSlash(path:string) {
  return /(\.html|\/)$/.test(path) ? path : `${path}/`
}

/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export function removeExtention(path:string) {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/'
}
