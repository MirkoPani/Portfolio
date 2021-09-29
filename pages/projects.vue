<template>
  <section>
    <PageHero :heroTitle="heroTitle">
	<p>In questa pagina puoi trovare vari progetti ideati nel mio tempo libero, sia per apprendere nuove tecnologie, sia per divertimento!</p>
	<p>Alcuni di questi sono stati realizzati completamente da me, altri invece sono stati frutto della collaborazione con amici.</p>
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
      pageTitle: "Mirko Pani - Progetti",
      heroTitle: "Progetti personali",
      projects: [
        
        {
          ImgSrc: require("../assets/img/ceraunavolta.png"),
          Title: "C'era una volta",
          Date: "WIP",
          Desc: "<p>Progetto in costruzione.</p><p>Lo scopo del progetto sarà quello di poter visionare foto d'epoca tramite una mappa interattiva del mio paese natio, Villaverla.</p><p>Le funzionalità previste includono la possibilità di caricare nuove immagini e visualizzarle tramite una mappa esplorabile e una linea temporale.</p>",
          BgColor: "bg-yellow-100",
		  CodeLink : "https://github.com/MirkoPani/CeraUnaVolta",
		  Pills: ["C#", "Asp.Net Core", "EF Core", "Altro"]
        },
		{
          ImgSrc: require("../assets/logo.png"),
          Title: "mirkopani.me",
          Date: "Settembre 2021",
          Desc: "<p>Prima versione del mio portfolio personale.</p><p>Realizzato utilizzando Vue per la gestione dei componenti, Nuxt per la struttura generale e il routing, e Tailwind CSS per l'aspetto grafico.</p>",
          BgColor: "bg-gray-900",
		  CodeLink: "https://github.com/MirkoPani/Portfolio",
		  Pills: ["Typescript", "Vue", "Nuxt.js", "Tailwind CSS"]
        },
		{
          ImgSrc: require("../assets/img/kaiju.png"),
          Title: "Business Kaiju",
          Date: "Maggio 2021",
          Desc: '<p>Gioco realizzato entro il limite di 48 ore per la GameJam "Mini Jam 81: Kaiju".</p><p>Il gioco consiste in uno scroller 2D, le funzionalità includono: sei diversi livelli ambientati in contesti differenti, cutscene animate, scontri con boss di fine livello.</p><p>Il gioco è giocabile nel sito <a target="_blank" class="font-bold text-green-500 underline" href="https://mirkopani.itch.io/business-kaiju">itch.io</a> ed è stato realizzato con il motore grafico Unity3D.</p>',
          BgColor: "bg-green-400",
		  CodeLink: "https://github.com/MirkoPani/Business-Kaiju",
		  Pills: ["C#", "Unity3D"]
        },
        {
          ImgSrc: require("../assets/img/coldwar.png"),
          Title: "Cold War",
          Date: "Gennaio 2021",
          Desc: "Cold war è un semplice puzzle game multigiocatore con lo scopo di simulare l'esperienza di una Escape Room. <p>Consiste in un sito esplorabile con all'interno diversi puzzle interattivi da dover risolvere.</p><p>Ogni interazione da parte di un utente è condivisa con tutte le istanze in tempo reale tramite SignalR. Il back-end è gestito da Asp.Net Core mentre il front-end è stato realizzato come progetto Blazor WebAssembly.</p>",
          BgColor: "bg-black",
		  Pills: ["C#", "Asp.Net Core", "Blazor", "SignalR", "Bootstrap"]
        },
		{
          ImgSrc: require("../assets/img/dovesibutta.png"),
          Title: "Dove si butta",
          Date: "Settembre 2018",
          Desc: "<p>Dove Si Butta è una applicazione per l'Assistente Google.</p><p>Essa permette di scoprire in quale raccolta differenziata va gettato un particolare tipo di rifiuto. Il funzionamento è molto semplice, basta indicare il nome del rifiuto e Dove Si Butta consiglierà la destinazione di smaltimento più adeguata.</p><p>L'applicazione è stata realizzata utilizzando la Google Actions Console per ottenere l'interazione con l'utente, mentre la logica è gestita da una funzione cloud che analizza la query e preleva i dati da una istanza Firebase.</p>",
          BgColor: "bg-blue-800",
		  CodeLink: "https://github.com/MirkoPani/DoveSiButta",
		  Pills: ["Javascript", "Node.js", "Google Actions API", "Firebase"]
        },
        {
          ImgSrc: require("../assets/img/partycast.png"),
          Title: "Partycast",
          Date: "Gennaio 2018",
          Desc: `<p>PartyCast è un gioco multigiocatore da 2 a 4 giocatori che utilizza la tecnologia Google Cast e un dispositivo Android come telecomando.</p>
				 <p>Gli utenti, una volta installata l'applicazione nel proprio telefono, possono connettersi e giocare tra loro tramite l'uso di una TV e un dispositivo Google Cast (come un ChromeCast). </p>
				 <p>Lo scopo del gioco è quello di vincere una serie di sfide (detti minigiochi) affrontate tra utenti. Sono presenti sfide di ogni tipo: dall’usare il touch screen del telefono, al soffiare, allo scuotere o ruotare il dispositivo.</p>`,
          BgColor: "bg-red-900",
		  CodeLink: "https://github.com/MirkoPani/PartyCast",
		  Pills : ["Javascript", "Java", "Phaser.js", "Chromecast SDK"]
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
