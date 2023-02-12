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
                className={styles.first_future}
            >
                <Link href="/future">
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
                        Our future together
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
                            This year is the start of our beautiful fun journey together to finally reach all of our dreams n goals of getting the hhlly n eapmy rich successful lyfe tgt baeb ^^. We gonna try hard and prepare before we go to amerikha and try even harder when we get there as well. We will become our highest version n achieve all of them in no time :33
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
                            Our dream lyfe
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
                            We gonna be so successful n rich babe n ure gonna become the greatest architek ever with all ur beautiful cool eapmy designs n buildings &#62;&#60;. We will get a large penthouse in NYC n also a beautiful modern house which u design n we gonna put so many cool n cute stuff in there ^^. Then we gonan raise our kids in the netherlands and enjoy a beautiful fun peaceful rich hhlly n eapmy lyfe tgt babeeeeeee :3333
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
                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mA3MecwRXCffgkwj_Jc5S2Euz-28vvqLZbNzAsdyOgw3XRKYA2D-pIs8rzZX5ZDW3q6zV1U2ErLKHOReJq_oYsqlpq7VxY_n2Yq3uhMvOZ-u3s90eMVI9CGlwns17aeS4CX2Yr3GBcoqoKJDRijCEaS-seGN0mKyiMEa1VDR4KhkJqGtuhpanTWmir_2hxPW4?width=2500&height=1500&cropmode=none"
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
                        src="https://dsm01pap007files.storage.live.com/y4mWEGeoR2H2au75LEjsWRm-2hUaj05Y-JxUNpSD6nFvuTWV0jgKbubfw58VEho32iwEWRGfJ_f6ecvTxb0FCp8hZQngzqcVQmgkFwl2Clhd48mUX3gnpPB59Y-1SKa2NvEixc_3YU_7327BP1f_b8CaJmKmfh3YTaCvJ-EheEYQ74BPVhxqxQTDFu8FCpq_hwE?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ struggling to find the best n suitable recipe ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mLgRAwFiuBpz60vr35gFstMTg9148HBsWwf0CjUAA1CXEFrniPln8hxlzjrZf35gw5b4xB2-2nvsz8b_w4pYWrx_hCSPqizSDWwzTqABGh4yx3MRlQ8G-iLnlbLhtwUOfY1i2AOBOfMiRusTt9U0U8i3hSiEQV6-8-RIS22fXl79XiEuTSrbzFa5oeCjZdfOM?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ going with cheesecake cuz thats all im able to:&#40; ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mfQUlWjq-qubj9-hWs1LD98tgWhGDU7Cp44nchDNk7uAfLuncU--W_aolkh1bSg-ER24ahb4bjmjeod6OOGYjy41MUCju71oHfxlITLc6KGOFkmArS9wlntjoAxGeVAJSM1EVurX1v5dmryJ7QfBzUpEYu6JQlz10aTNtzQskKXkBZ0QkpLNmMqmad-NRmX8W?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ whisking cheesecake &#62;&#62;&#62;&#62;&#62;&#62;&#62; hitting gym ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mtnkIBvCJ_PeGIbH1J332fUNBohkKseeQUAaV9maz0Wzc5GdXC01pdma8QlZ4WH8K-GktrajKJEPL6iRmAtUJFJ8EXRAydHHelTT6Tit4dy6Ts45kqT5ytrtgozLFsN64Soz5ZT0g0duviO9XYrz6Mpb7qn-YR4mKv6eTUK8Nx4wg4mqokPgInPxqCuuH1xbg?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ most nervous-able time to see how it turns out ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mUL6XFa1kJvsGesuROz54r35qRNa4dw8VCA_AtiU1634DMaCXA0-1y1OhShyii_-GCRkh8x6vrhgXK1gb2tKtPQVgDlCC6jyXUnVOFl0Z_lAyVi6agTfm5ed-I9EfbEEwSWKlF7qpcKz3Q7C7l4Qg8heem0adbrPBD_NytpEum_HxlkubJDvwebWsG7gk4hON?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ cheesecake for my precious eapm lyy &#62;&#60; its simple but hope u like it ^^ ~
                    </div>
                </div>
            </section>

        </motion.div>
    )
}