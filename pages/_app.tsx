import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  rainbowWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    activeChain={{
      // === Required information for connecting to the network === \\
      chainId: 1440002, // Chain ID of the network
      // Array of RPC URLs to use
      rpc: ["rpc-evm-sidechain.xrpl.org"],

      // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      nativeCurrency: {
        decimals: 18,
        name: "XRPL EVM Sidechain",
        symbol: "xrpl",
      },
      shortName: "xprlevm", // Display value shown in the wallet UI
      slug: "xprlevm", // Display value shown in the wallet UI
      testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      chain: "XRPL EVM Sidechain", // Name of the network
      name: "XRPL EVM Sidechain Testnet", // Name of the network
    }}
      clientId= "79e84b40b40d9bfb8d979db500f698b8"
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
        embeddedWallet(),
        rainbowWallet(),
      ]}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}

export default MyApp;

// {{
//   // === Required information for connecting to the network === \\
//   chainId: 1440002, // Chain ID of the network
//   // Array of RPC URLs to use
//   rpc: ["rpc-evm-sidechain.xrpl.org "],

//   // === Information for adding the network to your wallet (how it will appear for first time users) === \\
//   // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
//   nativeCurrency: {
//     decimals: 18,
//     name: "XRPL EVM Sidechain",
//     symbol: "XRP",
//   },
//   shortName: "XRP", // Display value shown in the wallet UI
//   slug: "xrp", // Display value shown in the wallet UI
//   testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
//   chain: "XRPL", // Name of the network
//   name: "XRPL EVM Sidechain", // Name of the network
// }}
