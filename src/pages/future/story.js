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
                    src="https://dsm01pap007files.storage.live.com/y4m2GlVQ8jnL1RJL3eATShcB7nkswdrp7jJsaz1TnoV9kG-jhFG_ycEK7FVuECqk1jqeDC8v0TozMT71fRcGIfSuzhOIyrd9naTiriR4GzPq3Ih_lxa2VyaQmKpeFIOf9iSu-QQh80ytbTQIizopGdhXc7Uu7btddAx6moXrSovmI_wRa1Ar16mpCWGyexjBwtp?width=1478&height=887&cropmode=none"
                    alt="Our future tgt"
                    width={1000}
                    height={1000}
                    priority
                />
                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mAEiNlftOuNdDfxbtzCxlZfms3reqEnWqeAntvWW7sp19aVhhbjSqx-bPIYoxxYuSAYWNfcsEHoe-xJwwDiHdQqaqyGOnAMIjYZbbCCj-XwhqPKKFEeGUN-mdzcfBxlMEnJU8iWHTes0DfdADIrlDfrRFj8eo4rxLWLRK3-VZc6qnfjLv6L_WrSSWg5F823N2?width=2500&height=1500&cropmode=none"
                        alt="Going to la"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ us about to fly tgt to la &#62;&#60; ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mLJTJaLplL7R1MsSZYCnqMucoSXfgf-K40sYQ9hFk5h4wY90BDZVL7fJ0BHKXCrCkWYE7fUcQsNadBr8c8SxhVmKyHxpKV0IL9KII6wLe0nekwHQGG5381uhQWYA1oDRG2bcaftxGMOEfGYA6s8yQM3Vm2ABnLvTcTxy7P8itoNZYgQJZc8RX6PlVpiNewTws?width=2500&height=1500&cropmode=none"
                        alt="Attenting college tgt"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ koko doh attending pasadena city college tgt :3 ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4msdzWPpQMZhoHzux4hucBRI7ks2x4wYVsiLoer5FL16CJQ2bz5ObSZshii_RQA4aPi6UCqIpFzFvTswZnZUdL2O7OQ4Mn1eD22LfGGA9yka7PX2bT8qkEP_5ETCPsHhYLdSvoTP-7yYqbLgRH1woNpRo707k8YmDLihUuT0hcfJjPK04rGEW55jgtg5_fJigi?width=2500&height=1500&cropmode=none"
                        alt="Making our ideas come true"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ us making all our plans n ideas come true ^^ ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4m_ucTiGgQyk8i6H6QKVQ37o285njiNlXNDJ-xZ-DT313IZ0bEZLqpNkgbe5jDC9ampATrs3OHnXHvQaGnNaUX5_TjlMBFyistZFZVuof5Qdjy2oAgfZXgtQdddWLWcmIDhOsuulvXbL_DYew5sMxCwpo17J-iPqoBmrS3BN1YOEgkO019T9pQ_MXCQizCIug7?width=2500&height=1500&cropmode=none"
                        alt="Cake"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ us graduating from a prestigious uni tgt ^^ ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4moi8FSAeS2ldI1an-DXnMvA2QXQX1GOhuHeSLIE_Vr66F3mYA69S-YyGoTPeotauPGYVRDsh34BgdJiHFRqdCdc16xPCJaS9smJXgw6peOOKns8ynqtR6L2RteYWCWEndFtmup4hPUADkkGT0lAvWqPF4fAptD4X3QElCNZVUi_jK8i-WqcCRONlpwiaokWoz?width=2500&height=1500&cropmode=none"
                        alt="Dream jobs and dream lyfes"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ us with our dream jobs n living in our own apartment in NYC :33 ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image2}
                        src="https://dsm01pap007files.storage.live.com/y4mXhVO9z1DdDWLoXMfO8CGpWUxAoggYn92JxIuJYK2XqIxojc8bXpo5Hkyt-0tRCAPEu8WEjZRIfdjofRvdb9EuuwPrmly8zivTRJMPIPDCiPmpmBN1kn4rGxY3S89kdjQaxdRVuTfCaXTHDV7H99WIaxB4ZX0hlZkbCfKQCg_K88XM_2qQnkAaJiRQbYi-8pu?width=2500&height=1500&cropmode=none"
                        alt="Us in the netherlands with our precious kids"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ us n our precious kids living in our dream house designed by u u lyy in the netherlands :333 ~
                    </div>
                </div>
            </section>

        </motion.div>
    )
}