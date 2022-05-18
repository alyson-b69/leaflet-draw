import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {GeoJSON, useMap} from "react-leaflet";
import {getBoundsFromBoundingBox} from "./services";

export interface MapContentProps {
    selectedAreas: any[];
    currentArea: any;
    setDrawAreas: Dispatch<SetStateAction<any>>;
}

const MapContent: React.FC<MapContentProps> = ({selectedAreas, currentArea, setDrawAreas}) => {
    const [renderPlaces, setRenderPlaces] = useState(<></>);
    const map = useMap();

    React.useEffect(()=> {
            setRenderPlaces(<>{
                selectedAreas.map((place, index) => {
                    return (
                        <GeoJSON
                            key={place.geojson + index}
                            data={place.geojson}
                        />
                    )
                })
            }</>)

    }, [selectedAreas])



    React.useEffect(()=> {
        setDrawAreas(map.pm.getGeomanLayers());
    }, [renderPlaces])


    useEffect(()=> {
        if(currentArea.geojson){
            map.flyToBounds(getBoundsFromBoundingBox(currentArea.boundingbox), {
                duration: 0.6
            })
        }
    }, [currentArea, map])

    return (
        <>
            {renderPlaces}
        </>
    );
};

export default MapContent;