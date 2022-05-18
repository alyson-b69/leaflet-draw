import React, {Dispatch, SetStateAction,  useState} from 'react';
import axios from "axios";
import InputSearch from "../InputSearch/InputSearch";
import {Choice} from "../InputSearch/InputSearch.style";

export interface SearchZoneProps {
    setCurrentArea: Dispatch<SetStateAction<any>>
    setSelectedAreas : Dispatch<SetStateAction<any[]>>
    selectedAreas: any[]
}

const SearchZone: React.FC<SearchZoneProps> = ({setCurrentArea, setSelectedAreas, selectedAreas}) => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState<any[]>([]);
    const [cities, setCities] = useState<any[]>([]);

    const waitTime = 1000;
    let timeoutId: NodeJS.Timeout;

    const searchWithNominatim = (term: string) => {
        const params = {
            format: 'json',
            limit: 20,
            polygon_geojson: 1,
            polygon_threshold: 0.05
        }

        axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                country: term,
                ...params,
            }
        }).then((result) => {
            if(result.data.length){
                setCountries(result.data)
            }
        }).catch(error => console.log(error));

        axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                city: term,
                ...params,
            }
        }).then((result) => {
            if(result.data.length){
                setCities(result.data)
            }
        }).catch(error => console.log(error))
    }

    const handleSearch = (e:any) => {
        setSearch(e.currentTarget.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        clearTimeout(timeoutId);
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const term = e.currentTarget.value;

        timeoutId = setTimeout(() => {
            if(term === search && term.length){
                searchWithNominatim(term);
            }
        }, waitTime);
    }

    const handleSelect = (currentPlace:any) => {
        setSearch('');
         setCountries([]);
         setCities([]);
        setCurrentArea(currentPlace);
        setSelectedAreas([...selectedAreas, currentPlace])
    }

    return (
        <div>
            <h3>Search</h3>
            <InputSearch
                placeholder={'Search a place'}
                value={search}
                onChange={handleSearch}
                onReset={() => setSearch('')}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                results={<>
                    {countries.map((country: any, index) => {
                        return (<Choice onClick={()=> handleSelect(country)} key={country.display_name + index}>
                            {country.type} : {country.display_name}
                        </Choice>)
                    })}
                    {cities.map((place:any, index) => {
                        return (<Choice onClick={()=> handleSelect(place)} key={place.display_name + index}>
                            {place.type} : {place.display_name}
                        </Choice>)
                    })}

                </>}
            />
            <br/>

        </div>
    );
};

export default SearchZone;