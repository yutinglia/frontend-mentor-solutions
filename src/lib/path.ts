import { base } from '$app/paths'

export const getStaticPath = (path: string) => {
    if (base === '/' || base === '') {
        return `${path}`
    }
    return `${base}/${path}`
}