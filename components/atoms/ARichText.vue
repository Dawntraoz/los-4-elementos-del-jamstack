<template>
  <div v-html="contentHTML" class="prose"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    contentHTML() {
      return this.$storyapi.richTextResolver.render(this.content)
    }
  }
}
</script>