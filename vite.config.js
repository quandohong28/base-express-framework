import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	build: {
		rollupOptions: {
			input: path.resolve(__dirname, 'src/assets/app.css'),
			output: {
				assetFileNames: 'app.css',
			}
		},
		outDir: 'public/css',
		emptyOutDir: true,
		assetsDir: '',
	},
	css: {
		postcss: './postcss.config.js',
	},
})
