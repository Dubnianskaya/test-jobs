import { FC } from "react";
import React, { useState, useEffect } from 'react';
import { LocationType } from '../types';
import axios from 'axios';

const baseUrl = 'https://api.geoapify.com/v1/geocode/reverse';

export const LocationByCords:FC<LocationType> = ({ lat, long }) => {
  const [location, setLocation] = useState<string>('');

  const getLocation = async () => {
    try {
    const data = await axios.get(`${baseUrl}/?lat=${lat}&lon=${long}&apiKey=${process.env.API_KEY}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
    let location 
    const dataObj = data?.features[0]?.properties;
    if (dataObj.country && dataObj.city) {
    location =  `${dataObj.country}, ${dataObj.city}`
    } else if (dataObj.country) {
    location = dataObj.country
    } else if (dataObj.name) {
    location = dataObj.name
    }
      setLocation(location)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
     getLocation()
  }, []) 

    return (
        <p className='text-base text-gray-cust'>{location}</p>
    )
  }