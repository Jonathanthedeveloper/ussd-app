import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'
import Manifest from "./utils/manifest.js";


// https://vitejs.dev/config/


export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest : Manifest
        }),
    ],
    optimizeDeps: {
        exclude: ['js-big-decimal']
    }
})



