import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion';

const IndecScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className={styles.image_track}
        >

            <Link href="/valentine">
                <img
                    className={styles.image}
                    src={images[0]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>


            <Link href={{
                pathname: '/cake',
                // query: coords
            }}
            >
                <img
                    className={styles.image}
                    src={images[1]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>


            <Link href="/bouquet">
                <img
                    className={styles.image}
                    src={images[2]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>

            <Link href="/letter">
                <img
                    className={styles.image}
                    src={images[3]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>

            <Link href="/gloomy">
                <img
                    className={styles.image}
                    src={images[4]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>

            <Link href="/future">
                <img
                    className={styles.image}
                    src={images[5]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>

            <Link href="/universe">
                <img
                    className={styles.image}
                    src={images[6]}
                    alt="Cake"
                // width={1000}
                // height={1000}
                // priority
                />
            </Link>

        </motion.div>
    );
}

export default IndecScreen;