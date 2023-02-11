import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    // initial = { false}
    // mode = 'wait'
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
      //   initial="initialState"
      //   animate="animateState"
      //   exit="exitState"
      //   variants={{
      //     initialState: {
      //       opacity: 0
      //     },
      //     animateState: {
      //       opacity: 1
      //     },
      //     exitState: {

      //     }
      //   }
      // }
      >
        <Component {...pageProps} />
      </motion.div>

    </AnimatePresence>
  )
}