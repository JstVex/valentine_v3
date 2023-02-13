import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}