// import Image from "next/image"
// import Link from "next/link"
// import styles from "../../styles/Story.module.css"
// import { motion } from 'framer-motion'
// import { BsArrowDown } from "react-icons/bs"
import Head from "next/head"
import dynamic from 'next/dynamic';

const DynamicGloomy = dynamic(() => import('../../../components/StoryGloomyScreen'))

export default function Story() {
    return (
        <>
            <Head>
                <title>Gloomy</title>
                <meta name="description" content="Story of my mistakes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>
            <DynamicGloomy />
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
        //         className={styles.first_gloomy}
        //     >
        //         <Link href="/gloomy">
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
        //                 Apologising for all my sins
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
        //                     Regrets
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
        //                     My precious eapm lyy let me say sorry again for all the time i make u sad or stressed or mad or cry babe. Im so sorry about that time when i was so gei and didn't care for u. Im so sorry for the all of my mistakes that lead to troubles for u. Im so sorry for all of those times my precious eapm lyy and i regret about them everyday.
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
        //                     Promise
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
        //                     I promise my precious eapm lyy that i will never make u feel any of those ever again. I will try my best to be better n better for u baby lyy uk i will change and do everything for u. I will make sure u don't dream about gei me as well. Double pinky promise boo boo ^^
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
        //             src="https://dsm01pap007files.storage.live.com/y4m5Wq2XYcfYcPJRNNYIJjwu2Gbc1Z23PnvGDxlbxilsurOSwaC9zCCxFcPs97GMep0I_ml3s4qtAuuh4DD2kMke2N2r-UYgA5sG1_vU1BKMN4a-6eme5a4MGrj4v_cFBmIRsLVX0H91XdsVJpIBKNNdlJxxhEqKKwd57cr-PGbo32AERgpqeVw_ogdqrXMzOwN?width=1478&height=887&cropmode=none"
        //             alt="Changing for u"
        //             width={1000}
        //             height={1000}
        //             priority
        //         />
        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4mbBM_HyMYPhhbPQntSDM1_ORS1s6qq83ptlU6-w11ohIILFScvK91sNgPVHd-KQvDB-jbVi5xEupZx4FbeNjAW4It5KEvccWXdUIYGoeQOUpz_XwZPr_OBWKpI-WjjycqHxwWajwtjTfiAU398eWlXZ-weIL0Vez0Y5mNbkJzO4zvmKUGh1tY1m-Y_OM8b8Rr?width=2500&height=1500&cropmode=none"
        //                 alt="Gei hhll"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ disgusting shitty gei hhll ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4mn_sIDi8JO5_uXXQ4tF97-IYdFvuyToNPUWYplxNbJ7_knq0UZwGvEcp3v64BjlDMCK3gLZ-GVSbuVEZp2Oexe_irUyELdR8MS47ZBgqAUNSldsfG4mkTOCZi5jrUqR5Jy9KeCHBMA_mwfuy6gZcARKBNBlpOL_jJsRqOFdpAHEsrOnCAlq0A8RSp-9J2XgRu?width=2500&height=1500&cropmode=none"
        //                 alt="Gud hhlls saves the day"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ gud hhll comes to beat the shit out of the gei hhll ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4miTZvxlIlU6gVjuioagREK-9o_ENFmbZBiPWmOWrSDhtZqNxNNWVbZrBkmx8DKzJKmAgUzWQQ6kfeV5tigehZDw_LQZSkFruyJ1L_lUUhs5Bb5IlKYNQ4WG-lJ9wAvazsXIEZF9isV8nFznkzruIfqUOjutF2gAHajm-EYupKDO_5KaqttvBxdGWEPU3bvwoF?width=2500&height=1500&cropmode=none"
        //                 alt="Apologising"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ pwease forgib me my boo boo:&#40; ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4mOwaedI1gQEKINU5vgQieh6IyjVZ7XhpOKKa1BdRsKfhPnYRiqED7IFf_vmhdB0J7UEjnIOdjwhgRALiMmrvyHMCFUN8iR2QUJaIc08dZromg3AP3rHSENGJkGl6ZeBMupN9B6RBGsLMFI8-mMYETeu4hpy3LtYVhr6vNrg8OoFeBfFJdBhb-kZ20P7XOksgq?width=886&height=886&cropmode=none"
        //                 alt="Pukyuu thrr lyy"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ pukyuu thrr lyy also here to tell u u lyy to forgib me:&#40; ~
        //             </div>
        //         </div>

        //         <div className={styles.story_wrap}>
        //             <Image
        //                 className={styles.story_image}
        //                 src="https://dsm01pap007files.storage.live.com/y4m3HsXOSZ-RdmEWv686Ur8zQnmw9kmC4J7wT7OTGmbGhmn1wEFR9Z7v3rqOyfN9cY1ewG218q2ybXBiCEOldgnISwqWenntl05BSjzTYpo6KpyHTCF_HBJbA4T9_avvoAT3yI6LqU1YhgSZtjTSb32Fki17DFrlfFSb9QSmuIGmPacqktQcvnlaSjzVxS8cT_W?width=2500&height=1500&cropmode=none"
        //                 alt="Promising and forgiving"
        //                 width={1000}
        //                 height={1000}
        //                 priority
        //             />
        //             <div className={styles.story_text}>
        //                 ~ koko never turns gei ever again n love n care for my precious eapm lyy more than ever ^^ ~
        //             </div>
        //         </div>

        //     </section>

        // </motion.div>
    )
}