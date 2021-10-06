<template>
<div>
	<PageHero :heroTitle="heroTitle"/>
	<section class="container leading-relaxed mx-auto py-4 text-gray-300 text-left md:px-4 flex lg:flex-row flex-col gap-4">
		<div class="order-2 lg:order-1 lg:w-2/3 flex flex-col">
			<i18n path="desc1" tag="p">
					<template v-slot:name>
						<TextHighlight>Mirko Pani</TextHighlight>
					</template>
					<template v-slot:vicenza>
						<TextHighlight>Vicenza</TextHighlight>
					</template>
			</i18n>
			<i18n path="desc2" tag="p">
					<template v-slot:it>
						<TextHighlight>{{$t('it')}}</TextHighlight>
					</template>
			</i18n>
			<p>{{$t('desc3')}}</p>
			<i18n path="desc4" tag="p">
					<template v-slot:university>
						<TextHighlight>{{$t('laurea-place')}}</TextHighlight>
					</template>
			</i18n>
			<i18n path="desc5" tag="p">
					<template v-slot:sub1>
						<TextHighlight>{{$t('desc5-sub1')}}</TextHighlight>
					</template>
					
					<template v-slot:sub2>
						<TextHighlight>{{$t('desc5-sub2')}}</TextHighlight>
					</template>
					
					<template v-slot:sub3>
						<TextHighlight>{{$t('desc5-sub3')}}</TextHighlight>
					</template>
					
					<template v-slot:sub4>
						<TextHighlight>{{$t('desc5-sub4')}}</TextHighlight>
					</template>
			</i18n>
			<i18n path="desc6" tag="p">
					<template v-slot:sub1>
						<TextHighlight>{{$t('desc6-sub1')}}</TextHighlight>
					</template>
					
					<template v-slot:sub2>
						<TextHighlight>{{$t('desc6-sub2')}}</TextHighlight>
					</template>
					
					<template v-slot:sub3>
						<TextHighlight>{{$t('desc6-sub3')}}</TextHighlight>
					</template>
			</i18n>
			<i18n path="desc7" tag="p">
					<template v-slot:suite>
						<TextHighlight>{{$t('desc7-sub1')}}</TextHighlight>
					</template>
			</i18n>
			<p class="mt-5">{{$t('recent-technologies')}}</p>
			<ul class="grid grid-cols-2 gap-2 w-3/4 md:w-1/2 list-inside pt-3 mx-auto md:-mx-0 text-green-300 font-bold text-sm text-left">
				<li>C#</li>
				<li>WPF</li>
				<li>Asp.Net Core</li>
				<li>Blazor</li>
				<li>HTML e CSS</li>
				<li>Wordpress</li>
			</ul>
			<p class="mt-10">
				<i18n path="photo-desc" tag="span">
					<template v-slot:first>
						<a href="https://www.instagram.com/mirkoopani" target="_blank" ><TextHighlight class="underline hover:text-green-600">{{$t('here')}}</TextHighlight></a>
					</template>
					<template v-slot:second>
						 <a href="https://www.instagram.com/mirkoophoto" target="_blank" ><TextHighlight class="underline hover:text-green-600">{{$t('here')}}</TextHighlight></a>
					</template>
				</i18n>
			</p>
		
			<a href="" target="_blank" class="text-center mt-10 border md:w-1/3 self-center border-green-300 p-4 rounded-lg text-green-300"><button>{{$t('curriculum-btn')}}</button></a>
		
		</div>
		<div class="order-1 lg:order-2 lg:w-1/3">
			<img class="rounded-md h-80 lg:h-96 mx-auto" src="~/assets/img/me.jpg" alt="a personal portrait of myself" />
		</div>
	</section>
	<section class="container mx-auto md:px-3 pt-16 text-gray-300 text-left">
		<p class="text-4xl text-gray-200">{{$t('professional-experience')}}</p>
		<div>
			<div class="py-4">
				<p class="text-xl">{{$t('estek-title')}} @ <TextHighlight><a target="_blank" href="https://www.es-tek.it/">Es-Tek</a></TextHighlight><span class="ml-2 text-base">{{$t('estek-date')}}</span></p>
				<ul class="list-outside mt-2">
					<li>{{$t('estek-desc1')}}</li>
					<li>{{$t('estek-desc2')}} <TechnologyHighlight>C++</TechnologyHighlight>, <TechnologyHighlight>OpenCV</TechnologyHighlight>, <TechnologyHighlight>Qt</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>WPF</TechnologyHighlight></li>
					<li>{{$t('estek-desc3')}} <TechnologyHighlight>Wordpress</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>Asp.Net Core</TechnologyHighlight>, <TechnologyHighlight>EF Core</TechnologyHighlight>, <TechnologyHighlight>Blazor</TechnologyHighlight>, <TechnologyHighlight>HTML e CSS</TechnologyHighlight>, <TechnologyHighlight>Bootstrap</TechnologyHighlight> </li>
					<li>{{$t('estek-desc4')}}</li>
					<li>{{$t('estek-desc5')}} <TechnologyHighlight>Git</TechnologyHighlight>, <TechnologyHighlight>Docker</TechnologyHighlight>, <TechnologyHighlight>Jenkins</TechnologyHighlight>, <TechnologyHighlight>Coverity</TechnologyHighlight>, <TechnologyHighlight>Unit test</TechnologyHighlight>, <TechnologyHighlight>Code coverage</TechnologyHighlight></li>
					<li>{{$t('estek-desc6')}} <TechnologyHighlight>Agile</TechnologyHighlight>, <TechnologyHighlight>Design Patterns</TechnologyHighlight></li>
				</ul>
			</div>

			<div class="py-4">
				<p class="text-xl">{{$t('laurea-title')}} @ <TextHighlight>{{$t('laurea-place')}}</TextHighlight><span class="ml-2 text-base">{{$t('laurea-date')}}</span></p>
				<ul class="list-inside mt-2">
					<li>{{$t('laurea-desc')}}</li>
					<li><TextHighlight><a class="underline" target="_blank" href="/tesi_Pani.pdf">{{$t('laurea-thesis')}}</a></TextHighlight></li>
					<li>{{$t('experience-in')}} <TechnologyHighlight>Android</TechnologyHighlight>, <TechnologyHighlight>Javascript</TechnologyHighlight>, <TechnologyHighlight>C++</TechnologyHighlight>, <TechnologyHighlight>SQL</TechnologyHighlight>, <TechnologyHighlight>Java</TechnologyHighlight>, <TechnologyHighlight>HTML e CSS</TechnologyHighlight>, <TechnologyHighlight>Bootstrap</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">{{$t('internship-title')}} @ <TextHighlight><a target="_blank" href="https://www.fbk.eu/it/">{{$t('internship-place')}}</a></TextHighlight> <span class="ml-2 text-base">{{$t('internship-date')}}</span></p>
				<ul class="list-inside mt-2">
					<li>{{$t('internship-desc1')}}</li>
					<li>{{$t('internship-desc2')}}</li>
					<li>{{$t('internship-desc3')}}</li>
					<li>{{$t('internship-desc4')}} <TextHighlight><a class="underline" target="_blank" href="https://www.researchgate.net/publication/326370856_Distributed_Data_Exchange_with_Leap_Motion_5th_International_Conference_AVR_2018_Otranto_Italy_June_24-27_2018_Proceedings_Part_II">"Distributed Data Exchange with Leap Motion"</a></TextHighlight></li>
					<li>{{$t('experience-in')}} <TechnologyHighlight>Unity3D</TechnologyHighlight>, <TechnologyHighlight>C#</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">{{$t('work-thiene-title')}}<span class="ml-2 text-base">{{$t('work-thiene-date')}}</span></p>
				<ul class="list-inside mt-2">
					<li>{{$t('work-thiene-desc')}}</li>
					<li>{{$t('work-thiene-desc2')}}</li>
					<li>{{$t('work-thiene-desc3')}}</li>
					<li>{{$t('experience-in')}} <TechnologyHighlight>Wordpress</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">{{$t('diploma-title')}} @ <TextHighlight>Istituto Tecnico Tecnologico G. Chilesotti</TextHighlight><span class="ml-2 text-base">{{$t('diploma-date')}}</span></p>
				<ul class="list-inside mt-2">
					<li>{{$t('experience-in')}} <TechnologyHighlight>C#</TechnologyHighlight>, <TechnologyHighlight>Windows Form</TechnologyHighlight>, <TechnologyHighlight>SQL</TechnologyHighlight>, <TechnologyHighlight>Java</TechnologyHighlight>, <TechnologyHighlight>PHP</TechnologyHighlight>, <TechnologyHighlight>Javascript</TechnologyHighlight>, <TechnologyHighlight>HTML e CSS</TechnologyHighlight>, <TechnologyHighlight>Bootstrap</TechnologyHighlight></li>
				</ul>
			</div>
			<div class="py-4">
				<p class="text-xl">{{$t('internship-sup-title')}} @ <TextHighlight>{{$t('internship-sup-place')}}</TextHighlight><span class="ml-2 text-base">{{$t('internship-sup-date')}}</span></p>
				<ul class="list-inside mt-2">
					<li>{{$t('internship-sup-desc')}}</li>
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


