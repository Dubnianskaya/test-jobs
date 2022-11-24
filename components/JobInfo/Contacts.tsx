import { FC } from "react";
import { Roboto } from '@next/font/google';
import { Location } from '../svgs';
import { Map } from '../Map';
import { JobType } from '../../types';
import { useJsApiLoader } from '@react-google-maps/api';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface JobInfoProps {
    job: JobType,
}

export const Contacts:FC<JobInfoProps> = ({job}) => {
    const {name, address, phone, email, location} = job;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_API_KEY || ''
    })

    return (
    <div className="overflow-hidden rounded-lg w-80 xs:w-402">
        <div>
        <div className="relative px-12 py-8 overflow-hidden xs:px-16 bg-back-contact">
        <div className="absolute hidden rounded-full xxl:block -top-1/4 -left-1/4 bg-contact-cirkle w-273 h-273"/>
        <div className={`relative ${roboto.className} text-contacts-text text-lg`}>
            <p className="text-xl font-bold text-contacts-title">Department name.</p>
            <h2 className="mb-2 text-xl font-bold text-contacts-title">{name}</h2>
            <div className="flex items-center mb-2"><Location/><p className={`${roboto.className} ml-2`}>{address}</p></div>
            <div className={`${roboto.className} flex flex-col`}>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
        </div>
        {isLoaded ? <Map lat={location?.lat} long={location?.long}/> : <p>loading</p>}
        </div>
    </div>
    )
  }