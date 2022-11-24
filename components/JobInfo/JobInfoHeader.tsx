import { FC } from "react";
import { Roboto } from '@next/font/google'
import { Save, Share } from '../svgs';
import { useRouter } from "next/router";
import { baseURL } from '../../constants';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { SaveButton } from '../SaveButton';
import toast from "react-hot-toast";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const JobInfoHeader:FC = () => {
    const { query } = useRouter();
    const url = `${baseURL}/${query.id}`
    return (
    <>
    <div className="flex flex-col xxl:items-center xxl:justify-between xxl:flex-row">
        <div>
        <h2 className="font-bold text-28px">Job Details</h2>
        <hr className="mb-6 xxl:hidden"/>
        </div>
        <div className={`flex text-lg ${roboto.className} mb-8 xxl:mb-0`}>
            <div className="mr-8 "><SaveButton text={'Save to my list'} style={'mr-4'}/></div>
            <CopyToClipboard text={url} onCopy={() => toast.success('Link copied to clipboard!')}>
                <button type='button' className="flex items-center transition-transform group hover:scale-105 hover:text-dark-blue"><Share className="mr-4 group-hover:fill-dark-blue"/>Share</button>
            </CopyToClipboard>
        </div>
    </div>
     <hr className="hidden xxl:block xxl:mb-10"/>
     </>
    )
  }