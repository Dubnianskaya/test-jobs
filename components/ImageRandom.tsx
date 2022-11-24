import { FC } from "react";
import Image from "next/image";
import { randomNumberInRange } from '../functions';
import { ImageType } from '../types';

const ImageRandom:FC<ImageType> = ({img, width, height, styles }) => {
    return (
        <Image
        src={`${img}?random=${randomNumberInRange(1, 999)}`}
        width={width}
        height={height}
        alt="jobImg"
        className={styles}
        />
    )
  }
  
export default ImageRandom;