import Layout from '../components/layout'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const {motion, AnimatePresence} = require('framer-motion');

function MyApp({ Component, pageProps, router }) {
  return (
      <Layout>
          <Component {...pageProps} key={router.route}/>
      </Layout>
    )
}

export default MyApp
