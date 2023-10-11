"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2812],{99645:function(t,r,a){a.d(r,{S:function(){return n}});var e=a(66095);class n{get chainId(){return this._chainId}constructor(t,r,a){this.contractWrapper=t,this.storage=r,this.erc20=new e.au(this.contractWrapper,this.storage,a),this._chainId=a}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}transfer=(0,e.dx)(async(t,r)=>this.erc20.transfer.prepare(t,r));transferFrom=(0,e.dx)(async(t,r,a)=>this.erc20.transferFrom.prepare(t,r,a));setAllowance=(0,e.dx)(async(t,r)=>this.erc20.setAllowance.prepare(t,r));transferBatch=(0,e.dx)(async t=>this.erc20.transferBatch.prepare(t))}},12812:function(t,r,a){a.r(r),a.d(r,{Token:function(){return o}});var e=a(9279),n=a(66095),s=a(2593);class c{constructor(t,r){this.contractWrapper=t,this.events=r}async getAllHolderBalances(){let t=await this.events.getEvents("Transfer"),r=t.map(t=>t.data),a={};return r.forEach(t=>{let r=t?.from,n=t?.to,c=t?.value;r!==e.d&&(r in a||(a[r]=s.O$.from(0)),a[r]=a[r].sub(c)),n!==e.d&&(n in a||(a[n]=s.O$.from(0)),a[n]=a[n].add(c))}),Promise.all(Object.keys(a).map(async t=>({holder:t,balance:await (0,n.bc)(this.contractWrapper.getProvider(),this.contractWrapper.address,a[t])})))}}var i=a(99645);a(64063),a(2162),a(13550),a(30643),a(65007);class o extends i.S{static contractRoles=n.dO;constructor(t,r,a){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.dw(t,r,s,e,a);super(p,a,i),this.abi=n.e.parse(s||[]),this.metadata=new n.ah(this.contractWrapper,n.e7,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,o.contractRoles),this.sales=new n.ak(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.history=new c(this.contractWrapper,this.events),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.platformFees=new n.aT(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper),this.signature=new n.at(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[t]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await (0,n.cL)(t)])}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,n.bI)("transfer"),e.d]);return!t}mint=(0,n.dx)(async t=>this.erc20.mint.prepare(t));mintTo=(0,n.dx)(async(t,r)=>this.erc20.mintTo.prepare(t,r));async getMintTransaction(t,r){return this.erc20.getMintTransaction(t,r)}mintBatchTo=(0,n.dx)(async t=>this.erc20.mintBatchTo.prepare(t));delegateTo=(0,n.dx)(async t=>n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,n.cL)(t)]}));burn=(0,n.dx)(t=>this.erc20.burn.prepare(t));burnFrom=(0,n.dx)(async(t,r)=>this.erc20.burnFrom.prepare(t,r));async prepare(t,r,a){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}}}}]);