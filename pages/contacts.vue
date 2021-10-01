<template>
  <section>
    <PageHero :heroTitle="heroTitle">
      <p>
        Per maggiori informazioni puoi trovarmi nei social elencati in fondo
        alla pagina.
      </p>
      <p>
        Per proposte, ti invito a scrivermi su
        <TextHighlight
          ><a
            class="hover:text-green-600"
            target="_blank"
            href="https://www.linkedin.com/in/mirko-pani/"
            >LinkedIn</a
          ></TextHighlight
        >
        o alla mia
        <TextHighlight
          ><a class="hover:text-green-600" href="mailto:contatti@mirkopani.me"
            >email personale</a
          ></TextHighlight
        >.
      </p>
    </PageHero>

    <div class="flex justify-center mt-10">
      <div class="flex flex-col mb-6 text-center">
        <ContactButton name="Github" url="https://github.com/MirkoPani" />
        <ContactButton name="LinkedIn" url="https://www.linkedin.com/in/mirko-pani"/>
        <ContactButton name="Instagram (personale)" url="https://www.instagram.com/mirkoopani"/>
        <ContactButton name="Instagram (fotografo)" url="https://www.instagram.com/mirkoophoto"/>
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
      pageTitle: "Mirko Pani - Contatti",
      heroTitle: "Contatti",
    };
  },
  head(): any {
    return {
      title: this.pageTitle,
    };
  },
});
</script>
