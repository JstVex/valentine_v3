import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Story.module.css"
import { motion } from 'framer-motion'
import { BsArrowDown } from "react-icons/bs"

const StoryCake = () => {
    return (
        <motion.div
            className={styles.parent}
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
                        Making our love
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
                            The most loving, understanding, romantic, special, matching couple in this entire world ^^.
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
                    src="https://dsm01pap007files.storage.live.com/y4m2-wSto1axMksIKjly5qOI_wqfyTxr1cjyY9STzpCAkT0bx4Urua-5yl2b2XFDSiNtXCBB05xt07tKO6wWn11CaB-JMioqbq6w2Ys-Lj9Wym2ciF3_9GPzqM5hzgKvNxJzqCO3Ew7ChIFCJhpaLWaRizpb73dnFkGm3h9rn0ZGJW2W_zLzakkMz4hmwl9lM76?width=1522&height=913&cropmode=none"
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
    );
}

export default StoryCake;