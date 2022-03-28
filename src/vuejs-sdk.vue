<template>
  <div class="vue-sdk">
    <iframe :width="width" :height="height" :src="url" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
  name: 'vuejs-sdk',
  props: {
    width: {
      type: [Number, String],
      required: true,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    url: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
</style>
