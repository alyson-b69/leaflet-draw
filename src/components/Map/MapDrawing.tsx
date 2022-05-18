import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {useMap} from "react-leaflet";
import "@safecube/leaflet-geoman";
import "@safecube/leaflet-geoman/dist/leaflet-geoman.css";
import {FeatureGroup, Layer} from "leaflet";

export interface MapDrawingProps {
    setDrawAreas: Dispatch<SetStateAction<FeatureGroup<any> | Layer[]>>;
}

const MapDrawing: React.FC<MapDrawingProps> = ({ setDrawAreas }) => {
    const map = useMap();

    useEffect(() => {
        map.pm.addControls({
            drawMarker: false,
            drawCircle: false,
            drawCircleMarker: false,
            drawPolyline: false,
            dragMode: false,
            rotateMode: false,
        });

        // @ts-ignore
        map.pm.setGlobalOptions({ pmIgnore: false });

        map.on("pm:create", (e) => {
            // @ts-ignore
            if (e.layer && e.layer.pm) {
                const shape = e;

                // enable editing of circle
                // @ts-ignore
                shape.layer.pm.enable();

                map.pm.getGeomanLayers(true)

                setDrawAreas(map.pm.getGeomanLayers());

                shape.layer.on("pm:edit", (e) => {
                    setDrawAreas(map.pm.getGeomanLayers());
                });

            }
        });

        map.on("pm:remove", (e) => {
            setDrawAreas(map.pm.getGeomanLayers());
        });

        map.on('pm:merge', (e)=> {

            // Use timeout to prevent old layers
             setTimeout(() => {
                setDrawAreas(map.pm.getGeomanLayers());
            }, 50);
        })

        return () => {
            map.pm.removeControls();
            // @ts-ignore
            map.pm.setGlobalOptions({ pmIgnore: true });
        };
    }, []);

    useEffect(()=> {

    }, [map])

    return <></>

};

export default MapDrawing;