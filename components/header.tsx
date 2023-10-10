import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Header() {
    return(
        <div className={styles.header}>
            <Image src={"/app-icon.png"} alt="" height={48} width={48}/>
            <p>Thirdweb PWA Template</p>
        </div>
    )
};