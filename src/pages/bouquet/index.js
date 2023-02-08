import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'

export default function Bouquet() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <div className={styles.back}>
                    Back
                </div>
            </Link>
            <Image
                className={styles.image}
                src="https://images.unsplash.com/photo-1622658641558-1bf6a846adeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Bouquet"
                width={1000}
                height={1000}
                priority
            />
            <Link href='/bouquet/story'>
                <div className={styles.text}>
                    The Bouquet
                </div>
            </Link>
        </div>


    )
}