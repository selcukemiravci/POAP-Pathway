import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  paperWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Header from "../components/header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";
const walletConfig = paperWallet({
  paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID
});

const smartWalletConfig = smartWallet(walletConfig, {
  factoryAddress: "0xc182827dF66A1fD9ADd9a39130D8dd6074F8F610",
  gasless: true
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}


export default MyApp;
