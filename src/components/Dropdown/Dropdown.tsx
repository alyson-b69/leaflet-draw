import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import { StyledDropdown } from './Dropdown.style';

export interface DropdownProps {
  anchorRef: React.RefObject<HTMLElement>;
  open: boolean;
  close: () => void;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ anchorRef, open, close, children }) => {
  const dropdownWidth = useMemo(
      () => anchorRef.current?.clientWidth,
      [anchorRef.current?.clientWidth],
  );
  const [dropdownTop, setDropdownTop] = useState<number>();
  const [onTop, setOnTop] = useState(false);

  const setDropdownPosition = () => {
    const rect = anchorRef.current?.getBoundingClientRect();
    let ontop = onTop;
    if (!!rect && rect.top > window.innerHeight - 150) {
      ontop = true;
    }
    if (!!rect && rect.top < 150) {
      ontop = false;
    }
    setOnTop(ontop);
    setDropdownTop(anchorRef.current ? (ontop ? rect?.top : rect?.bottom) : undefined);
  };

  useEffect(() => {
    window.addEventListener('scroll', close);
    return () => {
      window.removeEventListener('scroll', close);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setDropdownPosition();
    }
  }, [open]);

  return (
    <StyledDropdown
      width={dropdownWidth}
      top={dropdownTop}
      onTop={onTop}
      left={anchorRef.current?.getBoundingClientRect().left}
      closeOnDocumentClick
      on="click"
      open={open}
      onClose={close}
      closeOnEscape

    >
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
