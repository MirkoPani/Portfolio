<template>
	<a :href="url" target="_blank">
		<i v-bind:class="{
			'bg-yellow-200 hover:bg-yellow-500': cv, 
			'bg-green-200 hover:bg-green-400' : !cv,
			}" 
		class="shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">
		<slot></slot>
		</i>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		url : String,
		icon : String,
		cv : Boolean
	}
})
</script>

