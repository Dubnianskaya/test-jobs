import { FC } from "react";
import { Save, StarUnchecked, Star } from './svgs';
import React, { useState } from 'react';

type SaveButtonProps = {
    text?: string,
    style?: string,
  }

export const SaveButton:FC<SaveButtonProps> = ({text, style}) => {
    const [saved, setSaved] = useState<boolean>(false);

    return (
        <label htmlFor='save' className="relative flex items-center transition-transform cursor-pointer group hover:scale-105 hover:text-dark-blue">
        <input id='save' type="checkbox" name="save" className="absolute opacity-0 peer" checked={saved} onChange={() => setSaved((prev) => !prev)}/>
        { saved
            ? <Star className={`${style} xxl:hidden w-5 h-5`}/>
            : <StarUnchecked className={`${style} xxl:hidden w-5 h-5 group-hover:stroke-dark-blue`}/>}
        <Save className={`${style} hidden xxl:block group-hover:stroke-dark-blue peer-checked:fill-dark-blue peer-checked:stroke-dark-blue`}/>
        {text}
        </label> 
    )
}