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
                className={styles.first_cake}
            >
                <Link href="/cake">
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
                {/* <Image
                    className={styles.image}
                    src="https://dsm01pap007files.storage.live.com/y4m7YBS3wn0lDqixDUcMbKteME5QEq6mw8E4esSI3AHltht4ln2FTI4RNjX0sHakg1iCdqkLrxosf9SPwTGAyIsg_vAxqnYmu1LMVQGpzbO4yaW11yPYhga5kkas5ANey9GGDrupy7hQhRMf_PHoFS_40RIpisywp6X2pC7WEzD5ytA1n-0PBaxfk2GfXEuWzIi?width=960&height=1280&cropmode=none"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                /> */}
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
                        Making a cake for u
                    </motion.div>
                    <div className={styles.wrap}>
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
                            Ingredients
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
                            Two teaspoons of care and dedication, three cups of strong trust, respect, romance and appreciation, inifnite amount of hugs and kisses and last but not the least our hearts combined into one.
                        </motion.div>
                    </div>

                    <div className={styles.wrap}>
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
                            Steps
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
                            Forming a close friendship for years and turning it into a relationship. Take out any struggle and negativity that forms along the way. Mix with above ingredients and wait for one year and nine months.
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

                            transition={{ delay: 1.5, duration: 0.8 }}
                            className={styles.title2}
                        >
                            Result
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,

                            }}

                            transition={{ delay: 1.6, duration: 0.8 }}
                            className={styles.text2}
                        >
                            The most loving, understanding, romantic, special, matching couple in this entire world.
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{
                            opacity: 0

                        }}
                        animate={{
                            opacity: 1
                        }}

                        transition={{ delay: 1.7, duration: 0.8 }}
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
                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mqJ_QlXxFxF8t887pMQsm7tl6udD3PX73mB3aVQtqbyai2TgK-Y4ySv_s65M9hUWT01rxpkVw9Hnk-rO3IARtYY-gSR5c7qtRggr8Fefp8a2YN6iK_gRdJk1StwXR2mAkvIp2GpkKRcXK2ehUV6B_jHZgjGtdvXok3v1-G2I5OW-3TuuYZxfefIdoOC17TDFT?width=2200&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ ur chef bf thinking he is capable of baking cakes ~
                    </div>
                </div>

            </section>

        </motion.div>
    )
}