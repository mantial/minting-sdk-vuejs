# minting-sdk-vuejs

Source cose at https://github.com/gitroman38/vue-sdk-test

## Installation

``npm install -D minting-sdk-vuejs``

``yarn add -D minting-sdk-vuejs``

## Usage

---
The ``minting-sdk-vuejs`` plugin can be use like this example:
---

```js
import Vue from 'vue';
import Minting from 'minting-sdk-vuejs';

const app = createApp(App)
app.use(Minting)
```

---
Also use global component where you need
---

```vue

<template>
  <vuejs-sdk width="100%" height="500px" :config="{...}"/>
  <!--  or use number for pass size in pixels-->
  <vuejs-sdk :width="100" :height="500" :config="{...}"/>
</template>
```

---
Component have props:
---

```
{
    //Width for iframe
    width: {
        type: [String, Number],
        required: true
    },
    //Height for iframe
    height: {
        type: [String, Number],
        required: true
    },
    //Config for iframe postMessage
     config: {
        type: Object
    }
}
```

---
Config for iframe should be follow next structure:
---

```ts
{
    network: 'ropsten' | 'ethereum';
    collectionSlug: string;
    amount?: number;
    showTitle?: boolean;
    amountSelector?: boolean;
    saleSelector?: boolean;
    saleId?: number;
    showDetails?: boolean;
    showErrors?: boolean;
    theme?: any; // ---> MUI v5 theme
    styles?: { // ---> allow inline styles applied as 'sx' to MUI components
        button?: any;
        mintButton?: any;
        switchNetworkButton?: any;
        container?: any;
        title?: any;
        error?: any;
        amount?: any;
        iconButton?: any;
        texts?: any;
        success?: any;
        minting?: any;
        minterContainer?: any;
        description?: any;
        installMetamaskButton?: any;
    };
    texts?: {
        title?: string;
        minting?: string;
        success?: string;
        buy?: string;
        goBack?: string;
        description?: string;
        switchNetwork?: string;
        installMetamask?: string;
    };
}
;
```
