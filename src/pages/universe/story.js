// import Image from "next/image"
// import Link from "next/link"
// import styles from "../../styles/Story.module.css"
// import { motion } from 'framer-motion'
// import { BsArrowDown } from "react-icons/bs"

import Head from "next/head"
import dynamic from 'next/dynamic';

const DynamicUniverse = dynamic(() => import('../../../components/StoryUniverseScreen'))

export default function Story() {
    return (
        <>
            <Head>
                <title>Universe ^^</title>
                <meta name="description" content="Story of two stars" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>
            <DynamicUniverse />
        </>
    )
}