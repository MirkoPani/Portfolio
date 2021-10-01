<template>
<div>
	<PageHero :heroTitle="heroTitle"/>
	<section class="container leading-relaxed mx-auto py-4 text-gray-300 text-left md:px-4 flex lg:flex-row flex-col gap-4">
		<div class="order-2 lg:order-1 lg:w-2/3 flex flex-col">
			<p >Mi chiamo <TextHighlight>Mirko Pani</TextHighlight>, sono un giovane sviluppatore di 26 anni residente nella provincia di <TextHighlight>Vicenza.</TextHighlight></p> 
			<p>Oltre ad essere un forte <TextHighlight>appassionato</TextHighlight> del mondo informatico, mi diletto nel campo della fotografia e dei primi piani.</p>
			<p>Quando non sono occupato a viaggiare e a fare foto, mi troveresti spesso a leggere un libro tecnico per apprendere un nuovo concetto.</p>
			<p>Nel corso della mia carriera ho avuto modo di diplomarmi come 'Perito Capotecnico in Informatica' presso un istituto tecnico e di laurearmi con ottimi voti presso l'<TextHighlight>Università degli Studi di Trento</TextHighlight>, indirizzo Informatica.</p>
			<p>Avendo avuto <TextHighlight>esperienze con numerosi linguaggi e framework</TextHighlight> in ambiti molto diversi, considero il mio punto di forza la <TextHighlight>versatilità</TextHighlight> e la <TextHighlight>capacità di apprendere e imparare velocemente</TextHighlight> una nuova tecnologia, linguaggio/framework o pattern che sia.
			In questi anni di esperienza, <TextHighlight>ho ideato e sviluppato diversi progetti</TextHighlight>, sia in ambito desktop che web, che puoi consultare nella sezione apposita del sito.</p>
			<p>Al di fuori della mia carriera lavorativa, sono stato un animatore parrocchiale per oltre 5 anni, diventando successivamente responsabile del gruppo di animatori e decine di ragazzi. Questa esperienza mi ha fatto scoprire appieno il significato di <TextHighlight>gioco di squadra</TextHighlight>, di <TextHighlight>responsabilità</TextHighlight> e delle <TextHighlight>potenzialità</TextHighlight> che un gruppo unito può avere.</p>
			<p class="mt-5">Queste sono alcune delle tecnologie che ho utilizzato maggiormente di recente:</p>
			<ul class="grid grid-cols-2 gap-2 w-3/4 md:w-1/2 list-inside pt-3 mx-auto md:-mx-0 text-green-300 font-bold text-sm text-left">
				<li>C#</li>
				<li>WPF</li>
				<li>Asp.Net Core</li>
				<li>Blazor</li>
				<li>HTML e CSS</li>
				<li>Wordpress</li>
			</ul>
			<p class="mt-10">Se invece sei curioso di scoprire di più sul mio lato da diletto fotografo, puoi vedere le mie foto <a href="https://www.instagram.com/mirkoopani" target="_blank" ><TextHighlight class="underline hover:text-green-600">qui</TextHighlight></a> e <a href="https://www.instagram.com/mirkoophoto" target="_blank" ><TextHighlight class="underline hover:text-green-600">qui</TextHighlight></a>.</p>
		
			<a href="" target="_blank" class="text-center mt-10 border md:w-1/3 self-center border-green-300 p-4 rounded-lg text-green-300"><button >Visualizza il mio curriculum</button></a>
		
		</div>
		<div class="order-1 lg:order-2 lg:w-1/3">
			<img class="rounded-md h-80 lg:h-96 mx-auto" src="~/assets/img/me.jpg" alt="a personal portrait of myself" />
		</div>
	</section>
	<section class="container mx-auto md:px-3 pt-16 text-gray-300 text-left">
		<p class="text-4xl text-gray-200">Esperienza formativa</p>
		<div>
			<div class="py-4">
				<p class="text-xl">Sviluppatore @ <TextHighlight><a target="_blank" href="https://www.es-tek.it/">Es-Tek</a></TextHighlight><span class="ml-2 text-base">(2018 - Oggi)</span></p>
				<ul class="list-outside mt-2">
					<li>Collaborazione con un team di sviluppatori internazionale su software già esistenti, integrando nuove funzionalità e bug fix</li>
					<li>Utilizzato una moltitudine di linguaggi, piattaforme e framework in ambito client per lo sviluppo di software per il settore CAD e controllo qualità: <TechnologyHighlight>C++</TechnologyHighlight>, <TechnologyHighlight>OpenCV</TechnologyHighlight>, <TechnologyHighlight>Qt</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>WPF</TechnologyHighlight></li>
					<li>Utilizzato una moltitudine di linguaggi, piattaforme e framework in ambito web: <TechnologyHighlight>Wordpress</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>Asp.Net Core</TechnologyHighlight>, <TechnologyHighlight>EF Core</TechnologyHighlight>, <TechnologyHighlight>Blazor</TechnologyHighlight>, <TechnologyHighlight>HTML e CSS</TechnologyHighlight></li>
					<li>Progettato e sviluppato diversi prodotti software nelle loro fasi iniziali</li>
					<li>Esperienza in CI/CD: <TechnologyHighlight>Git</TechnologyHighlight>, <TechnologyHighlight>Docker</TechnologyHighlight>, <TechnologyHighlight>Jenkins</TechnologyHighlight>, <TechnologyHighlight>Coverity</TechnologyHighlight>, <TechnologyHighlight>Unit test</TechnologyHighlight>, <TechnologyHighlight>Code coverage</TechnologyHighlight></li>
					<li>Esperienza con lo sviluppo <TechnologyHighlight>Agile</TechnologyHighlight> e con <TechnologyHighlight>Design Patterns</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">Tirocinio @ <TextHighlight><a target="_blank" href="https://www.fbk.eu/it/">Fondazione Bruno Kessler (FBK)</a></TextHighlight> <span class="ml-2 text-base">(Fine 2017 - 2018)</span></p>
				<ul class="list-inside mt-2">
					<li>Studio e realizzazione tesi di laurea sotto la supervisione di un ricercatore</li>
					<li>Implementato un proof of concept per la trasmissione di dati ottenuti da un dispositivo Leap Motion in un ambiente a realtà virtuale (VR) multiutente su smartphone.</li>
					<li>Studio e realizzazione di tecniche di ottimizzazione per la tramissione di dati tramite LOD (Level of Detail)</li>
					<li>Dai risultati ottenuti, collaborato alla stesura di un paper scientifico in inglese, discusso ad una conferenza e successivamente pubblicato in una rivista, dal titolo <TextHighlight><a class="underline" target="_blank" href="https://www.researchgate.net/publication/326370856_Distributed_Data_Exchange_with_Leap_Motion_5th_International_Conference_AVR_2018_Otranto_Italy_June_24-27_2018_Proceedings_Part_II">"Distributed Data Exchange with Leap Motion"</a></TextHighlight></li>
					<li>Esperienza in: <TechnologyHighlight>Unity3D</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">Laurea in Informatica @ <TextHighlight>Università degli Studi di Trento</TextHighlight></p>
				<ul class="list-inside mt-2">
					<li>Apprendimento di concetti come: Agile, Unit test, OOP, algoritmi e strutture dati, Linux</li>
					<li>Esperienza in: <TechnologyHighlight>Android</TechnologyHighlight>, <TechnologyHighlight>Javascript</TechnologyHighlight>, <TechnologyHighlight>C++</TechnologyHighlight>, <TechnologyHighlight>SQL</TechnologyHighlight>, <TechnologyHighlight>Java</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">Diploma 'Perito Capotecnico' @ <TextHighlight>Istituto Tecnico Tecnologico G. Chilesotti</TextHighlight></p>
				<ul class="list-inside mt-2">
					<li>Esperienza in: <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>Windows Form</TechnologyHighlight>, <TechnologyHighlight>SQL</TechnologyHighlight>, <TechnologyHighlight>Java</TechnologyHighlight></li>
				</ul>
			</div>
		</div>
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
    head(): any {
      return {
        title: this.pageTitle
      }
    }
})
</script>
