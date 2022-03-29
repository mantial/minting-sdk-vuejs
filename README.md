# @roman86/vuejs-sdk

Source code at https://github.com/updev113/vuejs-sdk

## Installation

    npm install @roman86/vuejs-sdk

## Build

    npm run build

## Usage

The VuejsSdk can use as global component. For example:

```js
import Vue from 'vue';
import VuejsSDK from '@roman86/vuejs-sdk';

Vue.component('vuejs-sdk', VuejsSDK)
```

Also import to needed component and use local

```vue

<template>
  <vuejs-sdk width="100%" height="500px" url="http://..."/>
  <!--  or use number for pass size in pixels-->
  <vuejs-sdk :width="100" :height="500" url="http://..."/>
</template>

<script>
import VuejsSdk from '@roman86/vuejs-sdk'

export default {
  // ...
  components: {
    VuejsSDK
  },
  // ...
}
</script>
```

Component have props:

```
{
    width: {
        type: [String, Number],
        required: true
    },
    height: {
        type: [String, Number],
        required: true
    },
    url: {
        type: [String],
        required: true
    },
     iframeConfig: {
        type: Object
    }
}
```
