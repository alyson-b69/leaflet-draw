import React from 'react';
import {DrawingState} from "./types";
import FreeDraw, {APPEND, CREATE,  EDIT} from "leaflet-freedraw";
import {useMap} from "react-leaflet";
import {renderCurrentMode} from "./services";

export interface MapDrawingProps {
    drawingMode: DrawingState[];
}

const MapDrawing: React.FC<MapDrawingProps> = ({drawingMode}) => {
    const currentMode = renderCurrentMode(drawingMode);

    const map = useMap();
    const freeDraw = new FreeDraw({
        mode: currentMode === CREATE || currentMode === EDIT ? currentMode | APPEND : currentMode,
        smoothFactor: 0.9,
    });

    console.log(currentMode)

    map.addLayer(freeDraw)

    return <></>

};

export default MapDrawing;