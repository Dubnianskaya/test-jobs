import { FC } from "react";
import { JobType } from '../../types';
import { JobInfoHeader, ApplyButton, JobDescription, JobTitle, AdditionalInfo, Images, Contacts, HomeLink } from './index'

interface JobInfoProps {
    job: JobType,
}

export const JobInfo:FC<JobInfoProps> = ({job}) => {

    if(!job) {
        return (
            <p>No such job</p>
        )
    }
    return (
    <div className="py-6 bg-white xxl:pb-40 xxl:pt-14">
         <div className="w-screen xxl:flex xxl:justify-center xxl:mb-86px">
            <div className="xxl:mr-32 xxl:max-w-720 mx-3.5">
               <JobInfoHeader />
                <div className="hidden xxl:block xxl:mb-8">
                <ApplyButton/>
                </div>
                <JobTitle job={job}/>
                <JobDescription job={job}/>
                <div className="mb-32 xxl:mb-86px">
                <ApplyButton/>
                </div>
                <div className="flex flex-col-reverse xxl:flex-col">
                <AdditionalInfo job={job}/>
                <Images job={job}/>
                </div>
            </div>
            <div className="flex justify-center xxl:block">
                <Contacts job={job}/>
            </div>
         </div>
         <div className="hidden xxl:block">
         <HomeLink />
         </div>
    </div>
    )
}
