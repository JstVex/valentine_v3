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
                <link rel="icon" href="https://dsm01pap007files.storage.live.com/y4mHZtE5HnE0s-QUIig7sj_5iKInYOedG-nWgma1L_3FbVidkRZIXFOPsFBcr7_sQ7r0uSn763-DeLuHr95hE5dYNPg-xUofvOAFSDBjZnZBUwMldsCaZSQrnNQvai2F_o78-erOK7xLKN3PnBeRCEOtHLvQbSTVdqm0LTnOTZRqMTjfCpr4XJ5E1jZ7csY2X9p?width=926&height=1070&cropmode=none" />
            </Head>

            <DynamicBouquet />
        </>
    )
}