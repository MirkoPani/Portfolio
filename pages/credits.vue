<template>
<section class="text-gray-200 container mx-auto">
			<p class="">
				<i18n path="sentence" tag="span">
          <template v-slot:love>
            <span class="text-red-600 text-lg">&#9829;</span>
          </template>
        </i18n>
				<a target="_blank" class="underline" href="https://nuxtjs.org/">Nuxt.js</a>, <a target="_blank" class="underline" href="https://tailwindcss.com/">Tailwind CSS</a>, <a target="_blank" class="underline" href="https://vuejs.org/">Vue.js</a>.</p>
			<p class="">{{$t('add-res')}} <a target="_blank" href="https://simpleicons.org/" class="underline">Simple Icons</a>, <a target="_blank" class="underline" href="https://www.fontspace.com/pixel-emulator-font-f21507">Pixel emulator font</a></p>
</section>
</template>

<i18n>
{
	"en": {
		"sentence": "Crafted with {love} by Mirko Pani. Made with:",
		"add-res": "Additional resources:"
	},
	"it": {
		"sentence": "Sito realizzato con {love} da Mirko Pani. Creato con:",
		"add-res": "Risorse aggiuntive:"
	}
}
</i18n>