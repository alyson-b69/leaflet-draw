import React, {useEffect, useState} from 'react';
import { MapConsumer, TileLayer, ZoomControl} from "react-leaflet";
import {FeatureGroup, Layer, Util} from "leaflet";
import {MapContainer} from "react-leaflet";
import { StyledMapContainer } from './Map.style';
import { initialMapCenter, initialMapZoom} from "./constants";
import SearchZone from "./SearchZone";
import MapContent from "./MapContent";
import MapDrawing from "./MapDrawing";


const Map: React.FC = () => {
   const mapUrl = `https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png`;
   // const oldMapUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
    const [zoom, setZoom] = React.useState(initialMapZoom);
    const [selectedAreas, setSelectedAreas] = useState<any[]>([]);
    const [currentArea, setCurrentArea] = useState<any>({});
    const [drawAreas, setDrawAreas] = useState<FeatureGroup<any> | Layer[]>([])
    useEffect(()=> {
            // @ts-ignore
        Util.isArray(drawAreas) && drawAreas.map((area) => {
                console.log(area.getLatLngs())
            })

            console.log(drawAreas);


    }, [drawAreas])
    return (
        <div>
            <SearchZone setCurrentArea={setCurrentArea} setSelectedAreas={setSelectedAreas} selectedAreas={selectedAreas} />

            <StyledMapContainer >
                <MapContainer center={initialMapCenter} zoom={zoom} zoomControl={false} tap={false}>
                    <TileLayer
                        url={mapUrl}
                        minZoom={2}
                        maxZoom={18}
                    />
                    <MapConsumer>
                        {map => {
                            map.on('zoomend', event => {
                                setZoom(map.getZoom());
                            })
                            return null;
                        }}
                    </MapConsumer>
                    <MapDrawing  setDrawAreas={setDrawAreas}  />
                    <MapContent  selectedAreas={selectedAreas} currentArea={currentArea} setDrawAreas={setDrawAreas}/>
                    <ZoomControl position="bottomright" />
                </MapContainer>
            </StyledMapContainer>
            <br/>

        </div>

    );
};

export default Map;