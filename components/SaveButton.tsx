import { FC } from "react";
import { Save } from './svgs';

type SaveButtonProps = {
    text?: string,
    style?: string,
  }

export const SaveButton:FC<SaveButtonProps> = ({text, style}) => {
    return (
        <button type='button' className="flex items-center transition-transform group hover:scale-105 hover:text-dark-blue">
            <Save className={`${style} group-hover:stroke-dark-blue`}/>
           {text}</button>
    )
}