import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Bouquet() {

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
                    src="https://images.unsplash.com/photo-1550676049-420da94eaeee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJvc2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
                    alt="Flowers"
                />
            </motion.div>

            <Link href='/bouquet/story'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.text}
                >
                    Roses and the scent of our love
                </motion.div>
            </Link>

        </motion.div>


    )
}