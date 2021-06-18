<template>
  <article
    v-editable="blok"
    class="border border-indigo-300 bg-white p-6"
  >
    <a-heading tag="h2" :content="blok.name" class="uppercase" />
  </article>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
