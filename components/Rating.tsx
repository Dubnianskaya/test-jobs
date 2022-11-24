import { FC } from "react";
import React, { useState } from 'react';
import { StarUnchecked, Star } from './svgs';

export const Rating:FC = () => {
  const [rating, setRating] = useState<number>(0);
  const ratingValues = ["1","2","3","4","5"]
  
    return (
      <ul className="flex justify-center">
        {ratingValues.map((ratio) => (
          <li key={ratio} className="flex items-center">
          <input id={ratio} type="radio" name="rating" className="hidden" value={ratio}/>
          <label htmlFor={ratio} className="flex items-center cursor-pointer" onClick={() => setRating(Number(ratio))}>
            {Number(ratio) <= rating ? <Star className="w-4 mr-1"/> : <StarUnchecked className="w-4 mr-1"/>}
           </label> 
          </li>
        ))}
    </ul>
    )
  }