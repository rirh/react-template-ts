import react from '@vitejs/plugin-react'
import reactRefesh from '@vitejs/plugin-react-refresh'
import dayjs from 'dayjs'
// import createAutoImport from './auto-import'
import createCompression from './compression'

export default function createVitePlugins(viteEnv: { [key: string]: string }, isBuild = false) {
    process.env.VITE_APP_BUILD_TIME = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}`;
    const vitePlugins = [react(), reactRefesh()]
    // vitePlugins.push(createAutoImport())
    isBuild && vitePlugins.push(...(createCompression(viteEnv.VITE_BUILD_COMPRESS as 'gzip' | 'brotli' | 'none')))
    return vitePlugins
}
