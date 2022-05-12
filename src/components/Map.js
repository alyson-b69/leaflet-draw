import { MapContainer, TileLayer, ScaleControl } from "react-leaflet";
import { useRef, useCallback, useMemo, useEffect } from "react";
import Freedraw, { ALL } from "react-leaflet-freedraw";

import LeafletControlGeocoder from "./LeafletControlGeocoder";
import LeafletGeosearchControl from "./LeafletGeosearchControl";

const Map = ({ center, zoom, setMap, freeDrawMode }) => {
  const freedrawRef = useRef(null);

  const handleMarkersDraw = useCallback(
    (event) =>
      console.log(
        "markers drawn - latLngs",
        event.latLngs,
        "Polygons:",
        freedrawRef.current.size(),
        "FreeDraw:",
        freedrawRef.current.options
      ),
    []
  );
  const handleModeChange = useCallback(
    (event) => console.log("mode changed", event),
    []
  );

  const handleEscapeKey = useCallback((event) => {
    // Cancel the current FreeDraw action when the escape key is pressed.
    if (event.key === "Escape") {
      freedrawRef.current.cancel();
    }
  }, []);

  const handlers = useMemo(
    () => ({
      markers: handleMarkersDraw,
      mode: handleModeChange
    }),
    [handleMarkersDraw, handleModeChange]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LeafletControlGeocoder />

      <ScaleControl />
      <Freedraw
        mode={freeDrawMode}
        eventHandlers={handlers}
        ref={freedrawRef}
      />
    </MapContainer>
  );
};

export default Map;
