<template>
    <section class="container mx-auto">
		<nav class="flex flex-col md:flex-row items-center text-center justify-between py-10">
			<NuxtLink :to="localePath('/')"><img class="object-contain h-8 align-middle md:ml-4 " src="~/assets/logo.png" alt="website logo, a pair of glasses" ></NuxtLink>
			<ul class="inline text-xl my-4 md:my-0">
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="localePath('/')">Home</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="localePath('/about')">About</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="localePath('/projects')">{{$t('projects')}}</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="localePath('/contacts')">{{$t('contacts')}}</NuxtLink></li>
			<li v-if="$i18n.locale !== 'en'" class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="switchLocalePath('en')"><img class="rounded-md inline w-8" alt="uk flag" src="~/assets/icons/uk.svg" /></NuxtLink></li>
			<li v-if="$i18n.locale !== 'it'" class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink :to="switchLocalePath('it')"><img class="rounded-md inline w-8" alt="italy flag" src="~/assets/icons/italy.svg" /></NuxtLink></li>
			</ul>
		</nav>
	</section>
</template>


<style scoped>
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
</style>

<i18n>
{
	"en": {
		"projects": "Projects",
		"contacts": "Get in touch"
	},
	"it" : {

		"projects": "Progetti",
		"contacts": "Contatti"
	}
}
</i18n>