import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Story.module.css"
import { motion } from "framer-motion"
import { BsArrowDown } from "react-icons/bs"

export default function Story() {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,

            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.section
                className={styles.first_bouquet}
            >
                <Link href="/bouquet">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,

                        }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className={styles.back}
                    >
                        Back
                    </motion.div>
                </Link>

                <motion.div
                    className={styles.text}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,

                        }}

                        transition={{ delay: 1, duration: 0.8 }}
                        className={styles.title1}
                    >
                        All the roses for u
                    </motion.div>
                    <div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,

                            }}

                            transition={{ delay: 1.1, duration: 0.8 }}
                            className={styles.title2}
                        >
                            Symbolism
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,

                            }}

                            transition={{ delay: 1.2, duration: 0.8 }}
                            className={styles.text2}
                        >
                            So as u know babe roses became our flowers and i learnt to love not only them but all kinds of flowers cuz of u. Our love is like a rose. It is beautiful, fragrant, romantic, soft and special. If i could, i would give u all the roses in this world to express my infinite love for u ^^
                        </motion.div>
                    </div>

                    <div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,

                            }}

                            transition={{ delay: 1.3, duration: 0.8 }}
                            className={styles.title2}
                        >
                            Appreciation
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,

                            }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className={styles.text2}
                        >
                            I want to thank u so much for giving me so many bouquets which are the most beautiful, special and precious ever. I wish they never wither and i will keep all of them forever babe. I wish i can give u the biggest and most beautiful bouquet of all and make u feel so speciallll babeee, I will for sure and for now i will keep giving u a rose on every of our date :3
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{
                            opacity: 0

                        }}
                        animate={{
                            opacity: 1
                        }}

                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <BsArrowDown className={styles.down_icon} />
                    </motion.div>

                </motion.div>
            </motion.section>
            <section className={styles.second}>
                <Image
                    className={styles.story_start}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
            </section>

        </motion.div>
    )
}