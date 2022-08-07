<template>
  <div class="pt-16 lg:pt-20 pb-24">
    <article class="border-b border-gray-50">
      <nuxt-img
        v-if="post.image"
        class="rounded-lg col-start-3 w-full"
        :src="post.image"
        width="700"
        height="400"
      />
      <div class="w-full">
        <div class="">

          <div class="border-b border-gray-300 pb-8 sm:pb-12">
            <NuxtLink to="/blog-home" href="/" class="block text-white my-8">← {{ $t('back') }}</NuxtLink>
            <ul v-if="post.tags" class="flex space-x-3 mt-2">
              <li
                class="mb-5 inline-block rounded-full bg-green-200 px-2 py-1 text-sm text-black sm:mb-8"
                v-for="tag in post.tags"
                :key="tag"
              >
                {{ tag }}
              </li>
            </ul>
            <h1 class="block text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{{ post.title }}</h1>
            <p class="text-slate-300 mt-8">{{post.date}}</p>
          </div>


          <nuxt-content class="mt-4 prose prose-invert max-w-none py-8 sm:py-12" :document="post" />
        </div>
      </div>


    </article>
    <div class="my-8 rounded-md text-white px-4 py-8 flex lg:flex-row flex-col justify-between">
      <h4 class="font-semibold text-2xl font-mono lg:w-1/2">{{ $t('coffee-title') }}</h4>
      <BuyMeACoffee></BuyMeACoffee>
    </div>

  </div>

</template>
<script>
export default {
  layout: 'blog',

  async asyncData({ $content, params, app }) {
    const post = await $content(app.i18n.locale, params.slug).fetch()
    return { post }
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.post.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.description,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://mirkopani.me/blog/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: `https://mirkopani.me/blog/${this.$route.params.slug}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.post.image,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.image,
        },
        {
          property: "article:published_time",
          content: this.post.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.post.updatedAt,
        },
        {
          property: "article:tag",
          content: this.post.tags ? this.post.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Mirko Pani" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.post.tags ? this.post.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://mirkopani.me/blog/${this.$route.params.slug}`,
        },
      ]
    }
  }
}
</script>

<i18n>
{
  "en": {
    "back": "Go back",
    "coffee-title": "🎉 Please consider a donation if the article helped you..."
  },
  "it": {
   "back": "Torna indietro",
    "coffee-title": "🎉 Se l'articolo ti ha aiutato, considera una donazione..."
  }
}
</i18n>
