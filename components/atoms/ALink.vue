<template>
  <component
    v-editable="blok"
    :is="externalLink ? 'a' : 'nuxt-link'"
    :target="externalLink && '_blank'"
    :href="externalLink && urlLink"
    :to="!externalLink && urlLink"
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
      return this.blok.url.url || '/'
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  @apply border-b-2 border-indigo-500;
}
</style>
