import Layout from '../components/layout'
import Head from 'next/head';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import profile from '../public/profile.jpg'


function MyApp({ Component, pageProps, router }) {


  return (
    <Layout>
      <Head>
        <meta property='og:title' content="Oric's Homepage" />
        <meta property='og:description' content="Just a Website built by a red wolf~" />
        <meta property='og:image' content={profile.src} />
        <meta property='og:url' content="https://oric.me" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Oric_Y" />
      </Head>
        <Component {...pageProps} key={router.route}/>
    </Layout>
    )
}

export default MyApp
