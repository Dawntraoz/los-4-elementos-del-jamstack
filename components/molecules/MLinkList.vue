<template>
  <ul
    v-editable="blok" class="flex -mr-4">
    <li
      :key="blok._uid"
      v-for="blok in blok.links"
      class="flex-auto py-1 pr-4">
      <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
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
