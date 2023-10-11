"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9494],{55991:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(66095);class n{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new a.aD(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,a.dx)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,a.dx)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,a.dx)(async(t,r)=>a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cL)(t),r]}))}},19494:function(t,r,e){e.r(r),e.d(r,{SignatureDrop:function(){return o}});var a=e(2593),n=e(9279),i=e(66095),s=e(55991),c=e(52211);e(64063),e(2162),e(13550),e(30643),e(65007);class o extends s.S{static contractRoles=i.dO;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.dw(t,r,n,a,e);super(p,e,s),this.abi=i.e.parse(n||[]),this.metadata=new i.ah(this.contractWrapper,i.dD,this.storage),this.app=new i.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ai(this.contractWrapper,o.contractRoles),this.royalties=new i.aj(this.contractWrapper,this.metadata),this.sales=new i.ak(this.contractWrapper),this.encoder=new i.ag(this.contractWrapper),this.estimator=new i.aQ(this.contractWrapper),this.events=new i.aR(this.contractWrapper),this.platformFees=new i.aT(this.contractWrapper),this.interceptor=new i.aS(this.contractWrapper),this.claimConditions=new i.am(this.contractWrapper,this.metadata,this.storage),this.signature=new i.aE(this.contractWrapper,this.storage),this.revealer=new i.al(this.contractWrapper,this.storage,i.d$.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new i.aE(this.contractWrapper,this.storage),this.owner=new i.aV(this.contractWrapper),this.checkout=new c.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){let[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||i.dT).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),r+e);return await Promise.all(Array.from(Array(n).keys()).map(t=>this.get(t.toString())))}async getAllUnclaimed(t){let r=a.O$.from(t?.start||0).toNumber(),e=a.O$.from(t?.count||i.dT).toNumber(),n=a.O$.from(Math.max((await this.totalClaimedSupply()).toNumber(),r)),s=a.O$.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),n.toNumber()+e));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(t=>this.erc721.getTokenMetadata(n.add(t).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,i.bI)("transfer"),n.d]);return!t}createBatch=(0,i.dx)(async(t,r)=>this.erc721.lazyMint.prepare(t,r));async getClaimTransaction(t,r,e){return this.erc721.getClaimTransaction(t,r,e)}claimTo=(0,i.dx)(async(t,r,e)=>this.erc721.claimTo.prepare(t,r,e));claim=(0,i.dx)(async(t,r)=>this.erc721.claim.prepare(t,r));burn=(0,i.dx)(async t=>this.erc721.burn.prepare(t));async prepare(t,r,e){return i.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}},52211:function(t,r,e){e.d(r,{a:function(){return h}});var a=e(66095),n=e(38776);let i="https://paper.xyz/api/2022-08-12/platform/thirdweb",s={[a.cR.Mainnet]:"Ethereum",[a.cR.Goerli]:"Goerli",[a.cR.Polygon]:"Polygon",[a.cR.Mumbai]:"Mumbai",[a.cR.Avalanche]:"Avalanche"};async function c(t,r){let e=((0,n.Z)(r in s,`chainId not supported by paper: ${r}`),s[r]),a=await fetch(`${i}/register-contract?contractAddress=${t}&chain=${e}`),c=await a.json();return(0,n.Z)(c.result.id,"Contract is not registered with paper"),c.result.id}let o={expiresInMinutes:15,feeBearer:"BUYER",sendEmailOnSuccess:!0,redirectAfterPayment:!1};async function p(t,r){let e=await fetch(`${i}/checkout-link-intent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contractId:t,...o,...r,metadata:{...r.metadata,via_platform:"thirdweb"},hideNativeMint:!0,hidePaperWallet:!!r.walletAddress,hideExternalWallet:!0,hidePayWithCrypto:!0,usePaperKey:!1})}),a=await e.json();return(0,n.Z)(a.checkoutLinkIntentUrl,"Failed to create checkout link intent"),a.checkoutLinkIntentUrl}class h{constructor(t){this.contractWrapper=t}async getCheckoutId(){return c(this.contractWrapper.address,await this.contractWrapper.getChainID())}async isEnabled(){try{return!!await this.getCheckoutId()}catch(t){return!1}}async createLinkIntent(t){return await p(await this.getCheckoutId(),t)}}}}]);