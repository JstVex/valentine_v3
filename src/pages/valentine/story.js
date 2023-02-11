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
                className={styles.first_valentine}
            >
                <Link href="/valentine">
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
                        Happy Valentine's Day ^^
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
                            This year
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
                            My precious eapm lyy thank u so much for being my valentine n for being the best valentine anyone could hv for tdy &#62;&#60; I thought of giving u like the year before but it would be like tht again n it will be hard since bro's gf is not here:&#40;. So i made this for u ^^. I hope u like it n hope this can make u feel so special my boo boo lyy :33
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
                            Forever more
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
                            Pls be my valentine in every upcoming year and pls be mine every single day as well. Thank u for loving me so much like no one else can, for always making me so special, lucky n happy, for always being the most caring n loving ever, for always being the best n for everything my precious eapm lyy ^^. Again happy valentine's day boo boo lyy yy &#62;&#60;
                        </motion.div>
                    </div>

                    {/* <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,

                        }}

                        transition={{ delay: 1.5, duration: 0.8 }}
                        className={styles.scroll_down}
                    >
                        scroll down
                    </motion.div> */}

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