import Head from 'next/head'
import ContentWrapper from '../components/content-wrapper'

export default function About() {
  return (
    <ContentWrapper>
      <Head>
        <title>About - Oric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-m sm:text-2xl text-left'>
        <p>
          I'm Oric a red wolf PHP backend developer and, as you might have guessed, a furry!
        </p>
        <div className='py-4'/>
        <p>
          Aside from programming I also am an avid gamer playing all sorts of genres.<br/>
          From Final Fantasy XIV, Rhythm Games like SDVX, IIDX, osu!, etc. to Persona and Dead by Daylight I play all of them regularly.<br/>
          I also have a VR headset and can sometimes be found in either VRChat or NeosVR. Though I usually keep to my friend circle when I am in VR.
        </p>
        <div className='py-4'/>
        <p>
          That said I'm absolutely not against making new friends even if I can be rather shy at times. 
          And more often than not I will have a hard time initiating conversations since I usually don't have too many topics come to mind. 
          This doesn't mean I don't like you, I simply don't want to annoy you with empty chatter.
        </p>
        <div className='py-4'/>
        <p>
          I am also currently running the Mastodon instance <a className='underline hover:text-slate-400' href="https://macrofurs.social">macrofurs.social</a>.
        </p>
      </div>

      <div className='mt-16 text-xs sm:text-sm text-right text-slate-400'>
        Website created using <a href='https://nextjs.org/' className='underline hover:text-slate-300'>NextJS</a> and <a href='https://tailwindcss.com/' className='underline hover:text-slate-300'>Tailwind CSS</a><br/>
        Art by <a href='https://www.furaffinity.net/user/alexfevralsky' className='underline hover:text-slate-300'>Alex Fevralsky</a>, <a href='https://twitter.com/Dsurion' className='underline hover:text-slate-300'>Dsurion</a>, <a href='https://twitter.com/4ZLTRYSBD' className='underline hover:text-slate-300'>Sangko Bahko</a> and <a href='https://twitter.com/AtlasInu' className='underline hover:text-slate-300'>AtlasInu</a><br/>
        Icons via <a href='https://fontawesome.com/' className='underline hover:text-slate-300'>FontAwesome</a>
      </div>
  </ContentWrapper>
  )
}
