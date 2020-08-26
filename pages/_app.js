import '../styles/global.css'
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
      return (
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      )
  }