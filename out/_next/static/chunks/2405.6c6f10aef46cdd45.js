"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2405],{31415:function(t,r,e){e.d(r,{S:function(){return StandardErc721}});var a=e(47454);let StandardErc721=class StandardErc721{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc721=new a.aD(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc721.getAll(t)}async getOwned(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwned(t)}async getOwnedTokenIds(t){return t&&(t=await (0,a.cL)(t)),this.erc721.getOwnedTokenIds(t)}async totalSupply(){return this.erc721.totalCirculatingSupply()}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}transfer=(0,a.dx)(async(t,r)=>this.erc721.transfer.prepare(t,r));setApprovalForAll=(0,a.dx)(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r));setApprovalForToken=(0,a.dx)(async(t,r)=>a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await (0,a.cL)(t),r]}))}},72405:function(t,r,e){e.r(r),e.d(r,{NFTCollection:function(){return NFTCollection}});var a=e(9279),n=e(47454),s=e(31415);e(13550),e(64063),e(2162),e(62822),e(54098),e(71770);let NFTCollection=class NFTCollection extends s.S{static contractRoles=n.dK;constructor(t,r,e){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.dw(t,r,s,a,e);super(i,e,c),this.abi=n.e.parse(s||[]),this.metadata=new n.ah(this.contractWrapper,n.dV,this.storage),this.app=new n.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new n.ai(this.contractWrapper,NFTCollection.contractRoles),this.royalties=new n.aj(this.contractWrapper,this.metadata),this.sales=new n.ak(this.contractWrapper),this.encoder=new n.ag(this.contractWrapper),this.estimator=new n.aQ(this.contractWrapper),this.events=new n.aR(this.contractWrapper),this.platformFees=new n.aT(this.contractWrapper),this.interceptor=new n.aS(this.contractWrapper),this.signature=new n.aE(this.contractWrapper,this.storage),this.owner=new n.aV(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){let t=await this.contractWrapper.read("hasRole",[(0,n.bI)("transfer"),a.d]);return!t}mint=(0,n.dx)(async t=>this.erc721.mint.prepare(t));mintTo=(0,n.dx)(async(t,r)=>this.erc721.mintTo.prepare(t,r));async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}mintBatch=(0,n.dx)(async t=>this.erc721.mintBatch.prepare(t));mintBatchTo=(0,n.dx)(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r));burn=(0,n.dx)(t=>this.erc721.burn.prepare(t));async prepare(t,r,e){return n.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}}}]);