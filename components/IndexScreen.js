import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion';

const IndecScreen = () => {

    const transition = { duration: 0.5 }

    const images = ["https://images.unsplash.com/photo-1612015888543-a4057b56ac17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHZhbGVudGluZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60", "https://images.unsplash.com/photo-1626197219310-8be29c1316be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1444394668777-6fa6de8b8356?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxyb3NlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=1800&q=60", "https://images.unsplash.com/photo-1587052755556-89808205c097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1444837881208-4d46d5c1f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2545&q=80", "https://images.unsplash.com/photo-1549041050-386c1c99d655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80", "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"];

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