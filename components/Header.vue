<template>
    <section class="container mx-auto">
		<nav class="flex flex-col md:flex-row items-center text-center justify-between py-10">
			<NuxtLink to="/"><img class="object-contain h-8 align-middle md:ml-4 " src="~/assets/logo.png" alt="website logo, a pair of glasses" ></NuxtLink>
			<ul class="inline text-xl my-4 md:my-0">
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink to="/">Home</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink to="about">About</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink to="projects">Progetti</NuxtLink></li>
			<li class="inline p-2 hover:text-green-300 hover:underline transform transition duration-200 ease-in-out"><NuxtLink to="contacts">Contatti</NuxtLink></li>
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