import VuejsSdk from "./vuejs-sdk.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("vue-sdk", VuejsSdk);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

VuejsSdk.install = install;

export default VuejsSdk;