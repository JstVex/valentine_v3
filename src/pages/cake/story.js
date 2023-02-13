// import Image from "next/image"
// import Link from "next/link"
// import styles from "../../styles/Story.module.css"
// import { motion } from 'framer-motion'
// import { BsArrowDown } from "react-icons/bs"
import Head from "next/head"
import dynamic from 'next/dynamic';

const DynamicCake = dynamic(() => import('../../../components/StoryCakeScreen'))

export default function Story() {
    return (
        <>
            <Head>
                <title>Cake ^^</title>
                <meta name="description" content="Story of making a cake" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="" />
            </Head>
            <DynamicCake />
        </>
    )
}