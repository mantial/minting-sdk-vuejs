import VuejsSdk from "./vuejs-sdk.vue";

const plugin = {
    install(Vue,) {
        Vue.component("vuejs-sdk", VuejsSdk);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuejsSdk);
}

export default plugin;
