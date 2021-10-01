<template>
	<a :href="url" target="_blank" class="w-auto"><button class="p-2 my-2 bg-transparent border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">{{name}}</button></a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		url : String,
		name : String
	}
})
</script>
