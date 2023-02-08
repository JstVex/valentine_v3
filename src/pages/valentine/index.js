import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'

export default function Valentine() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <div className={styles.back}>
                    Back
                </div>
            </Link>
            <Image
                className={styles.image}
                src="https://images.unsplash.com/photo-1612472844996-40238aff6eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Valentine"
                width={1000}
                height={1000}
                priority
            />
            <Link href='/valentine/story'>
                <div className={styles.text}>
                    For my valentine
                </div>
            </Link>

        </div>


    )
}