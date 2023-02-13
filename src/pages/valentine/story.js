import Link from "next/link"
import styles from "../../styles/Story.module.css"
import { motion } from "framer-motion"
import Head from "next/head"

export default function Story() {
    return (
        <>
            <Head>
                <title>For my valentine ^^</title>
                <meta name="description" content="For my valentine" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://dsm01pap007files.storage.live.com/y4mHZtE5HnE0s-QUIig7sj_5iKInYOedG-nWgma1L_3FbVidkRZIXFOPsFBcr7_sQ7r0uSn763-DeLuHr95hE5dYNPg-xUofvOAFSDBjZnZBUwMldsCaZSQrnNQvai2F_o78-erOK7xLKN3PnBeRCEOtHLvQbSTVdqm0LTnOTZRqMTjfCpr4XJ5E1jZ7csY2X9p?width=926&height=1070&cropmode=none" />
            </Head>
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
                    </motion.div>
                </motion.section>
            </motion.div>
        </>
    )
}