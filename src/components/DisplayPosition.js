import { useCallback, useState, useEffect } from "react";
import L from "leaflet";
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
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState(null);
  const [responseCity, setResponseCity] = useState(null)

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


  const handleSearch = (e) => {
    setSearch(e.target.value);

      axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          country: e.target.value,
          format: 'json',
          limit: 5,
          polygon_geojson: 1
        }
      }).then((result) => {
        setResponse(result.data)
        return result;
      }).catch(error => console.log(error))

  }

  const handleCountrySelect = (country) => {
    L.geoJSON(country.geojson, {color: '#7eb279'}).addTo(map);
  }

  const handleSearchCity = (e) => {
    setSearch(e.target.value);

    axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        city: e.target.value,
        format: 'json',
        limit: 5,
        polygon_geojson: 1
      }
    }).then((result) => {
      setResponseCity(result.data)
      return result;
    }).catch(error => console.log(error))

  }

  const handleCitySelect = (country) => {
    L.geoJSON(country.geojson, {color: '#7eb279'}).addTo(map);
  }

  return (
    <div>
      <h3>Actual center</h3>
      <input type={'text'} value={search} onChange={handleSearch} placeholder={'Search a country'} />
      <br/>
      {response && response.map((country) => {
        return (<button onClick={()=> handleCountrySelect(country)} key={country.display_name}>
          {country.display_name}
        </button>)
      })}

      <input type={'text'} value={search} onChange={handleSearchCity} placeholder={'Search a city'} />
      <br/>
      {responseCity && responseCity.map((city) => {
        return (<button onClick={()=> handleCitySelect(city)} key={city.display_name}>
          {city.display_name}
        </button>)
      })}
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
