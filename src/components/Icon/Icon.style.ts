import styled, { css } from 'styled-components';
import { getIcon } from './getIcon';
import { IconsEnum } from './types';

export const IconsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > div {
    width: 33%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 8px;

    & span {
      margin: 0 12px 0 0;
    }
  }
`;

export const StyledIcon = styled.span<{
  icon: IconsEnum;
  size?: number;
  isActive?: boolean;
  color?: string;
  colorActive?: string;
  cursor?: string;
  transform?: string;
  disabled?: boolean;
}>`
  ${({  icon, size, isActive, color, colorActive, cursor, transform, disabled }) => css`
    display: block;
    content: '';
    mask-image: url(${getIcon(icon)});
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    width: ${size ? `${size}px` : `24px`};
    height: ${size ? `${size}px` : `24px`};
    min-width: ${size ? `${size}px` : 'none'};
    min-height: ${size ? `${size}px` : 'none'};
    max-height: 100%;
    max-width: 100%;
    background-color: ${disabled
      ? '#e4e6e5'
      : isActive
      ? colorActive
      : color || '#000'};
    transition: background ease-in-out 0.2s, transform ease-in-out 0.2s;
    margin: auto;
    cursor: ${cursor};
    transform: ${transform};
    white-space: nowrap;
    & .icon {
      margin-right: 4px;
    }
  `}
`;
