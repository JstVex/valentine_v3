import styles from '../../styles/Image.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Valentine() {

    return (
        <>
            <Head>
                <title>For my valentine ^^</title>
                <meta name="description" content="For my valentine" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://dsm01pap007files.storage.live.com/y4mHZtE5HnE0s-QUIig7sj_5iKInYOedG-nWgma1L_3FbVidkRZIXFOPsFBcr7_sQ7r0uSn763-DeLuHr95hE5dYNPg-xUofvOAFSDBjZnZBUwMldsCaZSQrnNQvai2F_o78-erOK7xLKN3PnBeRCEOtHLvQbSTVdqm0LTnOTZRqMTjfCpr4XJ5E1jZ7csY2X9p?width=926&height=1070&cropmode=none" />
            </Head>
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
                        alt="Valentine"
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
        </>
    )
}