<template>
  <iframe :id="iframeId" :height="height" :src="url" :width="width" v-bind="$attrs"/>
</template>

<script>
export default {
  name: 'vuejs-sdk',
  data: () => ({
    iframeId: null
  }),
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
    iframeConfig: {
      type: Object,
      default: () => {
      }
    }
    // network: {
    //   type: String,
    //   validator: value => ['ropsten', 'ethereum'].includes(value)
    // },
    // collectionSlug: String,
    // amount: Number,
    // showTitle: Boolean,
    // amountSelector: Boolean,
    // saleSelector: Boolean,
    // saleId: Number,
    // showDetails: Boolean,
    // showErrors: Boolean,
    // theme: {},
    // styles: {
    //   type: Object,
    //   default: () => {
    //   }
    // },
    // texts: {
    //   type: Object,
    //   default: () => {
    //   }
    // },
  },
  created() {
    this.iframeId = this.makeId(10)
  },
  beforeMount() {
    const frame = this.$el || false
    if (frame) {
      frame.onload = () => {
        frame.contentWindow.postMessage(
            Object.assign({}, this.iframeConfig, {type: 'vuejs-sdk-config'}),
            '*'
        );
      };
    }
  },
  methods: {
    makeId(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
};
</script>

<style scoped>
</style>
