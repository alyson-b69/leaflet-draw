import { useState, useMemo, useReducer } from "react";
import "leaflet/dist/leaflet.css";
import { CREATE, EDIT, DELETE, ALL } from "react-leaflet-freedraw";

import Map from "./components/Map";
import DisplayPosition from "./components/DisplayPosition";
import CheckboxContainer from "./components/Checkboxes";

const intialState = [
  {
    id: "create",
    label: "Create",
    mode: CREATE,
    isChecked: true
  },
  {
    id: "edit",
    label: "Edit Polygons",
    mode: EDIT,
    isChecked: false
  },
  {
    id: "delete",
    label: "Delete",
    mode: DELETE,
    isChecked: false
  }
];

function reducer(state = intialState, event) {
  return state.map((control) => {
    if (control.id === event.target.name) {
      return {
        ...control,
        isChecked: event.target.checked
      };
    }
    return {
      ...control,
      isChecked: false
    };
  });
}

export default function App() {
  const center = [51.505, -0.09];
  const zoom = 13;

  const [state, dispatch] = useReducer(reducer, intialState);
  const [map, setMap] = useState(null);

  const mode = state.reduce((result, current) => {
    if (current.isChecked) {
      return result | current.mode;
    } else {
      return result ^ current.mode;
    }
  }, ALL);

  const displayMap = useMemo(
    () => (
      <Map center={center} zoom={zoom} setMap={setMap} freeDrawMode={mode} />
    ),
    [center, mode]
  );

  return (
    <div className="App">
      test
      {map ? <DisplayPosition map={map} center={center} zoom={zoom} /> : null}
      <CheckboxContainer checkboxes={state} onChange={dispatch} />
      {displayMap}
    </div>
  );
}
