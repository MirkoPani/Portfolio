<template>
  <section>
    <PageHero :heroTitle="heroTitle">
      <p>{{ $t("desc1") }}</p>
      <p>{{ $t("desc2") }}</p>
    </PageHero>
    <div
      class="
        container
        mx-auto
        grid grid-cols-1
        lg:grid-cols-2
        justify-items-center
        py-5
        gap-y-8
      "
    >
      <ProjectCard
        v-for="item in projects"
        :key="item.Title"
        :proj="item"
      ></ProjectCard>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from "vue";
import ProjectCard from "~/components/ProjectCard.vue";
import Project from "./../types/Project";

export default Vue.extend({
  data() {
    return {
      pageTitle: "Mirko Pani - " + this.$t("title"),
      heroTitle: this.$t("subtitle"),
      projects: [
        {
          ImgSrc: require("../assets/img/ceraunavolta.png"),
          Title: "C'era una volta",
          Date: this.$t("ceraunavolta-date"),
          Desc: this.$t("ceraunavolta-desc"),
          BgColor: "bg-yellow-100",
          CodeLink: "https://github.com/MirkoPani/CeraUnaVolta",
          Pills: ["C#", "Asp.Net Core", "EF Core"],
        },
        {
          ImgSrc: require("../assets/logo.png"),
          Title: "mirkopani.me",
          Date: this.$t("portfolio-date"),
          Desc: this.$t("portfolio-desc"),
          BgColor: "bg-gray-900",
          CodeLink: "https://github.com/MirkoPani/Portfolio",
          Pills: ["Typescript", "Vue", "Nuxt.js", "Tailwind CSS"],
        },
        {
          ImgSrc: require("../assets/img/kaiju.png"),
          Title: "Business Kaiju",
          Date: this.$t("kaiju-date"),
          Desc: this.$t("kaiju-desc"),
          BgColor: "bg-green-400",
          CodeLink: "https://github.com/MirkoPani/Business-Kaiju",
          Pills: ["C#", "Unity3D"],
        },
        {
          ImgSrc: require("../assets/img/coldwar.png"),
          Title: "Cold War",
          Date: this.$t("coldwar-date"),
          Desc: this.$t("coldwar-desc"),
          BgColor: "bg-black",
          Pills: ["C#", "Asp.Net Core", "Blazor", "SignalR", "Bootstrap"],
        },
        {
          ImgSrc: require("../assets/img/dovesibutta.png"),
          Title: "Dove si butta",
          Date: this.$t("dovesibutta-date"),
          Desc: this.$t("dovesibutta-desc"),
          BgColor: "bg-blue-800",
          CodeLink: "https://github.com/MirkoPani/DoveSiButta",
          Pills: ["Javascript", "Node.js", "Google Actions API", "Firebase"],
        },
        {
          ImgSrc: require("../assets/img/partycast.png"),
          Title: "Partycast",
          Date: this.$t("partycast-date"),
          Desc: this.$t("partycast-desc"),
          BgColor: "bg-red-900",
          CodeLink: "https://github.com/MirkoPani/PartyCast",
          Pills: ["Javascript", "Java", "Phaser.js", "Chromecast SDK"],
        },
      ] as Project[],
    };
  },
  head(): any {
    return {
      title: this.pageTitle,
    };
  },
});
</script>

