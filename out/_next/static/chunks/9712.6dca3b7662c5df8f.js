"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9712],{58380:function(t,r,a){a.d(r,{S:function(){return n}});var e=a(82001);class n{get chainId(){return this._chainId}constructor(t,r,a){this.contractWrapper=t,this.storage=r,this.erc20=new e.au(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}transfer=(0,e.dn)(async(t,r)=>this.erc20.transfer.prepare(t,r));transferFrom=(0,e.dn)(async(t,r,a)=>this.erc20.transferFrom.prepare(t,r,a));setAllowance=(0,e.dn)(async(t,r)=>this.erc20.setAllowance.prepare(t,r));transferBatch=(0,e.dn)(async t=>this.erc20.transferBatch.prepare(t))}},9712:function(t,r,a){a.r(r),a.d(r,{Token:function(){return o}});var e=a(82001),n=a(9279),s=a(2593);class c{constructor(t,r){this.contractWrapper=t,this.events=r}async getAllHolderBalances(){let t=await this.events.getEvents("Transfer"),r=t.map(t=>t.data),a={};return r.forEach(t=>{let r=t?.from,e=t?.to,c=t?.value;r!==n.d&&(r in a||(a[r]=s.O$.from(0)),a[r]=a[r].sub(c)),e!==n.d&&(e in a||(a[e]=s.O$.from(0)),a[e]=a[e].add(c))}),Promise.all(Object.keys(a).map(async t=>({holder:t,balance:await (0,e.bc)(this.contractWrapper.getProvider(),this.contractWrapper.readContract.address,a[t])})))}}var i=a(58380);a(13550),a(2162),a(64063),a(62822),a(71770),a(54098);class o extends i.S{static contractRoles=e.dB;constructor(t,r,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new e.dm(t,r,s,n,a);super(p,a,i),this.abi=e.e.parse(s||[]),this.metadata=new e.ah(this.contractWrapper,e.dV,this.storage),this.app=new e.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new e.ai(this.contractWrapper,o.contractRoles),this.sales=new e.ak(this.contractWrapper),this.events=new e.aR(this.contractWrapper),this.history=new c(this.contractWrapper,this.events),this.encoder=new e.ag(this.contractWrapper),this.estimator=new e.aQ(this.contractWrapper),this.platformFees=new e.aT(this.contractWrapper),this.interceptor=new e.aS(this.contractWrapper),this.signature=new e.at(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await (0,e.cB)(t))}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,e.bI)("transfer"),n.d);return!t}mint=(0,e.dn)(async t=>this.erc20.mint.prepare(t));mintTo=(0,e.dn)(async(t,r)=>this.erc20.mintTo.prepare(t,r));async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}mintBatchTo=(0,e.dn)(async t=>this.erc20.mintBatchTo.prepare(t));delegateTo=(0,e.dn)(async t=>e.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,e.cB)(t)]}));burn=(0,e.dn)(t=>this.erc20.burn.prepare(t));burnFrom=(0,e.dn)(async(t,r)=>this.erc20.burnFrom.prepare(t,r));async prepare(t,r,a){return e.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);