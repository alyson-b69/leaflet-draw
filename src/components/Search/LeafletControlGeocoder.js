import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import icon from "../../utils/constants";

const LeafletControlGeocoder = () => {
  const map = useMap();

  useEffect(() => {
    let geocoder = L.Control.Geocoder.nominatim();
    if (typeof URLSearchParams !== "undefined" && location.search) {
      // parse /?geocoder=nominatim from URL

      const params = new URLSearchParams(location.search);
      const geocoderString = params.get("geocoder");
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      } else if (geocoderString) {
        console.warn("Unsupported geocoder", geocoderString);
      }
    }

    L.Control.geocoder({
      query: '',
      placeholder: "Search a place...",
      defaultMarkGeocode: false,
      geocoder
    })
      .on("markgeocode", function (e) {
        const latLng = e.geocode.center;
        L.marker(latLng, { icon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);

  return null;
};

export default LeafletControlGeocoder;
