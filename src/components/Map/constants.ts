import {DrawingState, DrawingStateEnum} from "./types";
import {CREATE, DELETE, EDIT} from "leaflet-freedraw";

export const initialDrawingModeState:DrawingState[] = [
    {
        id: DrawingStateEnum.create,
        label: "Create",
        mode: CREATE,
        isChecked: false
    },
        {
            id: DrawingStateEnum.edit,
            label: "Edit",
            mode: EDIT,
            isChecked: false
        },
        {
            id: DrawingStateEnum.delete,
            label: "Delete",
            mode: DELETE,
            isChecked: false
        }
];

export const initialMapCenter = {lat: 51.505, lng: -0.09};
export const initialMapZoom = 2