<template>
  <component
    v-editable="blok"
    :is="externalLink ? 'a' : 'nuxt-link'"
    :target="externalLink && '_blank'"
    :href="externalLink && urlLink"
    :to="!externalLink && urlLink"
    class="cursor-pointer"
    :rel="externalLink && 'noopener noreferrer'"
  >
    {{ blok.name }}
  </component>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    externalLink () {
      return this.blok.url.linktype === 'url'
    },
    urlLink ()  {
      const cachedUrl = this.blok.url.cached_url
      return '/' + cachedUrl === 'home' ? '' : cachedUrl
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-b-2 border-indigo-500;
}
</style>
