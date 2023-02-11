import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Future() {

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
                    src="https://images.unsplash.com/photo-1549041050-386c1c99d655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80"
                    alt="future"
                />
            </motion.div>

            <Link href='/future/story'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.text}
                >
                    The Future Lying Ahead of Us
                </motion.div>
            </Link>

        </motion.div>


    )
}