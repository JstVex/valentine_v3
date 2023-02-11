import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Story.module.css"
import { motion } from 'framer-motion'
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
                className={styles.first_letter}
            >
                <Link href="/letter">
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
                        A Letter for u
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
                            I love u
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
                            Though 'i love u' may seem repetitive, i will keep saying that everyday cuz i love u n i really love u so much my precious eapm lyy. It even grows each day uk cuz i love u more n more everyday n will never stop even after the day i die. *kisses ur precious lips so deeply for a long time*. Thank u for letting me love u so much n for loving me so much as well my precious eapm lyy.
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
                            Letters and words
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
                            One of the most special things i have recieved in my life are ur precious letters babe.I love them so much that i reread them every week or so.Your beautiful handwriting and precious drawings and cute decorations i cant so muchhhhhhh &#62;&#60; I wish i can make beautiful letters like urs so tht i can give u so much babe:&#40;
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