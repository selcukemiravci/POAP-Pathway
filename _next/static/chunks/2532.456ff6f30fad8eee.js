"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{83287:function(e,t,r){r.d(t,{W:function(){return WagmiConnector}});var n=r(6475),i=r(65007);let WagmiConnector=class WagmiConnector extends i.Z{constructor(e){let{chains:t=n.gL9,options:r}=e;super(),this.chains=t,this.options=r}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},56856:function(e,t,r){r.d(t,{A:function(){return AddChainError},C:function(){return ChainNotConfiguredError},R:function(){return ResourceUnavailableError},S:function(){return SwitchChainError},U:function(){return UserRejectedRequestError},a:function(){return ConnectorNotFoundError}});var n=r(42009);let RpcError=class RpcError extends Error{constructor(e,t){let{cause:r,code:n,data:i}=t;if(!Number.isInteger(n))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(r)}`),this.cause=r,this.code=n,this.data=i}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(e,t){let{cause:r,code:n,data:i}=t;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:r,code:n,data:i})}};let AddChainError=class AddChainError extends Error{constructor(){super(...arguments),(0,n._)(this,"name","AddChainError"),(0,n._)(this,"message","Error adding chain")}};let ChainNotConfiguredError=class ChainNotConfiguredError extends Error{constructor(e){let{chainId:t,connectorId:r}=e;super(`Chain "${t}" not configured for connector "${r}".`),(0,n._)(this,"name","ChainNotConfigured")}};let ConnectorNotFoundError=class ConnectorNotFoundError extends Error{constructor(){super(...arguments),(0,n._)(this,"name","ConnectorNotFoundError"),(0,n._)(this,"message","Connector not found")}};let ResourceUnavailableError=class ResourceUnavailableError extends RpcError{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,n._)(this,"name","ResourceUnavailable")}};let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,n._)(this,"name","SwitchChainError")}};let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,n._)(this,"name","UserRejectedRequestError")}}},4646:function(e,t,r){r.d(t,{n:function(){return normalizeChainId}});function normalizeChainId(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},32252:function(e,t,r){r.d(t,{g:function(){return getValidPublicRPCUrl},i:function(){return isTwUrl}});var n=r(6475);function isTwUrl(e){let t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||"localhost"===t||"0.0.0.0"===t}function getValidPublicRPCUrl(e){return(0,n.OZ$)(e).map(e=>{try{let t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(t){return e}})}},12532:function(e,t,r){r.d(t,{CoinbaseWalletConnector:function(){return CoinbaseWalletConnector}});var n=r(71958),i=r(16074),s=r(42009),o=r(19485),a=r(241),c=r(16441),h=r(79311),u=r(32252),d=r(83287),l=r(4646),g=r(56856);r(65007);var C=new WeakMap,m=new WeakMap,p=new WeakSet;let CoinbaseWalletConnector=class CoinbaseWalletConnector extends d.W{constructor(e){let{chains:t,options:r}=e;super({chains:t,options:{reloadOnDisconnect:!1,...r}}),(0,n._)(this,p),(0,s._)(this,"id",h.w.coinbase),(0,s._)(this,"name","Coinbase Wallet"),(0,s._)(this,"ready",!0),(0,i._)(this,C,{writable:!0,value:void 0}),(0,i._)(this,m,{writable:!0,value:void 0}),(0,s._)(this,"onAccountsChanged",e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:o.getAddress(e[0])})}),(0,s._)(this,"onChainChanged",e=>{let t=(0,l.n)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})}),(0,s._)(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});let r=await t.enable(),n=o.getAddress(r[0]),i=await this.getChainId(),s=this.isChainUnsupported(i);if(e&&i!==e)try{let t=await this.switchChain(e);i=t.chainId,s=this.isChainUnsupported(i)}catch(t){console.error(`Connected but failed to switch to desired chain ${e}`,t)}return{account:n,chain:{id:i,unsupported:s},provider:new a.Q(t)}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new g.U(e);throw e}}async disconnect(){if(!(0,i.b)(this,m))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});if(0===t.length)throw Error("No accounts found");return o.getAddress(t[0])}async getChainId(){let e=await this.getProvider(),t=(0,l.n)(e.chainId);return t}async getProvider(){if(!(0,i.b)(this,m)){let e=(await Promise.all([r.e(1163),r.e(5811),r.e(6942)]).then(r.bind(r,45811))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,i.a)(this,C,new e(this.options));let t=i.b(this,C).walletExtension?.getChainId(),n=this.chains.find(e=>this.options.chainId?e.chainId===this.options.chainId:e.chainId===t)||this.chains[0],s=this.options.chainId||n?.chainId,o=this.options.jsonRpcUrl||n?.rpc[0];(0,i.a)(this,m,(0,i.b)(this,C).makeWeb3Provider(o,s))}return(0,i.b)(this,m)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=await Promise.all([this.getProvider(),this.getAccount()]);return new a.Q(t,e).getSigner(r)}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=c.hexValue(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.chainId===e)??{chainId:e,name:`Chain ${r}`,slug:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(s){let i=this.chains.find(t=>t.chainId===e);if(!i)throw new g.C({chainId:e,connectorId:this.id});if(4902===s.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:(0,u.g)(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(e){if((0,n.a)(this,p,_isUserRejectedRequestError2).call(this,e))throw new g.U(e);throw new g.A}if((0,n.a)(this,p,_isUserRejectedRequestError2).call(this,s))throw new g.U(s);throw new g.S(s)}}async setupListeners(){let e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!(0,i.b)(this,C))throw Error("Coinbase Wallet SDK not initialized");return(0,i.b)(this,C).getQrUrl()}};function _isUserRejectedRequestError2(e){return/(user rejected)/i.test(e.message)}}}]);