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
                className={styles.first_universe}
            >
                <Link href="/universe">
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
                        Just the two of us
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
                            With you
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
                            When im by myself im so insignificant but when im with u everything becomes meaningful and i feel the happiest and most special ever. I would choose u over anything else cuz ure all my reasons n my reason to live itself baby lyy. Pls be with me forever cuz i only exist with u.
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
                            Our love
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
                            You know my precious eapm lyy our love can outshine any star in this universe and outgrow even the universe itself cuz it is made out of hhll n eapm who loves and cares for each other so much. Thank u for everything my precious eapm lyy and i can't wait for more of our journey tgt n for all upcoming beautiful special priceless memories of us :3
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
                <img
                    className={styles.story_start}
                    src="https://dsm01pap007files.storage.live.com/y4mWaM7YQEXRaA0o2JP4sozgP7lDDtsqVH6iSOHJJgwhylUHmShO8ZtO-zQ5Fk50sm4b0ViB-dSMwRgYzKB1i-41bk5nzzlwW0Bm2PxpWbvvlxppGa4jkNKw1nin0oMPSq8YLuzqwXbfu3usWggWGQNHRIz41wzMnNrLrllkcpZ6PUduTKb22fQawYHufCDgBk3?width=1478&height=887&cropmode=none"
                    alt="A story about two stars"
                    width={1000}
                    height={1000}
                    priority
                />
                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mZm_DXmkxeYY3jYpZrsn-uQRJTyHF1NsktFQCrIGoKrE99--Ky9hKDHUOnRcXTY4Vci2-kIO_WvdGXFFZzrpTEw0037qhNqYFEcRIUEJu6u5pBmwG2E_yo0DP5sPySISvBZTpEvJp7YjWkowkjwEedOetumJ3eOBU3o3_om0-BTi_cYlmyKNDr8q-btp7lnNP?width=1024&height=576&cropmode=none"
                        alt="The big bang"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ the universe goes bang bang ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mhDjqi33_H8tM82HnIxgXwpx1thb1bJX1L7YveMnZ5bw7TRIRxsZ-lI_MqWbDQoCsZMUOhfk-TWhA57A7NMDVrLSZN1ue0i07MTRJWnaNO8niG6PLHUBJrbnEQ0PCq16CBIZGkC0AlJbK916NnOzH3IS70CgHc-UQVApaDPErXNhNOEJ23BFQtKbjNIhroVuu?width=2500&height=1500&cropmode=none"
                        alt="Stars forming"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ countless stars n celestial bodies appear everywhere ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4muC7Gaw9VujAqs-cdIWC8ZtTe9HNfSTrumY1WAce_tIQKfc7CD1G1GSllJwkUuIsTfDiNifSRbZErq3lbhxd6y1Byp2aSqPW_vjjwsRK_rBgHYOyNH5e6l2vTda9RZqD6PE__TDKk5YOLGs7sPDqT8_pBmEQZ_78ILpiH3vRoS5yI82B31XY0q62zr2VRdXyV?width=2500&height=1500&cropmode=none"
                        alt="Us meeting ><"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ two beautiful unique stars met at one time &#40; guess who they r ^^ &#41; ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4m1WDGkp1tayEVp6eNbZoWvma48hW8QyAOmhHcmbnCIMYRxFB-RBCLNlSFk66wjfRM5hDxy598NG19S1omlzkI-jCcOn3Z5gMyclWSPLA_CV3GJhiaMugbPHm86Fpc9Nr7w82EfRqDt_MQY7lpFsTPb8G0QzBysDiytpsChMiNvIs8b5SntNuoXhlNqNofiBhj?width=2500&height=1500&cropmode=none"
                        alt="Us combining tgt"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ they combined n started creating the most beautiful thing ever &#62;&#60; ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mWE7XkzxjuF9yK3Gc_xcznQUpvTJiugJuBJZeAJ3da8R022_XGQE3mOLhWZIXKb5d2nc_9MrrEp0bd-w8PLndaRbxr9nmJE1pvN1CUYAoGSE-ByDToPsNLtDaOl8fQ5-fl6dFX3pB1kEvVk7Gx1A4KyZgSNGs2ZBeWjZeUzVo7uQo3lAiZXJCY2xsxjE0DDz4?width=2500&height=1500&cropmode=none"
                        alt="Our love is formed ^^"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ The most beautiful, the biggest, the brightest thing ever is formed ^^  ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mf_TOajadhZmhTvBiuy1s21ozBXzpKZb6POAgCd1JVI37w7QHKErXFiVxPcgd4b7gxsUNJ-A61G-tedMl8zNsYXslTi9Z8ivbTXp7A0IG5BEY6gtO5DKLJcsWuY-1KLIG1qH62mqLMVc5kuGbENQjStQ7KpPCC1cMefPC0Vp81dAS3bV08dcQRCEj36PvEjXf?width=2500&height=1500&cropmode=none"
                        alt="Our love :3"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ yes ure right my boo boo it is indeed our love :33 ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <img
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mdZugkhq5sUmEXgDuyfeKG7Nrvo_tZP2KElaxxNjBwOHNhrhrMssG8MizlR5rjDtJwixQOMruBgnhonqF2w-P6ORYTp1HC8gNoD73SynKn2TBR47Odr0nwuLo8Chzs__Fjd04_XkJdPDW0N2kxe2_GGemHAXDJLzpI5btMcgGWg2gpt0BqkHbtZUwqM0lAA8R?width=2500&height=1500&cropmode=none"
                        alt="Happy valentine's day again baby boo boo lyy yy UwU"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ hope u like it n hope this makes u special my precious valentine lyy :333 ~
                    </div>
                </div>
            </section>

        </motion.div>
    )
}