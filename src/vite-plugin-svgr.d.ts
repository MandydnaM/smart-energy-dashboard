declare module 'vite-plugin-svgr/client' {
    import { Plugin } from 'vite'
    const svgr: () => Plugin
    export default svgr
}