<template>
  <footer v-if="footerLinks" class="bg-indigo-900 text-white py-8 md:py-12">
    <div class="container mx-auto px-4 flex flex-wrap">
      <component
        v-for="column in footerLinks"
        :key="column._uid"
        :blok="column"
        :is="column.component"
        class="flex-col w-full md:w-1/2 lg:w-1/3"
      />
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    footerLinks () {
      return this.$store.state.layout?.content?.footer_links
    }
  }
}
</script>