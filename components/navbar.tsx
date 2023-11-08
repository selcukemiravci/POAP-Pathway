import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const basePath = '/POAP-Pathway'; // Define the basePath directly

export default function Navbar() {
    const address = useAddress();

    return (
        <div className={styles.navbar}>
            <Link href="/">
                <div className={styles.navIcon}>
                    <Image src={`${basePath}/claim-icon.png`} alt="Claim" width={46} height={46}/>
                    <p className={styles.navIconLabel}>Claim</p>
                </div>
            </Link>
            <Link href="/nfts">
                <div className={styles.navIcon}>
                    <Image src={`${basePath}/nft-icon.png`} alt="NFTs" width={40} height={40}/>
                    <p className={styles.navIconLabel}>NFTs</p>
                </div>
            </Link>
            <div className={styles.navIcon}>
            {address && (
                <ConnectWallet
                    btnTitle="Login"
                    detailsBtn={() => (
                        <div>
                            <Image src={`${basePath}/profile-icon.png`} alt="Profile" width={40} height={40}/>
                            <p className={styles.navIconLabel}>Profile</p>
                        </div>
                    )}
                />
            )}
            </div>
        </div>
    )
}