import Head from 'next/head'
import Image from 'next/image'
import ContentWrapper from '../components/content-wrapper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Oric</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentWrapper>
        <div className='text-left w-full flex sm:flex-row flex-col'>
          <Image src='/profile.jpg' height={256} width={256} className='p-8 sm:p-0 rounded-full sm:border-4 border-slate-800 pointer-events-none' />
          <div className='pl-8 sm:py-8 pb-8 flex flex-col justify-between text-2xl'>
            <p>Name: Oric</p>
            <p>Age: 23</p>
            <p>Species: Red Wolf</p>
            <p>Height: Variable (when normal 207cm/6'9")</p>
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}
