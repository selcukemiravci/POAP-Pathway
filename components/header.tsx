import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import styles from '../styles/Home.module.css';

const basePath = '/POAP-Pathway'; // Define the basePath directly

export default function Header() {
    return (
        <Link href="/">
            <div className={styles.header}>
                <Image src={`${basePath}/app-icon.png`} alt="App Icon" height={48} width={48}/>
                <p>XRPL POAP Pathway</p>
            </div>
        </Link>
    )
};
