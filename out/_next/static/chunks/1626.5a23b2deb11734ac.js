"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1626],{83287:function(t,e,n){n.d(e,{W:function(){return r}});var i=n(6475),s=n(65007);class r extends s.Z{constructor(t){let{chains:e=i.gL9,options:n}=t;super(),this.chains=e,this.options=n}getBlockExplorerUrls(t){let e=t.explorers?.map(t=>t.url)??[];return e.length>0?e:void 0}isChainUnsupported(t){return!this.chains.some(e=>e.chainId===t)}updateChains(t){this.chains=t}}},56856:function(t,e,n){n.d(e,{A:function(){return o},C:function(){return a},R:function(){return h},S:function(){return u},U:function(){return d},a:function(){return c}});var i=n(42009);class s extends Error{constructor(t,e){let{cause:n,code:i,data:s}=e;if(!Number.isInteger(i))throw Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw Error('"message" must be a nonempty string.');super(`${t}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=i,this.data=s}}class r extends s{constructor(t,e){let{cause:n,code:i,data:s}=e;if(!(Number.isInteger(i)&&i>=1e3&&i<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(t,{cause:n,code:i,data:s})}}class o extends Error{constructor(){super(...arguments),(0,i._)(this,"name","AddChainError"),(0,i._)(this,"message","Error adding chain")}}class a extends Error{constructor(t){let{chainId:e,connectorId:n}=t;super(`Chain "${e}" not configured for connector "${n}".`),(0,i._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,i._)(this,"name","ConnectorNotFoundError"),(0,i._)(this,"message","Connector not found")}}class h extends s{constructor(t){super("Resource unavailable",{cause:t,code:-32002}),(0,i._)(this,"name","ResourceUnavailable")}}class u extends r{constructor(t){super("Error switching chain",{cause:t,code:4902}),(0,i._)(this,"name","SwitchChainError")}}class d extends r{constructor(t){super("User rejected request",{cause:t,code:4001}),(0,i._)(this,"name","UserRejectedRequestError")}}},32252:function(t,e,n){n.d(e,{g:function(){return r},i:function(){return s}});var i=n(6475);function s(t){let e=new URL(t).hostname;return e.endsWith(".thirdweb.com")||"localhost"===e||"0.0.0.0"===e}function r(t){return(0,i.OZ$)(t).map(t=>{try{let e=new URL(t);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch(e){return t}})}},95664:function(t,e,n){n.d(e,{_:function(){return w}});var i=n(42009),s=n(16074),r=n(50037),o=n(32252),a=n(19485),c=n(241),h=n(16441),u=n(83287),d=n(4646),l=n(56856);n(65007);var m=new WeakMap;class w extends u.W{constructor(t){let e={shimDisconnect:!0,getProvider:()=>{if((0,r.a)(globalThis.window))return globalThis.window.ethereum},...t.options};super({chains:t.chains,options:e}),(0,s._)(this,m,{writable:!0,value:void 0}),(0,i._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,i._)(this,"onAccountsChanged",async t=>{0===t.length?this.emit("disconnect"):this.emit("change",{account:a.getAddress(t[0])})}),(0,i._)(this,"onChainChanged",t=>{let e=(0,d.n)(t),n=this.isChainUnsupported(e);this.emit("change",{chain:{id:e,unsupported:n}})}),(0,i._)(this,"onDisconnect",async t=>{if(1013===t.code){let t=await this.getProvider();if(t)try{let t=await this.getAccount();if(t)return}catch{}}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});let n=e.getProvider();if("string"==typeof e.name)this.name=e.name;else if(n){let t=function(t){if(!t)return"Injected";let e=t=>t.isAvalanche?"Core Wallet":t.isBitKeep?"BitKeep":t.isBraveWallet?"Brave Wallet":t.isCoinbaseWallet?"Coinbase Wallet":t.isExodus?"Exodus":t.isFrame?"Frame":t.isKuCoinWallet?"KuCoin Wallet":t.isMathWallet?"MathWallet":t.isOneInchIOSWallet||t.isOneInchAndroidWallet?"1inch Wallet":t.isOpera?"Opera":t.isPortal?"Ripio Portal":t.isTally?"Tally":t.isTokenPocket?"TokenPocket":t.isTokenary?"Tokenary":t.isTrust||t.isTrustWallet?"Trust Wallet":t.isMetaMask?"MetaMask":void 0;if(t.providers?.length){let n=new Set,i=1;for(let s of t.providers){let t=e(s);t||(t=`Unknown Wallet #${i}`,i+=1),n.add(t)}let s=[...n];return s.length?s:s[0]??"Injected"}return e(t)??"Injected"}(n);e.name?this.name=e.name(t):"string"==typeof t?this.name=t:this.name=t[0]}else this.name="Injected";this.id="injected",this.ready=!!n,this.connectorStorage=t.connectorStorage}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let e=await this.getProvider();if(!e)throw new l.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=await e.request({method:"eth_requestAccounts"}),i=a.getAddress(n[0]),s=await this.getChainId(),r=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,r=this.isChainUnsupported(t.chainId)}catch(e){console.error(`Could not switch to chain id: ${t.chainId}`,e)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let o={account:i,chain:{id:s,unsupported:r},provider:e};return this.emit("connect",o),o}catch(t){if(this.isUserRejectedRequestError(t))throw new l.U(t);if(-32002===t.code)throw new l.R(t);throw t}}async disconnect(){let t=await this.getProvider();t?.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let t=await this.getProvider();if(!t)throw new l.a;return a.getAddress((await t.request({method:"eth_accounts"}))[0])}async getChainId(){let t=await this.getProvider();if(!t)throw new l.a;return t.request({method:"eth_chainId"}).then(d.n)}async getProvider(){let t=this.options.getProvider();return t&&(0,s.a)(this,m,t),(0,s.b)(this,m)}async getSigner(){let{chainId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[e,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new c.Q(e,t).getSigner(n)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;let t=await this.getProvider();if(!t)throw new l.a;let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(t){let e=await this.getProvider();if(!e)throw new l.a;let n=h.hexValue(t);try{await e.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]});let i=this.chains.find(e=>e.chainId===t);if(i)return i;return{chainId:t,name:`Chain ${n}`,slug:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){let i=this.chains.find(e=>e.chainId===t);if(!i)throw new l.C({chainId:t,connectorId:this.id});if(4902===s.code||s?.data?.originalError?.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:(0,o.g)(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(t){if(this.isUserRejectedRequestError(t))throw new l.U(s);throw new l.A}if(this.isUserRejectedRequestError(s))throw new l.U(s);throw new l.S(s)}}async setupListeners(){let t=await this.getProvider();t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(t){return 4001===t.code}}},31626:function(t,e,n){n.d(e,{PhantomConnector:function(){return d}});var i=n(16074),s=n(42009),r=n(56856),o=n(79311),a=n(95664),c=n(19485),h=n(70759);n(65007);var u=new WeakMap;class d extends a._{constructor(t){let e={name:"Phantom",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:h.g},n={...e,...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),(0,s._)(this,"id",o.w.phantom),(0,i._)(this,u,{writable:!0,value:void 0}),(0,i.a)(this,u,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let e=await this.getProvider();if(!e)throw new r.a;this.setupListeners(),this.emit("message",{type:"connecting"});let n=null;if((0,i.b)(this,u)&&this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)){n=await this.getAccount().catch(()=>null);let t=!!n;if(t)try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(t){if(this.isUserRejectedRequestError(t))throw new r.U(t)}}if(!n){let t=await e.request({method:"eth_requestAccounts"});n=c.getAddress(t[0])}let s=await this.getChainId(),o=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,o=this.isChainUnsupported(t.chainId)}catch(e){console.error(`Could not switch to chain id : ${t.chainId}`,e)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let a={chain:{id:s,unsupported:o},provider:e,account:n};return this.emit("connect",a),a}catch(t){if(this.isUserRejectedRequestError(t))throw new r.U(t);if(-32002===t.code)throw new r.R(t);throw t}}async switchAccount(){let t=await this.getProvider();await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}}}]);