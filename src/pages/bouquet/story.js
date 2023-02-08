import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Story.module.css"

export default function Story() {
    return (
        <>
            <section className={styles.first_bouquet}>
                <Link href="/bouquet">
                    <div className={styles.back}>
                        Back
                    </div>
                </Link>
                {/* <Image
                    className={styles.image}
                    src="https://dsm01pap007files.storage.live.com/y4m7YBS3wn0lDqixDUcMbKteME5QEq6mw8E4esSI3AHltht4ln2FTI4RNjX0sHakg1iCdqkLrxosf9SPwTGAyIsg_vAxqnYmu1LMVQGpzbO4yaW11yPYhga5kkas5ANey9GGDrupy7hQhRMf_PHoFS_40RIpisywp6X2pC7WEzD5ytA1n-0PBaxfk2GfXEuWzIi?width=960&height=1280&cropmode=none"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                /> */}
                <div className={styles.text}>
                    <div className={styles.title1}>
                        Making flowers for u
                    </div>
                    <div className={styles.title2}>
                        i love u
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, accusamus? Culpa distinctio dolorum impedit, accusamus, laboriosam itaque ratione quos obcaecati eaque deleniti vitae! Nam accusantium aliquid distinctio laborum ab quod?
                    </div>
                    <div className={styles.title2}>
                        sth here
                    </div>
                    <div className={styles.text2}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam itaque cumque doloribus cupiditate, minima blanditiis rerum labore nihil ullam a possimus voluptatem nobis dolor iusto reiciendis sit eum beatae quas?
                    </div>
                </div>
            </section>
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
                <Image
                    className={styles.story_image}
                    src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Cake"
                    width={1000}
                    height={1000}
                    priority
                />
            </section>

        </>
    )
}