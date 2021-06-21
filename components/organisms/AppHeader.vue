<template>
  <header v-if="headerLinks" class="container mx-auto px-4">
    <nav class="flex items-center justify-between bg-white rounded-md shadow-xl p-4 md:px-6">
      <figure>
        <img
          :src="`https://img2.storyblok.com/80x80/filters:format(webp)/f/79165/400x400/1082ff0d24/dawntraoz-alba-silvente.jpg`"
          width="40"
          height="40"
          class="rounded-full"
          alt="Logo principal de los 4 elementos del Jamstack"
        />
      </figure>
      <component :blok="headerLinks" :is="headerLinks.component" />
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    headerLinks () {
      return this.$store.state.layout?.content?.header_links[0]
    }
  }
}
</script>
