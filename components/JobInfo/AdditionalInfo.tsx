import { FC } from "react";
import { Roboto } from '@next/font/google';
import { nanoid } from 'nanoid';
import { JobType } from '../../types';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface JobInfoProps {
    job: JobType,
}

export const AdditionalInfo:FC<JobInfoProps> = ({job}) => {

    return (
        <div className="mb-16 xxl:mb-86px">
        <h2 className="font-bold text-28px">Additional info</h2>
        <hr className="mb-4"/>
        <h3 className={`text-lg mb-2.5 ${roboto.className}`}>Employment type</h3>
        <ul className="grid grid-cols-2 mb-6 md:grid-cols-3 gap-x-2">
        {job.employment_type && job.employment_type.map((type) => (
        <li key={nanoid()} className="py-4 font-bold text-center border rounded-lg border-blue-outline bg-info-back-blue text-info-blue">{type}</li>
        ))}
        </ul>
        <h3 className={`text-lg mb-2.5 ${roboto.className}`}>Benefits</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2">
        {job.benefits && job.benefits.map((benefit) => (
        <li key={nanoid()}  className="py-4 font-bold text-center border rounded-lg border-yellow-outline bg-info-back-yellow text-info-yellow">{benefit}</li>
        ))}
        </ul>
    </div>
    )
  }