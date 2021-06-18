<template>
  <div v-if="contentHTML" v-html="contentHTML" class="prose"></div>
</template>

<script>
export default {
  props: {
    content: {
      type: [Object, String],
      required: true
    }
  },
  computed: {
    contentHTML() {
      return this.content ? this.$storyapi.richTextResolver.render(this.content) : ''
    }
  }
}
</script>