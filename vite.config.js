import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa'
// import {ManifestOptions} from "vite-plugin-pwa";
import Manifest from "./utils/manifest.js";
import svgr from "vite-plugin-svgr";


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
})



