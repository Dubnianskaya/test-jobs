import { FC } from "react";
import { Roboto } from '@next/font/google';
import { splitDescription } from '../../functions';
import { nanoid } from 'nanoid';
import { JobType } from '../../types';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface JobInfoProps {
    job: JobType,
}

export const JobDescription:FC<JobInfoProps> = ({job}) => {
    const splitedDescription = splitDescription(job.description) || {}

    return (
        <div className={`text-lg ${roboto.className}`}>
        <p className={`mb-8 text-lg ${roboto.className}`}>{splitedDescription.desc}</p>
        <h3 className="mb-4 text-xl font-bold">Responsopilities</h3>
        <p className={`mb-8 text-lg ${roboto.className}`}>{splitedDescription.responsopilities}</p>
        <h3 className="mb-4 text-xl font-bold">Compensation & Benefits:</h3>
        <p className={`text-lg ${roboto.className}`}>Our physicians enjoy a wide range of benefits, including:</p>
        <ul className={`text-lg mb-8 ${roboto.className}`}>
        {splitedDescription.benefits && splitedDescription.benefits.map((benefit) => (
            <li key={nanoid()}><span className="text-gray-cust">&#8718; </span>{benefit}</li>
        ))}
        </ul>
        </div>
    )
  }