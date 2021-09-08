<template>
	<PageHero :heroTitle="heroTitle" :heroSubtitle="heroSubtitle"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
      return {
        pageTitle: 'Mirko Pani - Progetti',
		heroTitle: "Progetti",
		heroSubtitle : 'Le mie creazioni'
      }
    },
    head() {
      return {
        title: this.pageTitle
      }
    }
})
</script>
