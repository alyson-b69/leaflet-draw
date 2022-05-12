import { useCallback, useState, useEffect } from "react";
import axios from "axios";

const Address = ({ map, position }) => {
  const [address, setAddress] = useState(null);
  const fetchAddress = async (lat, lon) => {
    axios("https://nominatim.openstreetmap.org/reverse", {
      params: {
        format: "jsonv2",
        lat: lat,
        lon: lon
      }
    })
      .then((res) => {
        setAddress(res.data);
      })
      .catch(console.error);
  };

  const onMoveEnd = useCallback(() => {
    fetchAddress(position.lat, position.lng);
  }, [position.lat, position.lng]);

  useEffect(() => {
    map.on("moveend", onMoveEnd);
    return () => {
      map.off("moveend", onMoveEnd);
    };
  }, [map, onMoveEnd]);

  return <p>Address: {address ? address.display_name : "Unavailable"}</p>;
};

const DisplayPosition = ({ map, center, zoom }) => {
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <div>
      <h3>Actual center</h3>
      <p>
        latitude: {position.lat.toFixed(4)}, longitude:{" "}
        {position.lng.toFixed(4)}{" "}
      </p>
      <Address map={map} position={position} />
      <p>
        <button onClick={onClick}>reset</button>
      </p>
    </div>
  );
};

export default DisplayPosition;
