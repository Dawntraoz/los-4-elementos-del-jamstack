<template>
  <section
    v-editable="blok"
    class="bg-indigo-100 py-8 md:py-12">
    <div class="container px-4 mx-auto flex flex-wrap">
      <div
        :key="blok._uid"
        v-for="blok in blok.columns"
        class="w-full md:w-1//2 lg:w-1/3 p-2">
        <component :blok="blok" :is="blok.component" />
      </div>
    </div>
  </section>
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
