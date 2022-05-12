import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { createControlComponent } from "@react-leaflet/core";

const provider = new OpenStreetMapProvider();

const LeafletGeosearchControl = createControlComponent(
  (props) => new GeoSearchControl(props)
);

LeafletGeosearchControl.defaultProps = {
  provider: provider,
  position: "topright",
  style: "bar"
};

export default LeafletGeosearchControl;
