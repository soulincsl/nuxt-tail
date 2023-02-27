// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Nuxt 3 with tailwind CSS',
			meta: [
				{ name: 'description', content: 'My Amazing site...' },
				{ name: 'keywords', content: 'Nuxt 3, tailwind CSS' }
			]
		}
	},
	css: ['~/assets/css/styles.css'],
	modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper']
})
