import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'https://dedurrani-itconsultingflatter-production.up.railway.app',
                changeOrigin: true
            }
        }
    },
	plugins: [sveltekit()]
});


