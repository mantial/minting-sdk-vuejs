# @mantial/minting-sdk-vuejs

Source code at https://github.com/mantial/minting-sdk-vuejs

## Installation

`npm install @mantial/minting-sdk-vuejs`

## Build

`npm run rollup`

## Usage

### The `@mantial/minting-sdk-vuejs` plugin could be used like in this example:

```js
import Vue from "vue";
import Minting from "@mantial/minting-sdk-vuejs";

const app = createApp(App);
app.use(Minting);
```

### Also use global component where you need

```vue
<template>
  <vuejs-sdk width="100%" height="500px" :config="{...}" />
  <!--  or use number for pass size in pixels-->
  <vuejs-sdk :width="100" :height="500" :config="{...}" />
</template>
```

### Component has props:

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

## Mantial configuration

Under the hood this use Material-UI to apply styling. Be sure to read documentation if you want to customize this 100%

```
{
    network: 'ropsten' | 'ethereum', //network where the iframe is going to run, being "ethereum" mainnet and "ropsten" testnet.
    collectionSlug: string //slug for your collection. Use the same that you use to register it, you MUST to put the slug correctly, otherwise it won't work,
    amount: string //The amount of NFTs you want the user to be able to mint,
    showTitle: boolean //if you want to show the title above the mint button,
    amountSelector: boolean //if you want the user to be able to select how many NFTs mint(max 5),
    saleSelector: boolean //if you want the user to be able to see the different active sales,
    saleId: string //use this in case you want to create a mint button that works with a particular sale (without the selector) so that it only allows users to mint for a particular sale,
    showDetails: boolean //if you want the user to be able to see details from the operation,
    showErrors: boolean //if you want the user to be able to see the different errors that can occur in the minting process,
    theme: any, // ---> [MUI v5 theme](https://mui.com/material-ui/customization/theming/),
    styles: { // ---> [allow inline styles applied as 'sx' to MUI components](https://mui.com/system/the-sx-prop/)
        button: any,
        mintButton: any,
        switchNetworkButton: any,
        container: any,
        title: any,
        error: any,
        amount: any,
        iconButton: any,
        texts: any,
        success: any,
        minting: any,
        minterContainer: any,
        description: any,
        installMetamaskButton: any,
    },
    texts: {
        title: string //title you want to show above the mint button,
        minting: string //text you want to show while the minting is happening,
        success: string //text you want to show if the mint was success,
        buy: string //text you want to show on the mint button "Buy" by default,
        goBack: string //text you want to show to go back once the mint was success;
        description: string //a description for some details you want to show,
        switchNetwork: string //text to show when the network is not the correct "Switch Network" by default,
        installMetamask: string //text to show when metamask is not installed "Install Metamask" by default,
    },
};
```
