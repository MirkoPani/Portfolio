<template>
<div>
	<PageHero :heroTitle="heroTitle"/>
	<section class="container leading-relaxed mx-auto py-4 pt-0 text-gray-300 text-left md:px-4 ">
	<p >Mi chiamo <TextHighlight>Mirko Pani</TextHighlight>, sono un giovane sviluppatore di 26 anni residente nella provincia di <TextHighlight>Vicenza.</TextHighlight></p> 
	<p>Oltre ad essere un forte <TextHighlight>appassionato</TextHighlight> del mondo informatico, mi diletto nel campo della fotografia e dei primi piani.</p>
	<p>Quando non sono occupato a viaggiare e a fare foto, mi troveresti spesso a leggere un libro tecnico per apprendere un nuovo concetto.</p>
	<p>Nel corso della mia carriera ho avuto modo di diplomarmi come 'Perito Capotecnico in Informatica' presso un istituto tecnico e di laurearmi con ottimi voti presso l'<TextHighlight>Università degli Studi di Trento</TextHighlight>, indirizzo Informatica.</p>
	<p>Avendo avuto <TextHighlight>esperienze con numerosi linguaggi e framework</TextHighlight> in ambiti molto diversi, considero il mio punto di forza la <TextHighlight>versatilità</TextHighlight> e la <TextHighlight>capacità di apprendere e imparare velocemente</TextHighlight> una nuova tecnologia, linguaggio/framework o pattern che sia.
	In questi anni di esperienza, <TextHighlight>ho ideato e sviluppato diversi progetti</TextHighlight>, sia in ambito desktop che web, che puoi consultare nella sezione apposita del sito.</p>
	<p class="mt-5">Queste sono alcune delle tecnologie che ho utilizzato recentemente:</p>
	<ul class="grid grid-cols-2 gap-2 w-1/2 list-inside mx-auto md:-mx-0 text-green-300 font-bold">
		<li>C#</li>
		<li>WPF</li>
		<li>Asp.Net Core</li>
		<li>Blazor</li>
		<li>HTML e CSS</li>
		<li>Wordpress</li>
	</ul>
	<p class="mt-10">Se invece sei curioso di scoprire di più sul mio lato da diletto fotografo, puoi vedere le mie foto <a href="https://www.instagram.com/mirkoopani" target="_blank"><TextHighlight class="underline">qui</TextHighlight></a> e <a href="https://www.instagram.com/mirkoophoto" target="_blank"><TextHighlight class="underline">qui</TextHighlight></a>.</p>
	</section>
</div>
</template>


<style scoped>
ul li::before {
 content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #D1D5DB; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: 1em; /* Also needed for space (tweak if needed) */
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
      return {
        pageTitle: 'Mirko Pani - About',
		heroTitle: "About"
      }
    },
    head() {
      return {
        title: this.pageTitle
      }
    }
})
</script>
