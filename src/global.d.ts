export declare global {

  declare module '*.tmLanguage';

  declare module '*.less' {
    const content: any;
    export default content;
  }

  declare module '*.scss' {
    const content: any;
    export default content;
  }

  declare module '*.json' {
    const value: any;
    export default value;
  }

  declare module 'eth-lightwallet/dist/lightwallet.min.js' {
    const content: any;
    export default content;
  }

  declare module '*.png' {
    const content: any;
    export default content;
  }

  declare module '*.svg' {
    const content: any;
    export default content;
  }

  declare module 'showdown-highlight';

  declare module 'react-split';

  declare module '@amplitude/react-amplitude';

  declare module 'semver/ranges/min-version';
  declare module 'semver/ranges/max-satisfying' {
    export default function semverMaxVersion(
      versions: ReactText[],
      versionRange: string
    ): string;
  }

  import { provider } from 'web3-core';
  import * as ConfluxJSSDK from 'js-conflux-sdk';
  import Web3 from 'web3';
  import System from 'System';
  const { Conflux: ConfluxJS } = ConfluxJSSDK;
  interface Window {
    Web3: Web3;
    pluginStore: any;
    pluginManager: any;
    PubSub: any;
    ethereum: provider;
    BinanceChain: provider;
    conflux: provider;
    confluxJS: ConfluxJS;
    ConfluxJSSDK: ConfluxJSSDK;
    System: System;
  }

  declare function showLoading__GLOBAL(params?: {
    loadingText?: string;
    stepCount?: number;
    currentStep?: number;
    stepText?: string;
  }): void;
  declare function hideLoading__GLOBAL(): void;
}
