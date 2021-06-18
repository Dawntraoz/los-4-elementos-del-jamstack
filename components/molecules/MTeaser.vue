<template>
  <header
    v-editable="blok"
    class="container mx-auto px-4 py-16"
  >
    <a-heading tag="h1" :content="blok.headline" class="text-5xl" />
    <a-rich-text :content="blok.description" />
  </header>
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
