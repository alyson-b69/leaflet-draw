import Popup from 'reactjs-popup';
import styled, { css } from 'styled-components';

export const StyledDropdown = styled(Popup)<{
  width?: number;
  top?: number;
  left?: number;
  onTop: boolean;
}>`
  ${({  width, top, left, onTop }) => css`
    &-content {
      width: ${width ? `${width}px` : 'max-content'};
      left: ${left ? `${left}px` : '0'};
      margin-left: ${left ? `0px !important` : 'auto'};
      ${onTop
        ? css`
            top: ${top ? `calc(${top}px - 100% + 8px)` : '0'};
            margin-bottom: 8px !important;
          `
        : css`
            top: ${top ? `calc(${top}px - 8px)` : '0'};
            margin-top: 8px !important;
          `}
    }
  `}
`;
