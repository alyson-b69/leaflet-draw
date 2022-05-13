import React from 'react';
import {DrawingState, } from "./types";
import { StyledButton } from './Map.style';
import {renderButtonIcon} from "./services";

export interface MapDrawingControlProps {
    drawingModes: DrawingState[];
    onDrawingModeChange: (initialMode:DrawingState[], selectedDrawing: DrawingState) => void;
}

const MapDrawingControl: React.FC<MapDrawingControlProps> = ({drawingModes, onDrawingModeChange}) => {
    return (
        <div
            style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
        >
            {drawingModes.map((mode) => {
                    return (
                        <StyledButton
                            key={mode.id}
                            name={mode.id}
                            checked={mode.isChecked}
                            onClick={() => onDrawingModeChange(drawingModes, mode)}
                        >
                            {renderButtonIcon(mode.id)}
                            {mode.label}
                        </StyledButton>
                    )
                }
            )}
        </div>
    );
};

export default MapDrawingControl;