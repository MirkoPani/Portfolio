<template>
  <div class="transition-all duration-500 ease-in-out border-b border-gray-50 pb-4">
    <nuxt-link :to="localePath(post.path)">
      <ul v-if="post.tags" class="flex space-x-3">
        <li class="mb-2 inline-block rounded-full bg-green-200 px-2 py-1 text-sm text-black" v-for="tag in post.tags" :key="tag">
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-2xl font-semibold">{{ post.title }}</h2>
      <p class="mt-2 text-md" v-if="post.date">{{ post.date }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
  }
}
</script>
