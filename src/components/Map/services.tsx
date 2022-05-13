import {DrawingState, DrawingStateEnum, ModeTypes} from "./types";
import {ReactComponent as Edit} from "../../assets/pen-edit.svg";
import {ReactComponent as Draw} from "../../assets/pen-draw.svg";
import {ReactComponent as Erase} from "../../assets/erase.svg";
import React from "react";
import L from "leaflet";
import {NONE} from "leaflet-freedraw";

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

export const renderButtonColor = (state: DrawingStateEnum) => {
    switch (state){
        case DrawingStateEnum.edit:
            return '#509be0';
        case DrawingStateEnum.create:
            return '#7eb279';
        case DrawingStateEnum.delete:
            return '#f6685d';
        default:
            return 'black';
    }
}


export const renderPointColor = (state: DrawingStateEnum | null) => {
    switch (state){
        case DrawingStateEnum.edit:
            return '#509be0';
        case DrawingStateEnum.create:
            return '#7eb279';
        case DrawingStateEnum.delete:
            return 'orange';
        default:
            return '#509be0';
    }
}

export const renderButtonIcon = (state: DrawingStateEnum) => {
    switch (state){
        case DrawingStateEnum.edit:
            return <Edit width={'24px'} />;
        case DrawingStateEnum.create:
            return <Draw width={'24px'}  />;
        case DrawingStateEnum.delete:
            return <Erase width={'24px'} />;
        default:
            return <Draw width={'24px'} />;
    }
}

export const toggleDrawingMode = (initialDrawingMode:DrawingState[], selectedMode: DrawingState):DrawingState[] => {
    return initialDrawingMode.map(mode => {
        if(selectedMode.id === mode.id){
            return {...mode,
                isChecked: !selectedMode.isChecked
            }
        } else {
            return {
                ...mode,
                isChecked: false
            }
        }
    })
}

export const findDrawingModeId = (drawingMode: DrawingState[]): DrawingStateEnum | null => {
    return drawingMode.find(mode => mode.isChecked)?.id || null
}

export const renderCurrentMode = (drawingMode: DrawingState[]): ModeTypes => {
    return drawingMode.find(mode => mode.isChecked)?.mode || NONE
}