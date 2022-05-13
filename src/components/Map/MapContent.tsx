import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {GeoJSON, useMap} from "react-leaflet";
import {getBoundsFromBoundingBox} from "./services";
import { DrawingStateEnum} from "./types";

export interface MapContentProps {
    selectedAreas: any[];
    currentArea: any;
    setSelectedAreas: Dispatch<SetStateAction<any[]>>
    currentMode: DrawingStateEnum | null;
}

const MapContent: React.FC<MapContentProps> = ({selectedAreas, currentArea, setSelectedAreas, currentMode}) => {
    const [renderPlaces, setRenderPlaces] = useState(<></>);
    const map = useMap();

    React.useEffect(()=> {
        if(currentMode === DrawingStateEnum.delete){
            setRenderPlaces(<div className={'toDelete'}>{
                selectedAreas.map(area => {
                    return (
                        <GeoJSON
                            key={area.geojson}
                            data={area.geojson}
                            style={{color: 'orange'}}
                            onEachFeature={(f, l)=> {
                                l.on({
                                    click: (l) => {
                                        setSelectedAreas(selectedAreas.filter((areaItem => {
                                            return areaItem.display_name !== area.display_name
                                        })))
                                    },
                                })
                            }}
                        />
                    )
                })
            }</div>)
        } else {
            setRenderPlaces(<>{
                selectedAreas.map(place => {
                    return (
                        <GeoJSON
                            key={place.geojson}
                            data={place.geojson}
                        />
                    )
                })
            }</>)
        }

    }, [selectedAreas, currentMode])

    React.useEffect(()=> {
       return;
    }, [renderPlaces, currentMode])


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