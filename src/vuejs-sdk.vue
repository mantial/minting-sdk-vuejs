<template>
  <iframe :id="iframeId" :height="height" :src="url" :width="width" v-bind="$attrs"/>
</template>

<script>
export default {
  name: 'vuejs-sdk',
  data: () => ({
    iframeId: null,
    url: ""
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
    config: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    this.iframeId = this.makeId(10)
    let src =
        this.config.network === 'ethereum'
            ? 'https://minter.mantial.com'
            : 'https://dev.minter.mantial.com';
    src += `/${this.config.collectionSlug}?`;
    const params = new URLSearchParams();
    if (this.config.amount) params.append('amount', this.config.amount.toString());
    if (this.config.amountSelector) params.append('amountSelector', this.config.amountSelector.toString());
    if (this.config.showTitle) params.append('showTitle', this.config.showTitle.toString());
    if (this.config.saleSelector) params.append('saleSelector', this.config.saleSelector.toString());
    if (this.config.saleId) params.append('saleId', this.config.saleId.toString());
    if (this.config.showDetails) params.append('showDetails', this.config.showDetails.toString());
    if (this.config.showErrors) params.append('showErrors', this.config.showErrors.toString());
    src += params.toString();
    this.url = src;
  },
  beforeMount() {
    const frame = this.$el || false
    if (frame) {
      frame.onload = () => {
        frame.contentWindow.postMessage(
            Object.assign({}, this.config, {type: 'mantial-config'}),
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
