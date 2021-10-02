<template>
  <section>
    <PageHero :heroTitle="heroTitle">
      <p>
        {{this.$t('desc-1')}}
      </p>
      <p>
        {{this.$t('desc-2')}}
        <TextHighlight
          ><a
            class="hover:text-green-600"
            target="_blank"
            href="https://www.linkedin.com/in/mirko-pani/"
            >LinkedIn</a
          ></TextHighlight
        >
        {{this.$t('desc-2b')}}
        <TextHighlight><a class="hover:text-green-600" href="mailto:contatti@mirkopani.me">{{this.$t('email')}}</a></TextHighlight>.
      </p>
    </PageHero>

    <div class="flex justify-center mt-10">
      <div class="flex flex-col mb-8 text-center">
        <ContactButton name="Github" url="https://github.com/MirkoPani" />
        <ContactButton name="LinkedIn" url="https://www.linkedin.com/in/mirko-pani"/>
        <ContactButton :name="this.$t('insta-personal')" url="https://www.instagram.com/mirkoopani"/>
        <ContactButton :name="this.$t('insta-photographer')" url="https://www.instagram.com/mirkoophoto"/>
      </div>
    </div>

    <Zelda></Zelda>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      pageTitle: "Mirko Pani - "+this.$t('title'),
      heroTitle: this.$t('title'),
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
	"title": "Get in touch",
	"desc-1": "For more information, you can find me on these social websites.",
	"desc-2": "For any proposal or suggestion, please contact me on ",
	"desc-2b": "or on my own",
	"email": "personal email",
	"insta-personal" : "Instagram (personal)",
	"insta-photographer": "Instagram (photographer)"
  },
  "it": {
	"title": "Contatti",
	"desc-1": "Per maggiori informazioni puoi trovarmi nei social elencati in fondo alla pagina.",
	"desc-2": "Per proposte o suggerimenti, ti invito a scrivermi su",
	"desc-2b": "o alla mia",
	"email": "email personale",
	"insta-personal" : "Instagram (personale)",
	"insta-photographer": "Instagram (fotografo)"
  }
}
</i18n>