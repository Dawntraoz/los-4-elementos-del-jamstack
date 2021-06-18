<template>
  <component :is="tag" class="font-bold pb-2">
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>