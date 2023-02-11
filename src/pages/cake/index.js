import Image from 'next/image'
import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Cake() {
    // const router = useRouter();
    // const coords = router.query;
    // console.log(coords.x)
    // console.log(coords.y)

    // let x = coords.x;
    // let y = coords.y;

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
                    // initial={{ width: '270px', height: '370px', x: `${x}px`, y: `${y}px` }}
                    // animate={{ width: '100vw', height: '100vh', transition: transition, x: '0%', y: '0%' }}

                    initial={{ width: '270px', height: '370px' }}
                    animate={{ width: '100vw', height: '100vh', transition: { duration: 1.3 } }}

                    className={styles.image}
                    src="https://images.unsplash.com/photo-1626197219310-8be29c1316be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    alt="Cake"
                // width={270}
                // height={370}
                // priority
                />
            </motion.div>

            <Link href='/cake/story'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
                    className={styles.text}
                >
                    Love and Its Recipes
                </motion.div>
            </Link>

        </motion.div>


    )
}