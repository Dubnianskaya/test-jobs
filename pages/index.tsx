import { GetStaticProps } from 'next';
import { NextPage } from 'next';
import { JobType } from '../types';
import Head from "next/head";
import Link from "next/link";
import { Location } from '../components/svgs';
import dynamic from 'next/dynamic';
import { Rating } from '../components/Rating';
import { LocationByCords } from '../components/LocationByCords';
import { calculateDays } from '../functions';
import { PaginationComponent } from '../components/Pagination';
import { SaveButton } from '../components/SaveButton';

const ImageWithNoSSR = dynamic(() => import('../components/ImageRandom'), {
  ssr: false
})

type JobsInfoProps = {
  jobs: Array<JobType>,
}

export const getStaticProps:GetStaticProps = async () => {
  try {
    const result = await fetch(`${process.env.MY_API}?access_token=${process.env.BEARER_TOKEN}`)
    const data = await result.json()
  
    if(!data) {
      return {
        notFound: true,
      }
    }
    
    return {
      props: {jobs: data}
    }
  } catch {
    return {
      props: {jobs: []}
    }
  }
}

const Home:NextPage<JobsInfoProps> = ({ jobs }) => {
  return (
    <>
    <Head>
      <title>Jobs</title>
    </Head>
    {jobs?.length !== 0 ? (
    <>
    <ul className='m-2 xxl:my-7'>
      {jobs.map(({id, title, name, pictures, location, createdAt}) => (
        <li key={id} className='flex flex-col-reverse px-4 py-6 mb-2 rounded-lg bg-mobile-bg xxl:bg-white xxl:flex-row xxl:justify-between shadow-3xl max-w-1400'>
          <div className='flex'>
          <div className='mr-5 xxl:mr-26px'>
            <ImageWithNoSSR img={pictures[0]} width={85} height={85} styles='rounded-full max-w-85 h-85'/>
          </div>
            <div>
              <Link href={`/${id}`} className='inline-block text-lg mb-1.5 xxl:mb-2 xxl:text-xl xxl:font-bold xxl:w-800'>{title}</Link>
              <p className='mb-2 text-base text-gray-cust'>Department name <span>&#8226; </span>{name}</p>
             <div className='flex items-center'>
              <Location className='mr-2'/>
              <LocationByCords lat={location.lat} long={location.long}/>
            </div>
          </div>
         
          </div>
          <div className='flex justify-between xs:ml-28 mb-3.5 xxl:mb-0 xxl:ml-40'>
            <Rating />
            <div className='flex flex-col items-end justify-between ml-8'>
              <div className='hidden xxl:block'>
              <SaveButton />
              </div>
              <p className='text-sm xxl:text-base text-gray-cust'>{`Posted ${calculateDays(createdAt)} days ago`}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <PaginationComponent/>
    </>
    ) : (
    <p>Oops! Something went wrong...</p>
    )}
    </>
  )
}

export default Home;