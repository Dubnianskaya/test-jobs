import { FC, useCallback, useRef } from "react";
import { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { LocationMarker } from './LocationMarker';
import { defaultTheme } from "./Theme";
import { LocationType } from '../../types';

interface centerProps {
    lat: number,
    lng: number,
}

const defaultOptions = {
    backgroundColor: '#2A3047',
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: defaultTheme,
}

const styles = {
width: '402px',
height: '218px',
}

export const Map:FC<LocationType> = ({lat, long}) => {
    const mapRef = useRef(undefined)
    
    const onLoad = useCallback(function callback(map: any) {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        mapRef.current = undefined;
    }, [])

    const center = useMemo<centerProps>(() => ({lat: lat, lng: long}), [])

    return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={styles} options={defaultOptions} onLoad={onLoad} onUnmount={onUnmount}>
        <LocationMarker position={center}/>
    </GoogleMap>
    );
}

