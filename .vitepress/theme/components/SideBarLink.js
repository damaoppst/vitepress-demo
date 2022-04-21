import { h } from 'vue';
import { useRoute, useData } from 'vitepress';
export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i
export function normalize(path) {
    return decodeURI(path).replace(hashRE, '').replace(extRE, '')
  }
export function isActive(route, path) {
    if (path === undefined) {
      return false
    }
    const routePath = normalize(`/${route.data.relativePath}`)
    const pagePath = normalize(path)
  
    return routePath === pagePath
  }
export function joinUrl(base, path) {
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
export const SideBarLink = (props) => {
    const route = useRoute();
    const { site, frontmatter } = useData();
    const depth = props.depth || 1;
    const maxDepth = frontmatter.value.sidebarDepth || Infinity;
    const headers = route.data.headers;
    const text = props.item.text;
    const link = resolveLink(site.value.base, props.item.link);
    const children = props.item.children;
    const active = isActive(route, props.item.link);
    const childItems = depth < maxDepth
        ? createChildren(active, children, headers, depth + 1)
        : null;
    return h('li', { class: 'sidebar-link' }, [
        h(link ? 'a' : 'p', {
            class: { 'sidebar-link-item': true, active },
            href: link
        }, text),
        childItems
    ]);
};
function resolveLink(base, path) {
    if (path === undefined) {
        return path;
    }
    // keep relative hash to the same page
    if (path.startsWith('#')) {
        return path;
    }
    return joinUrl(base, path);
}
function createChildren(active, children, headers, depth = 1) {
    if (children && children.length > 0) {
        return h('ul', { class: 'sidebar-links' }, children.map((c) => {
            return h(SideBarLink, { item: c, depth });
        }));
    }
    return active && headers
        ? createChildren(false, resolveHeaders(headers), undefined, depth)
        : null;
}
function resolveHeaders(headers) {
    return mapHeaders(groupHeaders(headers));
}
function groupHeaders(headers) {
    headers = headers.map((h) => Object.assign({}, h));
    let lastH2;
    headers.forEach((h) => {
        if (h.level === 2) {
            lastH2 = h;
        }
        else if (lastH2) {
            ;
            (lastH2.children || (lastH2.children = [])).push(h);
        }
    });
    return headers.filter((h) => h.level === 2);
}
function mapHeaders(headers) {
    return headers.map((header) => ({
        text: header.title,
        link: `#${header.slug}`,
        children: header.children ? mapHeaders(header.children) : undefined
    }));
}