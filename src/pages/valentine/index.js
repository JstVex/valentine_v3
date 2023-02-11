import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Valentine() {

    return (
        <motion.div className={styles.container} exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <Link href="/">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.back}
                >
                    Back
                </motion.div>
            </Link>
            <motion.div className={styles.img_div} >
                <motion.img
                    initial={{ width: '270px', height: '370px' }}
                    animate={{ width: '100vw', height: '100vh', transition: { duration: 1.3 } }}

                    className={styles.image}
                    src="https://images.unsplash.com/photo-1612015888543-a4057b56ac17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHZhbGVudGluZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60"
                    alt="Cake"
                />
            </motion.div>

            <Link href='/valentine/story'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.text}
                >
                    For my valentine
                </motion.div>
            </Link>

        </motion.div>


    )
}