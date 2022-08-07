<template>
  <div class="container mx-auto max-w-screen-md ">
    <div class="mb-16">
      <h1 class="text-7xl font-black text-left mb-5">Blog</h1>
      <p class="text-xl">{{$t('desc')}}</p>
    </div>

    <div class="flex flex-col">
      <PostPreview class="my-6" v-for="post in posts" :key="post.slug" :post="post"></PostPreview>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, app }) {
    const posts = await $content(app.i18n.locale)
      .only(['title', 'image', 'tags', 'slug','date'])
      .sortBy('createdAt', 'desc')
      .fetch()

    console.log('posts', posts)
    return {
      posts: posts.map((posts) => ({
        ...posts,
        path: posts.path.replace(`/${app.i18n.locale}`, '/blog'),
      }))
    }
  }
}
</script>

<style scoped>

</style>

<i18n>
{
  "en": {
    "desc": "At work or for personal projects, we often run into problems that are difficult or complicated to solve. Here you will find guides and articles written in my spare time. I hope they can help! 😁"

  },
  "it": {
    "desc": "A lavoro o per progetti personali, ci si imbatte spesso in problemi difficili o complicati da risolvere. Qui troverai guide e articoli scritti nel mio tempo libero. Spero possano essere d'aiuto! 😁"
  }
}
</i18n>
