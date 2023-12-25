import { sveltekit } from '@sveltejs/kit/vite'

const config = {
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			},

			sass: {
				additionalData: '@use "src/variables.sass" as *'
			}
		}
	}
}

export default config
