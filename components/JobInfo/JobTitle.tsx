import { FC } from "react";
import { Roboto } from '@next/font/google';
import {calculateDays} from '../../functions';
import { JobType } from '../../types';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface JobInfoProps {
    job: JobType,
}

export const JobTitle:FC<JobInfoProps> = ({job}) => {

    return (
        <div className="relative xxl:mb-2 xxl:flex xxl:justify-between xxl:items-start mb-7">
            <div className="xxl:max-w-lg">
                <h2 className="mb-5 text-2xl font-bold xxl:mb-2">{job.title}</h2>
                <p className={`text-xs xxl:text-lg text-gray-cust mb-2 ${roboto.className}`}>{`Posted ${calculateDays(job.createdAt)} days ago`}</p>
                </div>
            <div className="absolute right-0 flex flex-col items-end -bottom-4 xxl:static xxl:flex-col-reverse xxl:items-start">
                <p className="text-lg">Brutto, per year</p>
                <p className="text-xl font-bold"><span>&#8364; </span>{job.salary?.replaceAll('k', ' 000')}</p>
            </div>
        </div>
    )
  }