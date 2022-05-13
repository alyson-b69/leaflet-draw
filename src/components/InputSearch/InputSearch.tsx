import React, {ChangeEvent, CSSProperties, ReactNode, useEffect, useState} from 'react';
import {InputContainer, InputWrapper, InputSearchStyle, InputSearchResults} from "./InputSearch.style";
import Icon from "../Icon";
import {IconsEnum} from "../Icon/types";
import Dropdown from "../Dropdown";

export interface InputSearchProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onReset: () => void;
    className?: string;
    results?: ReactNode;
    height?: string;
    width?: string;
    style?: CSSProperties;
    isError?: boolean;
    isSuccess?: boolean;
    id?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ placeholder,
                                                     value,
                                                     onChange,
                                                     onReset,
                                                     className,
                                                     results,
                                                     width,
                                                     height,
                                                     style,
                                                     isError,
                                                     isSuccess,
    onKeyUp,
    onKeyDown,
                                                     id}) => {
    const [isActive, setIsActive] = useState(false);
    const [blurCapture, setBlurCapture] = useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    React.useEffect(() => {
        const debounce = setTimeout(() => setIsActive(false), 200);
        return () => clearTimeout(debounce);
    }, [blurCapture]);

    useEffect(() => {

        setIsOpen(!!results && isActive && value.length > 0);
    }, [isActive, results, value]);

    return (
        <InputContainer className={className} width={width} height={height} style={style}>
            <InputWrapper width={width} height={height} ref={ref}>
                <InputSearchStyle
                    id={id}
                    type={'search'}
                    value={value}
                    isActive={isActive}
                    onFocusCapture={() => setIsActive(true)}
                    onBlurCapture={() => {
                        setBlurCapture(!blurCapture);
                    }}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    width={width}
                    height={height}
                    isError={isError}
                    isSuccess={isSuccess}
                />
                <Icon icon={IconsEnum.search} size={24} className={'search'} />
                {value.length > 0 && (
                    <Icon icon={IconsEnum.cancel} size={18} onClick={onReset} className={'reset'} />
                )}
            </InputWrapper>
            <Dropdown anchorRef={ref} open={isOpen} close={() => setIsOpen(false)}>
                <InputSearchResults>{results}</InputSearchResults>
            </Dropdown>
        </InputContainer>
    );
};

export default InputSearch;