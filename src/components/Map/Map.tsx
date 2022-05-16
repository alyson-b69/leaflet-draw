import React, { useState} from 'react';
import {MapContainer, MapConsumer, TileLayer, ZoomControl} from "react-leaflet";
import SearchZone from "./SearchZone";
import MapContent from "./MapContent";
import MapDrawingControl from "./MapDrawingControl";
import {DrawingState, DrawingStateEnum} from "./types";
import { StyledMapContainer } from './Map.style';
import MapDrawing from "./MapDrawing";
import {initialDrawingModeState, initialMapCenter, initialMapZoom} from "./constants";
import {findDrawingModeId, toggleDrawingMode} from "./services";

const Map: React.FC = () => {
    const [zoom, setZoom] = React.useState(initialMapZoom);
    const [selectedAreas, setSelectedAreas] = useState<any[]>([]);
    const [currentArea, setCurrentArea] = useState<any>({});
    const [drawingMode, setDrawingMode] = useState<DrawingState[]>(initialDrawingModeState)
    const [currentMode, setCurrentMode] = useState<DrawingStateEnum | null>(findDrawingModeId(drawingMode))

    React.useEffect(()=>{
        setCurrentMode(drawingMode.find(mode => mode.isChecked)?.id || null)
    }, [drawingMode])

    const onDrawingModeChange = (initialDrawingMode:DrawingState[], selectedMode: DrawingState) => {
        setDrawingMode(toggleDrawingMode(initialDrawingMode, selectedMode));
    }

    return (
        <div>
            <SearchZone setCurrentArea={setCurrentArea} setSelectedAreas={setSelectedAreas} selectedAreas={selectedAreas} />
            <MapDrawingControl drawingModes={drawingMode} onDrawingModeChange={onDrawingModeChange} />
            <StyledMapContainer mode={currentMode}>
                <MapContainer center={initialMapCenter} zoom={zoom} zoomControl={false} tap={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        minZoom={2}
                        maxZoom={18}
                    />
                    <MapConsumer>
                        {map => {
                            map.on('zoomend', event => {
                                setZoom(map.getZoom());
                            });
                            return null;
                        }}
                    </MapConsumer>
                    <MapDrawing drawingMode={drawingMode} selectedAreas={selectedAreas} />
                    <MapContent currentMode={currentMode} selectedAreas={selectedAreas} currentArea={currentArea} setSelectedAreas={setSelectedAreas}/>
                    <ZoomControl position="bottomright" />
                </MapContainer>
            </StyledMapContainer>
        </div>

    );
};

export default Map;