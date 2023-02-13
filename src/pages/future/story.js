// import Image from "next/image"
// import Link from "next/link"
// import styles from "../../styles/Story.module.css"
// import { motion } from 'framer-motion'
// import { BsArrowDown } from "react-icons/bs"
import Head from "next/head"
import dynamic from 'next/dynamic';

const DynamicFuture = dynamic(() => import('../../../components/StoryFutureScreen'))

export default function Story() {
    return (
        <>
            <Head>
                <title>Future ^^</title>
                <meta name="description" content="Story of our future" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>
            <DynamicFuture />
        </>
    )
}