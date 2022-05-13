import React, { CSSProperties } from 'react';
import { StyledIcon } from './Icon.style';
import { IconsEnum } from './types';

export interface IconProps {
  icon: IconsEnum;
  size?: number;
  isActive?: boolean;
  color?: string;
  colorActive?: string;
  onClick?: () => void;
  cursor?: string;
  transform?: string;
  className?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size,
  isActive,
  color,
  colorActive,
  onClick,
  cursor,
  transform,
  className,
  disabled,
  style,
}) => {
  return (
    <StyledIcon
      className={'icon ' + className}
      icon={icon}
      size={size}
      isActive={isActive}
      color={color}
      colorActive={colorActive}
      onClick={() => {
        !disabled && onClick && onClick();
      }}
      cursor={cursor}
      transform={transform}
      disabled={disabled}
      style={style}
    />
  );
};
export default Icon;
