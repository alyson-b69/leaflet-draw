import styled, {css} from "styled-components";
import {DrawingStateEnum} from "./types";
import {renderButtonColor, renderPointColor} from './services';

export const StyledButton = styled.button<{ name: DrawingStateEnum, checked?: boolean }>`
  border: solid 1px ${props => renderButtonColor(props.name)};
  margin: 8px;
  background: ${props => props?.checked ? renderButtonColor(props.name) : '#fff'};
  color: ${props => props?.checked ? '#fff' : '#000'};
  border-radius: 4px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;

  & svg {
    margin-right: 8px;

    & > g {
      stroke: ${props => props?.checked ? '#fff' : '#000'};
    }
  }

  &:hover {
    background: ${props => renderButtonColor(props.name)};
    color: #fff;

    & svg {
      color: #fff;

      & > g {
        stroke: #fff;
      }
    }
  }
`;

export const StyledMapContainer = styled.div<{ mode: DrawingStateEnum | null }>`

  & .leaflet-container {

    border-radius: 8px;

        div.leaflet-edge {
              display: ${props => props.mode === null && 'none'};
              background-color: ${props => renderPointColor(props.mode)};
              box-shadow: 0 0 0 2px white, 0 0 10px rgba(0, 0, 0, 0.35);
              border-radius: 50%;
              cursor: move;
              outline: none;
              transition: background-color 0.25s;
        }

    & .leaflet-interactive {
      
       fill: ${props => renderPointColor(props.mode)};
        stroke: ${props => renderPointColor(props.mode)};
          ${props => props.mode === DrawingStateEnum.delete && css`
        cursor: url("data:image/svg+xml;utf8,
                    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'>
                    <text y='50%'>🔥</text>
                    </svg>
                    ") 16 0,auto ;
        &:hover {
            fill: red;
            stroke: red;
        }
      `}
    }
`
