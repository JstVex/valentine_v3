import Image from "next/image"
import Link from "next/link"
import styles from "../src/styles/Story.module.css"
import { motion } from 'framer-motion'
import { BsArrowDown } from "react-icons/bs"

const StoryLetter = () => {
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
                    src="https://dsm01pap007files.storage.live.com/y4mQCbNd-FaP9Y9vULsN21cTsEUrIsrIs00VNHuV926-pSCPZvxJcGZ2mzxteI2XkeAw6OoWkkyr1diOVpKyUP92U1rYbXQd_OiMDeegpTZSiYjLLyjYMd6WHNvubkwzemHy5x5GD3flGG4h7D-5MEJVl6QVDi_Ceufn27NlquhHTRNzfBxq4DZxztwsfHNtV8A?width=1478&height=887&cropmode=none"
                    alt="Words and stuff"
                    width={1000}
                    height={1000}
                    priority
                />
                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4ms26RoRkpNoQoi0OZZn-EuSo_fxC1usAsC1rMNQrgBGC1AD4xcAbPsKNVKsM6yZaeyYwLA8YdR05pZx2tWqWk9J1-uzjKzJHJAmyMxsUy2jl1iRTn6052uaaFMlBFDxOe2OLbK_UL34fDx3K2z_3F0w0FmLvejT0jBPvL47r1_nZRCYKe-x1YyVSegCLRBCDt?width=2500&height=1500&cropmode=none"
                        alt="Koko so in love with ur precious letters"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ koko so in love with ur precious letters ^^ ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mTlY2-mJJcfGXNzKFFCrtzTM4gNVyiSHfPHJA-hCFtE1Ee-3dEnP-s_ZHS1EQNqbjGSQFHUfHwIPk8cZLqCZdvS6FckWB1R-yDbm0J2OugEKfdvPnSX1ekzIl1KTVsucWg1yaVo1a91jhlS8KtPmmJU-ZajyGcpioIkhtyqWpPnSJURdvR6ufejpc7zdHSjgZ?width=2500&height=1500&cropmode=none"
                        alt="meo making a letter"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ everytime koko tries to make a letter for u ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mGFKjelpiSt0cOVwMe1Py0Zn47PXiUofKE4xl2unxJha1DUYelYoQTQVd_niu2s5eCN6k0LXJWXhs0bBezg0gHld671_UbiPFyQfx4448XOWmZK5Cf-HwENcRnX2CXcJdBpG0XTzCtPiUjZXCBIKDiwr9rJgDdg3ih3elYNRNPvBMDR_RYwkTxYUV8XPTVApS?width=2500&height=1500&cropmode=none"
                        alt="u enjoying my letter ^^"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ but im so glad when u enjoy them &#62;&#60; ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4moM5CD4z0Kg937Jj1Cy1dz2xh5JTybC8axoKmwlI7y7pv5yaTXwQxoo2nH92GumxQu3OpeX4JUoL4goli_fk6iI7tcQv0gayNZ3hPHzxz3WbxMtiu1cu75Hj_EpiTaeS1r0qAN6WqbYKVlGA1S_DDcYNvOT8fMTJbF-ev5wS4vKowgbwhkaPswrXWKH25Hh-H?width=2500&height=1500&cropmode=none"
                        alt="Wishing for u ^^"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ i wish all the best for ur exams my boo boo go ace them alllll ^^ ~
                    </div>
                </div>

                <div className={styles.story_wrap}>
                    <Image
                        className={styles.story_image}
                        src="https://dsm01pap007files.storage.live.com/y4mplh1ziCQl88JVl3R_lTuajr5Zx8k8feS3oqS79jnaoleacs2-WQTv--YsCX1G3gH1U_O9qlUktI_QvNVedLcrmDOnSvmykwa7xrls7eJ1u6Hjr0PJbMtwLI3up1BLBV5UxiPTjs9J8NHQG_hOAbq8DWqu9jX8TAy-P6CvkeAJK7BUmwVzt5Q8V68B0sMReWR?width=1501&height=1277&cropmode=none"
                        alt="Ur precious drawing lyy ><"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <div className={styles.story_text}>
                        ~ till death do us apart :3 ~
                    </div>
                </div>
            </section>

        </motion.div>
    );
}

export default StoryLetter;