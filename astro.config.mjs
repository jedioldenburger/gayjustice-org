// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.gayjustice.org',
	vite: {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src/', import.meta.url)),
			},
		},
	},
	integrations: [
		sitemap({
			filter: (page) => {
				const path = typeof page === 'string' ? page : page?.pathname;
				if (typeof path !== 'string') return true;
				if (path.startsWith('/nl/')) return false;

				// Legacy English-at-root routes (EN will live under /en/*)
				if (
					path === '/about/' ||
					path === '/mission/' ||
					path === '/topics/' ||
					path === '/transparency/' ||
					path === '/transparancy/' ||
					path === '/donate/'
				)
					return false;

				return true;
			},
		}),
	],
});
