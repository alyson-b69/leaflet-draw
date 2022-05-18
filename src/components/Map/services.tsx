import L from "leaflet";

export const getBoundsFromBoundingBox = (bounding: number[]) => {
    let locations: L.LatLngExpression[] = []

    bounding.map((coordinate, index) => {
        if(index === 0 || index === 1) {
            locations.push(L.latLng(coordinate, bounding[index + 2]))
        }
        return null;
    })

    return L.latLngBounds(locations);
}


