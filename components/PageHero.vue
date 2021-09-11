<template>
<section>
  <div class="container mx-auto py-4 leading-10 pt-10 text-center md:text-left md:px-4 font-inter">
    <span v-if="heroTitle" class="text-5xl tracking-wide"><span v-html="heroTitle"></span></span>
    <span v-if="heroSubtitle" class="text-4xl block tracking-wide mt-2 text-gray-200"><span v-html="heroSubtitle"></span></span>
    <div class="text-gray-300">
		<slot></slot>
	</div>
  </div>
 </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		heroTitle : String,
		heroSubtitle : String,
		heroDesc : String
	}
})
</script>
