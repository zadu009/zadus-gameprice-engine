import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://[::1]:6002',
                rewrite: (path) => path.replace(/^\/api/, ''),
                changeOrigin: true
            }
        }
    },
	plugins: [sveltekit()]
});


