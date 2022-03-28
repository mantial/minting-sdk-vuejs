<template>
  <div class="vue-sdk">
    <iframe :height="height" :src="url" :width="width" v-bind="$attrs"/>
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
    },
    network: {
      type: String,
      validator: value => ['ropsten', 'ethereum'].includes(value)
    },
    collectionSlug: String,
    amount: Number,
    showTitle: Boolean,
    amountSelector: Boolean,
    saleSelector: Boolean,
    saleId: Number,
    showDetails: Boolean,
    showErrors: Boolean,
    theme: {},
    styles: {
      type: Object,
      default: () => {}
    },
    texts: {
      type: Object,
      default: () => {}
    },
  },
};
</script>

<style scoped>
</style>
