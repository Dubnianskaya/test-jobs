import { FC } from "react";
import { nanoid } from 'nanoid';
import dynamic from 'next/dynamic';
import { JobType } from '../../types';

interface JobInfoProps {
    job: JobType,
}

const ImageWithNoSSR = dynamic(() => import('../ImageRandom'), {
    ssr: false
  })

export const Images:FC<JobInfoProps> = ({job}) => {
    const {pictures} = job;

    return (
        <div className="mb-14 xxl:mb-0">
        <h3 className="font-bold text-28px">Attached images</h3>
        <hr className="mb-3"/>
            <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-2 justify-items-center">
            {pictures && pictures.map((picture) => (
            <li key={nanoid()}>
              <ImageWithNoSSR img={picture} width={209} height={115} styles='rounded-lg max-w-209 h-115'/>
            </li>
            ))}
            </ul>
        </div>
    )
  }