// import Image from "next/image"
// import Link from "next/link"
// import styles from "../../styles/Story.module.css"
// import { motion } from "framer-motion"
// import { BsArrowDown } from "react-icons/bs"

import Head from "next/head"
import dynamic from 'next/dynamic';

const DynamicBouquet = dynamic(() => import('../../../components/StoryBouquetScreen'))

export default function Story() {
    return (
        <>
            <Head>
                <title>Roses ^^</title>
                <meta name="description" content="Story of roses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>
            <DynamicBouquet />
        </>
        // <motion.div
        //     initial={{
        //         opacity: 0,
        //     }}
        //     animate={{
        //         opacity: 1,

        //     }}
        //     exit={{ opacity: 0 }}
        //     transition={{ duration: 0.5 }}
        // >
        //     <motion.section
        //         className={styles.first_bouquet}
        //     >
        //         <Link href="/bouquet">
        //             <motion.div
        //                 initial={{
        //                     opacity: 0,
        //                 }}
        //                 animate={{
        //                     opacity: 1,

        //                 }}
        //                 transition={{ delay: 1, duration: 0.8 }}
        //                 className={styles.back}
        //             >
        //                 Back
        //             </motion.div>
        //         </Link>

        //         <motion.div
        //             className={styles.text}
        //         >
        //             <motion.div
        //                 initial={{
        //                     opacity: 0,
        //                 }}
        //                 animate={{
        //                     opacity: 1,

        //                 }}

        //                 transition={{ delay: 1, duration: 0.8 }}
        //                 className={styles.title1}
        //             >
        //                 All the roses for u
        //             </motion.div>
        //             <div>
        //                 <motion.div
        //                     initial={{
        //                         opacity: 0,
        //                     }}
        //                     animate={{
        //                         opacity: 1,

        //                     }}

        //                     transition={{ delay: 1.1, duration: 0.8 }}
        //                     className={styles.title2}
        //                 >
        //                     Symbolism
        //                 </motion.div>
        //                 <motion.div
        //                     initial={{
        //                         opacity: 0,
        //                     }}
        //                     animate={{
        //                         opacity: 1,

        //                     }}

        //                     transition={{ delay: 1.2, duration: 0.8 }}
        //                     className={styles.text2}
        //                 >
        //                     So as u know babe roses became our flowers and i learnt to love not only them but all kinds of flowers cuz of u. Our love is like a rose. It is beautiful, fragrant, romantic, soft and special. If i could, i would give u all the roses in this world to express my infinite love for u ^^
        //                 </motion.div>
        //             </div>

        //             <div>
        //                 <motion.div
        //                     initial={{
        //                         opacity: 0,
        //                     }}
        //                     animate={{
        //                         opacity: 1,

        //                     }}

        //                     transition={{ delay: 1.3, duration: 0.8 }}
        //                     className={styles.title2}
        //                 >
        //                     Appreciation
        //                 </motion.div>
        //                 <motion.div
        //                     initial={{
        //                         opacity: 0,
        //                     }}
        //                     animate={{
        //                         opacity: 1,

        //                     }}
        //                     transition={{ delay: 1.4, duration: 0.8 }}
        //                     className={styles.text2}
        //                 >
        //                     I want to thank u so much for giving me so many bouquets which are the most beautiful, special and precious ever. I wish they never wither and i will keep all of them forever babe. I wish i can give u the biggest and most beautiful bouquet of all and make u feel so speciallll babeee, I will for sure and for now i will keep giving u a rose on every of our date :3
        //                 </motion.div>
        //             </div>

        //             <motion.div
        //                 initial={{
        //                     opacity: 0

        //                 }}
        //                 animate={{
        //                     opacity: 1
        //                 }}

        //                 transition={{ delay: 1.5, duration: 0.8 }}
        //             >
        //                 <BsArrowDown className={styles.down_icon} />
        //             </motion.div>

        //         </motion.div>
        //     </motion.section>
        //     <section className={styles.second}>
        //         <Image
        //             className={styles.story_start}
        //             src="https://dsm01pap007files.storage.live.com/y4mbYveD63brjO0sp35bKen__7uKC3Hw11_oSCQcz1ABCVS0GR4a2l5Z27g4WiClkNPpPZyv8WjVSyFcCcNc-Yi-vLOnb96I6MXXXV6TJYkA_lzqSAHv3OWFIPTNt94ELSAnCltf5FNo6n-LDOhWQZWB4rGtNW2hAA27n4b9_yORpNjIddssWv0cP-8P1_cHGhM?width=1600&height=960&cropmode=none"
        //             alt="Us and flowers"
        //             width={1000}
        //             height={1000}
        //             priority
        //         />
        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4mfjWpPO8-J192Xn9zSKpFx8yQ8-WCj8uwFiXsfYsh1zTfnac_6rNtAvPpNiwjLYb0Q-_J2Cb8PVx0VS5WLwBHqhR7Urxt6JB6bh78ls_JnpwvjrNxZjks06cr9jeMGyIl3KE45fzDmCmE5w-49qdv-urpPtI6YCfwPC0gJ9MRsraWiWzSG1od-dpuR6LpmJLo?width=2500&height=1500&cropmode=none"
        //                 alt="Koko with all ur bouquets"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ meo being veri happi with all of ur precious beautiful bouquets &#62;&#60; ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4mXd849mnG_n_FQgmBSv6d5P2RTdR_fA4BAb6Ut54nFJKx2MQ6F3j1AGuo3AmR3FFxvdSkKkpYqGhK0kDHCoOFCgrj9yAPOglMTbi0w2nxLIx13bvDwCMXzIyB9pIDFjYd5CDl8AdST2hU-Wptrfq_Doiq5FjF5yIuKkWF5P4x-l3PsZz6IJmSdaXJAkJEP0yt?width=2500&height=1500&cropmode=none"
        //                 alt="Koko giving u u lyy a rose"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ koko to u u lyy on every of our date ^^ ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4muWATV9vVaZhae1etU440Mk8B8MN8YbPWoNntvOWmuWYm9Bs86OjHYY0OrRcawSvkhu18JNu7hDskXCrrQPV7My_O9_iX29iHT6gFFEVf49P44Wn0mAeDJuqynG2_PVcQHhWysAGrZi57o59bxKqt554Cf6cdOaizbLdXa0ddYNo_2HphqKl6IPNoLUuXpmS6?width=2500&height=1500&cropmode=none"
        //                 alt="Us in a flower field"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ us in a field of flowers :3 ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4ms287IL67zVtN1ATaeapvVPUSQ7ssF3FQE6kWCCqBRcJqsszKNZS08EpQpubFWzKKbJDK9S-zolAz17S-UYRbxlNFjTs06a5V2aiyd70RpL37LZiVnlZL-LEdbdyZgh4MBZPm2Vvi-yMAIT8y2J5B1UwGXF5ebvG7wl-48LjOZzp-TELVR__41jyHmXaqGm7M?width=370&height=320&cropmode=none"
        //                 alt="Our chibi couple"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ meo gibing u u lyy a bouquet ^^ ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4maTSlT13VL6PoLgG3jkC1908Yrc_UznV_OmOiS6gzVG0DEJpe3YxmHLDnXp6Dzyg5Ph_UESGMJNamP6aH6b8Ab5Q6Pkw9jvHPVbDno7-rfcVo1uqVyASzv-PJlpWOd-EfRwhQjWt9RVbaX05mzH-mKmTTcpvhA0pPY4pqBawGt_qqdHv9aHJrC11aH5zHNvjf?width=718&height=958&cropmode=none"
        //                 alt="Sth sexy hehe"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ im so sorry for this one babe &#128557; ~
        //             </div>
        //         </div>
        //     </section>

        // </motion.div>
    )
}