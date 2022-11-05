import Head from 'next/head'
import ContentWrapper from '../components/content-wrapper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faMastodon,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
    faPaw
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Media - Oric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ContentWrapper>
        Please note that some if not most of these links are to<br/>
        my private social media and that you may find content you consider questionable.
        <div className='flex gap-4 flex-wrap justify-center mt-8 text-sm sm:text-xl'>
          <a href="https://github.com/Pokefan5" className="bg-slate-600/80 hover:bg-slate-500/80 py-4 px-16 flex flex-col rounded-3xl basis-[30%]">
              <FontAwesomeIcon icon={faGithub} className="text-6xl sm:text-9xl" />
              Github<br/>
              Pokefan5
          </a>
          <a href="https://meow.social/@Oric" className="bg-slate-600/80 hover:bg-slate-500/80 py-4 px-16 flex flex-col rounded-3xl basis-[30%]">
              <FontAwesomeIcon icon={faMastodon} className="text-6xl sm:text-9xl" />
              Mastodon<br/>
              Oric@meow.social
          </a>
          <a href="https://www.furaffinity.net/user/n0tacat/" className="bg-slate-600/80 hover:bg-slate-500/80 py-4 px-16 flex flex-col rounded-3xl basis-[30%]">
              <FontAwesomeIcon icon={faPaw} className="text-6xl sm:text-9xl" />
              FurAffinity<br/>
              N0tacat
          </a>
          <a href="https://twitter.com/Oric_Y" className="bg-slate-600/80 hover:bg-slate-500/80 py-4 px-16 flex flex-col rounded-3xl basis-[30%]">
              <FontAwesomeIcon icon={faTwitter} className="text-6xl sm:text-9xl" />
              Twitter<br/>
              @Oric_Y
          </a>
        </div>
      </ContentWrapper>
    </>
  )
}