<i18n>
{
	"en": {
		"title": "Projects",
		"subtitle" :"My personal projects",
		"desc1": "In this page you can explore various personal projects I developed in my free time, as a way to learn new frameworks or just for fun!",
		"desc2": "Some of these projects were developed completely by myself, while others were a team effort.",
		"ceraunavolta-desc": "<p>This project is under development.</p><p>This project will allow people to discover and visualise vintage photos of my native town, Villaverla, using an interactive map.</p><p>The features roadmap includes the ability to upload new photos and collections, allowing users to assign them a specific spot in space and time, using interactive maps and timelines.</p>",
		"ceraunavolta-date": "WIP",
		"portfolio-date": "September 2021",
		"portfolio-desc": "<p>First iteraction of my own personal portfolio.</p><p>Coded by hand using Vue as a front-end framework, Nuxt for the general structure and routing, and Tailwind CSS for styling. Supports localization using i18n.</p>",
	"kaiju-date": "May 2021",
	"kaiju-desc": "<p>Game entry for the GameJam 'Mini Jam 81: Kaiju', developed in a 48 hours schedule.</p><p>The game consists of a 2D scroller, included features are: six different levels set in different areas, animated cutscenes, boss fights.</p><p>You can play the game on <a target=\"_blank\" class=\"font-bold text-green-500 underline\" href=\"https://mirkopani.itch.io/business-kaiju\">itch.io</a>. The game was created using Unity3D.</p>",
	"coldwar-date":"January 2021",
	"coldwar-desc":"<p>Cold War is a simple multiplayer puzzle game that aims to simulate the experience of an Escape Room.</p><p>It consists of an interactive website with several interactive puzzles to be solved.</p><p>Every interaction by a user is shared with all instances in real time via SignalR. The back-end is managed by Asp.Net Core while the front-end has been implemented as a Blazor WebAssembly project.</p>",
    "dovesibutta-date": "September 2018",
	"dovesibutta-desc": "<p>Dove Si Butta is an application for the Google Assistant.</p><p>It allows you to find out in which separate collection a particular type of waste should be disposed in. The operation is very simple, just indicate the name of the waste and Dove Si Butta will recommend the most appropriate disposal destination.</p><p>The application was built using the Google Actions Console to achieve user interaction, while the logic is handled by a cloud function that analyses the query and retrieves data from a Firebase instance.</p>",
	"partycast-date" : "January 2018",
	"partycast-desc" : "<p>PartyCast is a multiplayer game from 2 to 4 players that uses Google Cast technology and an Android device as a remote control.</p><p>Once the application is installed on their phone, users can connect and play with each other through the use of a TV and a Google Cast device (such as a ChromeCast).</p><p>The goal of the game is to win a series of challenges (mini-games). There are challenges of all kinds, from using the phone's touch screen to blowing, shaking or rotating the device.</p>"
	},
	"it": {
		"title": "Progetti",
		"subtitle" :"Progetti personali",
		"desc1": "In questa pagina puoi trovare vari progetti ideati nel mio tempo libero, sia per apprendere nuove tecnologie, sia per divertimento!",
		"desc2": "Alcuni di questi sono stati realizzati completamente da me, altri invece sono stati frutto della collaborazione con amici.",
		"ceraunavolta-desc": "<p>Progetto in costruzione.</p><p>Lo scopo del progetto sarà quello di poter visionare foto d'epoca tramite una mappa interattiva del mio paese natio, Villaverla.</p><p>Le funzionalità previste includono la possibilità di caricare nuove immagini e visualizzarle tramite una mappa esplorabile e una linea temporale.</p>",
		"ceraunavolta-date": "WIP",
		"portfolio-date": "Settembre 2021",
		"portfolio-desc": "<p>Prima versione del mio portfolio personale.</p><p>Realizzato utilizzando Vue per la gestione dei componenti, Nuxt per la struttura generale e il routing e Tailwind CSS per l'aspetto grafico.</p>",
		"kaiju-date": "Maggio 2021",
		"kaiju-desc": "<p>Gioco realizzato entro il limite di 48 ore per la GameJam 'Mini Jam 81: Kaiju'.</p><p>Il gioco consiste in uno scroller 2D, le funzionalità includono: sei diversi livelli ambientati in contesti differenti, cutscene animate, scontri con boss di fine livello.</p><p>Il gioco è giocabile nel sito <a target=\"_blank\" class=\"font-bold text-green-500 underline\" href=\"https://mirkopani.itch.io/business-kaiju\">itch.io</a> ed è stato realizzato con il motore grafico Unity3D.</p>",
		"coldwar-date":"Gennaio 2021",
		"coldwar-desc":"<p>Cold war è un semplice puzzle game multigiocatore con lo scopo di simulare l'esperienza di una Escape Room.</p><p>Consiste in un sito esplorabile con all'interno diversi puzzle interattivi da dover risolvere.</p><p>Ogni interazione da parte di un utente è condivisa con tutte le istanze in tempo reale tramite SignalR. Il back-end è gestito da Asp.Net Core mentre il front-end è stato realizzato come progetto Blazor WebAssembly.</p>",
    	"dovesibutta-date": "Settembre 2018",
		"dovesibutta-desc": "<p>Dove Si Butta è una applicazione per l'Assistente Google.</p><p>Essa permette di scoprire in quale raccolta differenziata va gettato un particolare tipo di rifiuto. Il funzionamento è molto semplice, basta indicare il nome del rifiuto e Dove Si Butta consiglierà la destinazione di smaltimento più adeguata.</p><p>L'applicazione è stata realizzata utilizzando la Google Actions Console per ottenere l'interazione con l'utente, mentre la logica è gestita da una funzione cloud che analizza la query e preleva i dati da una istanza Firebase.</p>",
		"partycast-date" : "Gennaio 2018",
		"partycast-desc" : "<p>PartyCast è un gioco multigiocatore da 2 a 4 giocatori che utilizza la tecnologia Google Cast e un dispositivo Android come telecomando.</p><p>Gli utenti, una volta installata l'applicazione nel proprio telefono, possono connettersi e giocare tra loro tramite l'uso di una TV e un dispositivo Google Cast (come un ChromeCast).</p><p>Lo scopo del gioco è quello di vincere una serie di sfide (detti minigiochi) affrontate tra utenti. Sono presenti sfide di ogni tipo: dall’usare il touch screen del telefono, al soffiare, allo scuotere o ruotare il dispositivo.</p>"
	}
}
</i18n>