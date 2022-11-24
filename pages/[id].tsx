import { GetServerSideProps } from 'next';
import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring'
import { JobType } from '../types';
import Head from "next/head";
import { JobInfo } from "../components/JobInfo/JobInfo";

interface JobInfoProps {
  job: JobType,
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as IParams;
    const result = await fetch(`${process.env.MY_API}?access_token=${process.env.BEARER_TOKEN}`)
    const data = await result.json()
    const job = data && data.find((jobObj: JobType) => jobObj.id === id)

    if(!data) {
      return {
        notFound: true,
      }
    }
    
    return {
      props: {job: job || {}}
    }
  } catch {
    return {
      props: {job: {}}
    }
  }
  
}

const JobDetails:NextPage<JobInfoProps> = ({job}) => {
    return (
      <>
     <Head>
      <title>{job?.name}</title>
    </Head>
    <JobInfo job={job}/>
    </>
    )
  }
  
export default JobDetails;