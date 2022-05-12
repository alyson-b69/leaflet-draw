import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

const MyComponent = (props) => {
  const context = useLeafletContext();
  const control = L.control.Extend({
    //...options
  });

  useEffect(() => {
    const container = context.layerContainer || context.map;
    container.addControl(control);

    return () => {
      container.removeControl(control);
    };
  });

  return null;
};

export const MyMapComponent = (props) => {
  return (
    <MapContainer>
      <TileLayer url="whateverLayerURL" />
      <MyComponent {...props} />
    </MapContainer>
  );
};
