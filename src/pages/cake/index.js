import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'

export default function Cake() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <div className={styles.back}>
                    Back
                </div>
            </Link>
            <Image
                className={styles.image}
                src="https://images.unsplash.com/photo-1626197219310-8be29c1316be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Cake"
                width={1000}
                height={1000}
                priority
            />
            <Link href='/cake/story'>
                <div className={styles.text}>
                    The Cake
                </div>
            </Link>

        </div>


    )
}