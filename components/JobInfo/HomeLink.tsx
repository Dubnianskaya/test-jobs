import { FC } from "react";
import Link from "next/link";
import { Arrow } from '../svgs';

export const HomeLink:FC = () => {
    return (
        <Link href="/" className="inline-flex items-center justify-center px-6 py-4 text-xs font-semibold transition-transform rounded-lg group hover:scale-105 hover:bg-dark-blue hover:text-white ml-28 bg-back-grey"><Arrow className="mr-5 group-hover:fill-white"/>RETURN TO JOB BOARD</Link>
    )
  }