<i18n>
{
	"en": {
		"professional-experience": "Work and educational experience",
		"diploma-title": "Secondary School Diploma in IT",
		"experience-in": "Gained experience in:",
		"laurea-title": "Computer Science Bachelor Degree",
		"laurea-place": "University of Trento",
		"laurea-desc": "Studied and gained experience on: Agile, Unit tests, OOP, algorithms and data structures, Linux",
		"internship-title": "Internship",
		"internship-place": "Bruno Kessler Foundation (FBK)",
		"internship-date" : "(Nov 2017 - Feb 2018)",
		"estek-title": "Software developer",
		"estek-date" : "(2018 - Today)",
		"internship-desc1": "Study and realisation of graduation thesis under the supervision of a researcher",
		"internship-desc2": "Implemented a proof of concept for the transmission of data obtained from a Leap Motion device in a multi-user virtual reality (VR) environment on a smartphone.",
		"internship-desc3": "Study and implementation of optimisation techniques for data transmission via LOD (Level of Detail)",
		"internship-desc4": "From the results obtained, collaborated on a scientific paper in English, which was discussed at a conference and subsequently published in a journal, entitled ",
		"estek-desc1":"Worked with an international team of developers on existing software, integrating new features and bug fixes",
		"estek-desc2":"Used a multitude of languages, platforms and frameworks for desktop applications, CAD and quality control software development:",
		"estek-desc3":"Used a multitude of languages, platforms and frameworks for web applications:",
		"estek-desc4":"Designed and developed several software products in their early stages",
		"estek-desc5":"Gained experience in CI/CD:",
		"estek-desc6":"Gained experience working with ",
		"curriculum-btn": "View my CV",
		"photo-desc":"If you are curious to find out more about my amateur photographer aspect, you can check out my photos {first} and {second}.",
		"here": "here",
		"recent-technologies": "These are some of the frameworks and languages I have been using most recently:",
		"desc1":"My name is {name}, I'm a 26 years old developer living in the province of {vicenza}, Italy.",
		"desc2":"Other than being a {it}, I also really like photography, in particular portraits photos.",
		"desc3": "Since I was a kid, I have always tried to pursue these passions in my spare time, for example by studying programming books or by taking lots and lots of pictures when travelling around the world.",
		"it": "strong IT enthusiast",
		"desc4":"In the course of my career, I've had the opportunity to graduate in Computer Science with excellent marks at the {university}.",
		"desc5":"Having {sub1} in different fields, I consider to be one of my greatest strenghts the {sub2} and the {sub3} a new technology, language, framework or pattern in a short amount of time. In these years of experience, {sub4}, both for desktop and web environments, which you can discover in more detail in the dedicated section of my portfolio.",
		"desc5-sub1": "experience with many languages and frameworks",
		"desc5-sub2": "versatility",
		"desc5-sub3": "ability to learn and master",
		"desc5-sub4": "I have designed and developed several projects",
		"desc6": "Other than my working career, I was a child animator and entertainer for over 5 years, later becoming the one responsible for the whole group of animators and children... This experience made me fully discover the meaning of {sub1}, {sub2} and of the {sub3} that a group with the same goal can have.",
		"desc6-sub1": "teamwork",
		"desc6-sub2": "responsibility",
		"desc6-sub3": "potentialities",
		"laurea-thesis": "Read my thesis (in english)",
		"desc7": "Thanks to this experience and my passion for photography, over the years I have become familiar with the {suite}, in particular with Photoshop, Illustrator and Lightroom.",
		"desc7-sub1": "Adobe suite",
		"internship-sup-title": "School internship",
		"internship-sup-place": "Public administration",
		"internship-sup-desc" : "Software and hardware maintenance in schools and libraries.",
		"internship-sup-date" : "(July 2013)",
		"diploma-date" : "(2014)",
		"laurea-date" : "(2018)",
		"work-thiene-title" : "Website deployment and setup",
		"work-thiene-date" : "(June 2014)",
		"work-thiene-desc" : "Requirements analysis and customer interview",
		"work-thiene-desc2" : "Set up hosting plan and website creation",
		"work-thiene-desc3" : "Customisation (themes, pages, users...)"
	},
	"it": {
		"professional-experience": "Esperienza formativa",
		"diploma-title": "Diploma 'Perito Capotecnico'",
		"laurea-title": "Laurea in Informatica (L-31)",
		"laurea-place": "Università degli Studi di Trento",
		"laurea-desc": "Apprendimento di concetti come: Agile, Unit test, OOP, algoritmi e strutture dati, Linux",
		"internship-title": "Tirocinio",
		"internship-place": "Fondazione Bruno Kessler (FBK)",
		"internship-date" : "(Nov 2017 - Feb 2018)",
		"experience-in": "Esperienza in:",
		"estek-title": "Sviluppatore",
		"estek-date" : "(2018 - Oggi)",
		"internship-desc1": "Studio e realizzazione tesi di laurea sotto la supervisione di un ricercatore",
		"internship-desc2": "Implementato un proof of concept per la trasmissione di dati ottenuti da un dispositivo Leap Motion in un ambiente a realtà virtuale (VR) multiutente su smartphone.",
		"internship-desc3": "Studio e realizzazione di tecniche di ottimizzazione per la tramissione di dati tramite LOD (Level of Detail)",
		"internship-desc4": "Dai risultati ottenuti, collaborato alla stesura di un paper scientifico in inglese, discusso ad una conferenza e successivamente pubblicato in una rivista, dal titolo ",
		"estek-desc1":"Collaborazione con un team di sviluppatori internazionale su software già esistenti, integrando nuove funzionalità e bug fix",
		"estek-desc2":"Utilizzato una moltitudine di linguaggi, piattaforme e framework in ambito client per lo sviluppo di software per il settore CAD e controllo qualità:",
		"estek-desc3":"Utilizzato una moltitudine di linguaggi, piattaforme e framework in ambito web:",
		"estek-desc4":"Progettato e sviluppato diversi prodotti software nelle loro fasi iniziali",
		"estek-desc5":"Esperienza in CI/CD:",
		"estek-desc6":"Esperienza con lo sviluppo ",
		"curriculum-btn": "Visualizza il mio curriculum",
		"photo-desc":"Se invece sei curioso di scoprire di più sul mio lato da diletto fotografo, puoi vedere le mie foto {first} e {second}.",
		"here": "qui",
		"recent-technologies": "Queste sono alcune delle tecnologie che ho utilizzato maggiormente di recente:",
		"desc1":"Mi chiamo {name}, sono un giovane sviluppatore di 26 anni residente nella provincia di {vicenza}.",
		"desc2":"Oltre ad essere un forte {it} del mondo informatico, mi diletto nel campo della fotografia e dei primi piani.",
		"it": "appassionato",
		"desc3":"Sin da ragazzo infatti, ho sempre coltivato queste passioni approfondendole nel mio tempo libero, tramite ad esempio lo studio di manuali tecnici per l'IT o il riempire di fotografie ogni mio viaggio.",
		"desc4":"Nel corso della mia carriera ho avuto modo di diplomarmi come 'Perito Capotecnico in Informatica' presso un istituto tecnico e di laurearmi con ottimi voti presso l'{university}, indirizzo Informatica.",
		"desc5":"Avendo avuto {sub1} in ambiti molto diversi, considero il mio punto di forza la {sub2} e la {sub3} una nuova tecnologia, linguaggio/framework o pattern che sia. In questi anni di esperienza {sub4}, sia in ambito desktop che web, che puoi consultare nella sezione apposita del sito.",
		"desc5-sub1": "esperienze con numerosi linguaggi e framework",
		"desc5-sub2": "versatilità",
		"desc5-sub3": "capacità di apprendere e imparare velocemente",
		"desc5-sub4": "ho ideato e sviluppato diversi progetti",
		"desc6": "Al di fuori della mia carriera lavorativa, sono stato un animatore parrocchiale per oltre 5 anni, diventando successivamente responsabile del gruppo di animatori e decine di ragazzi. Questa esperienza mi ha fatto scoprire appieno il significato di {sub1}, di {sub2} e delle {sub3} che un gruppo unito può avere.",
		"desc6-sub1": "gioco di squadra",
		"desc6-sub2": "responsabilità",
		"desc6-sub3": "potenzialità",
		"laurea-thesis": "Sfoglia la mia tesi (in inglese)",
		"desc7": "Grazie a questa esperienza e alla mia passione per la fotografia, ho acquisito negli anni familiarità nella {suite}, in particolare Photoshop, Illustrator e Lightroom.",
		"desc7-sub1": "suite Adobe",
		"internship-sup-title": "Tirocinio scolastico",
		"internship-sup-place": "Pubblica amministrazione",
		"internship-sup-desc" : "Manutenzione software e hardware presso scuole e biblioteche.",
		"internship-sup-date" : "(Luglio 2013)",
		"diploma-date" : "(2014)",
		"laurea-date" : "(2018)",
		"work-thiene-title" : "Sviluppo e setup sito web",
		"work-thiene-date" : "(Giugno 2014)",
		"work-thiene-desc" : "Analisi dei requisiti e intervista al cliente",
		"work-thiene-desc2" : "Scelta del piano di hosting e creazione del sito",
		"work-thiene-desc3" : "Personalizzazione del sito (temi, pagine, utenti...)"
		

	}
}
</i18n>