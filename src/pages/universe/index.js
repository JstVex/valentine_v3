import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Universe() {

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
                    src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                    alt="universe"
                />
            </motion.div>

            <Link href='/universe/story'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.text}
                >
                    {/* The Universe and All Its Stars */}
                    Love that exceeds the universe itself
                </motion.div>
            </Link>

        </motion.div>


    )
}