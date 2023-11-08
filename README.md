# 🌐 POAP Pathway: The PWA NFT Gateway on XRPL EVM

### Table of Contents
- [Overview](#overview)
- [Background](#background)
- [Objectives](#objectives)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Benefits](#benefits)

---

## 🌐 Overview

As the Web3.0 ecosystem continues to evolve and gain traction, Progressive Web Apps (PWAs) are emerging as a significant player in this new digital frontier. POAP Pathway aims to be a cutting-edge PWA app integrating Thirdweb and the XRPL EVM-side chain. This integration will offer users a seamless sign-in experience using magic-link/web2 and an enriched NFT claiming process.

---

## 📖 Background

PWAs are web applications that operate like regular websites but boast of functionalities typically reserved for native mobile apps, such as offline functionality, push notifications, and device hardware access. Their rising popularity in the Web3.0 ecosystem stems from their ability to bridge the gap between web and native applications, providing a unified user experience.

Platforms like Friend.tech have paved the way, demonstrating the untapped potential of decentralized social networks in the Web3.0 realm. Their innovative model, where one can invest in a friend's social network and tokenize their credibility, hints at the transformative nature of Web3.0.


---

## 🎯 Objectives

- Craft a PWA POAP app that elevates the user experience in the Web3.0 ecosystem.
- Seamlessly merge Thirdweb and XRPL EVM-side chain functionalities to ensure a smooth sign-in and NFT claim journey.
- Design an intuitive interface, enabling users to effortlessly navigate and engage with the platform.

---

## 📖 How It Works

To run this project, you will need to create a clientId and an ERC 1155 contract on XRPL EVM Sidechain which can be created through [thirdweb](https://thirdweb.com/dashboard/contracts/deploy). 

When you are creating the contract make sure to use a custom network as the current XRPL EVM Sidechain on thirdweb is not upto date. 

Use this information to create the custom network for the XRPL EVM Sidechain:

```
Network Name: XRPL EVM Sidechain
New RPC URL: rpc-evm-sidechain.xrpl.org 
Chain ID: 1440002
Currency Symbol: XRP
Block Explorer: evm-sidechain.xrpl.org
```

Once contract is created you will need a clientId from [https://thirdweb.com/create-api-key](thirdweb) which you can use in a .env file or call directly in the `pages/App.tsx`. Once the API keys are created, make sure to add your own allowed domains. After all required dependencies are installed, the PWA application can be ran by executing `yarn dev`. Once the server is started navigate to `http://localhost:3000/POAP-Pathway` to see live changes and test.

⚠️ Note: The main branch is published on goerli contract for the full functionality purposes as the production build of XRPL EVM Sidechain has errors due to custom network by thirdweb. If you would like to test out the app on XRPL EVM Sidechain firmly navigate to the *dev branch* and run the server by executing *yarn dev* and navigate to http://localhost:3000 to see live changes and test the app.
---

Environment Variables
To run this project, you will need to create a clientId and set it in an .env.local file. Check the .env.example file for the required variable name.

You can get a thridweb clientId from `https://thirdweb.com/create-api-key`. Please, make sure to enable the Embedded Wallets service.

## 🛠 Tech Stack

- **PWA Frameworks**: Utilizing premier PWA frameworks such as React or Angular to ensure a responsive and engaging design.
- **JavaScript**: The backbone scripting language, instrumental in crafting dynamic content and managing client-side scripting.
- **Solidity**: The go-to language for drafting smart contracts on the XRPL EVM-side chain.
- **Thirdweb**: An indispensable tool for NFT creation and management.
- **XRPL EVM-side Chain**: A key player, facilitating seamless NFT transactions within the XRPL ecosystem.
- **Magic-Link/Web2**: Ensures a secure and straightforward sign-in process.
- **IPFS**: The chosen platform for decentralized storage of NFT data.

---

## 🌟 Benefits

- **Universal Access**: Embrace the freedom of a PWA, accessible across a spectrum of devices, from mobile to desktop, sans the need for dedicated app stores.
- **Seamless Experience**: With the integration of Thirdweb and XRPL EVM-side chain, users are guaranteed a smooth NFT transaction journey.
- **Future of Web**: By aligning with Web3.0 trends, this app stands at the forefront of the digital revolution, offering users a snapshot of the decentralized future.

