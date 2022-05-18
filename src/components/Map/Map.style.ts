import styled, {css} from "styled-components";


export const StyledMapContainer = styled.div<{ mode?: null }>`

  & .leaflet-container {
    z-index: 1;
    border-radius: 8px;
    
    & .button-container {
      & a {
        background: #fff;
      }
      &.active{
        & a{
          background: #7eb279;
        }
      }
      &:hover{
        & a {
          background: #7eb279;
        }
      }
      & .leaflet-pm-actions-container{
        & a {
          background-color: #666;
          &:hover{
            background: #7eb279;
          }
        }
      }
    }
  }

    div.leaflet-edge {
              display: ${props => props.mode === null && 'none'};
              // background-color: ;
              box-shadow: 0 0 0 2px white, 0 0 10px rgba(0, 0, 0, 0.35);
              border-radius: 50%;
              cursor: move;
              outline: none;
              transition: background-color 0.25s;
        }

    & .leaflet-interactive {
          ${props => props.mode && css`
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
