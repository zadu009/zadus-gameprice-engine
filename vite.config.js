import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'https://dedurrani-itconsultingflatter-production.up.railway.app',
                rewrite: (path) => path.replace(/^\/api/, ''),
                changeOrigin: true
            }
        }
    },
	plugins: [sveltekit()]
});


