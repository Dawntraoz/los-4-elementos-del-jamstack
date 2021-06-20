<template>
  <header
    v-editable="blok"
    class="container mx-auto px-4 py-16"
  >
    <a-heading tag="h1" :content="blok.headline" class="text-5xl pb-8" />
    <a-rich-text :content="blok.description" class="max-w-none" />
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
