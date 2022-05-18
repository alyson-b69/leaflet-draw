import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ width?: string; height?: string }>`
  ${({ width, height }) => css`
    position: relative;
    width: ${width};
    height: ${height};
    z-index: 2;
  `}
`;

export const InputWrapper = styled.div<{
    width?: string;
    height?: string;
    marginTop?: number;
}>`
  ${({  width, height, marginTop }) => css`
    position: relative;
    width: ${width || '100%'};
    height: ${height};

    & span.icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: ${marginTop ? `translate(0, calc(-50% - ${marginTop}))` : 'translate(0, -50%)'};
      height: ${height && `calc(${height} - ${height} / 3 )`};
      width: ${height && `calc(${height} - ${height} / 3 )`};
      min-height: ${height && `calc(${height} - ${height} / 3 )`};
      min-width: ${height && `calc(${height} - ${height} / 3 )`};
    }

    & .icon.search {
      right: inherit;
      left: ${height ? `calc(${height} / 4)` : '12px'};
    }

    & .icon.reset {
      cursor: pointer;
      height: ${height && `calc(${height} - ${height} / 2 )`};
      width: ${height && `calc(${height} - ${height} / 2 )`};
      min-height: ${height && `calc(${height} - ${height} / 2 )`};
      min-width: ${height && `calc(${height} - ${height} / 2 )`};
      &:hover {
        background: #f6685d;
      }
    }
  `}
`;

export const StyledInput = styled.input<{
    isActive: boolean;
    width?: string;
    height?: string;
    hasUnit?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    isAutocompleted?: boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}>`
  ${({
            isActive,
            width,
            height,
            hasUnit,
            isSuccess,
            isError,
            isAutocompleted,
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
        }) => css`
    height: ${height ? `${height}` : `40px`};
    border-radius: 4px;
    border: solid 1px
      ${isActive
    ? '#2088E910'
    : isSuccess || isAutocompleted
        ? '#7eb279'
        : isError
            ? '#f6685d'
            : '#e4e6e5'};
    box-shadow: ${isActive ? '0px 0px 6px 3px rgba(126,178,121,0.2)' : 'inherit'};
    font-size: 0.8rem;
    padding-left: 16px;
    padding-right: ${hasUnit ? '32px' : '0'};
    margin-top: ${marginTop && `${marginTop}px`};
    margin-left: ${marginLeft && `${marginLeft}px`};
    margin-right: ${marginRight && `${marginRight}px`};
    margin-bottom: ${marginBottom && `${marginBottom}px`};
    color: #3d3d3b;
    width: ${width || '100%'};
    box-sizing: border-box;
    transition: all ease-in-out 0.3s;
    min-width: ${width ? width : 'max-content'};

    /* clears the ‘X’ from Internet Explorer */

    &[type='search']::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    &[type='search']::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the ‘X’ from Chrome */

    &[type='search']::-webkit-search-decoration,
    &[type='search']::-webkit-search-cancel-button,
    &[type='search']::-webkit-search-results-button,
    &[type='search']::-webkit-search-results-decoration {
      display: none;
    }

    /* clears arrows on number input */
    /* Firefox */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
      text-align: center;
      padding: 0;
    }

    &[type='time'] {
      padding-left: 12px;
      padding-right: 0;
    }

    // Clear clock on input time
    &[type='time']::-webkit-calendar-picker-indicator {
      //background: #fff;
      width: 24px;

      // display: none;
    }
    

    &::placeholder {
      color: #a0a0a0;
      font-size: 0.8rem;
    }

    &:-webkit-autofill {
      -webkit-background-clip: text;
    }

    &:focus,
    :focus-visible {
      outline-color: #7eb279;
      border: none;
      box-shadow: 0 0 6px 3px rgba(126,178,121,0.2);
    }
  `}
`;

export const InputSearchStyle = styled(StyledInput)<{ height?: string }>`
  ${({ height }) => css`
    padding-left: ${height ? height : '44px'};
    height: ${height};
  `}
`;

export const SelectDropdownExtended = styled.div<{ width?: string }>`
  ${({  width }) => css`
    z-index: 1;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    padding: 8px 0;
    box-sizing: border-box;
    width: ${width};
  `}
`;

export const InputSearchResults = styled(SelectDropdownExtended)`
  ${() => css`
    max-height: 300px;
    overflow-x: auto;
  `}
`;

export const Choice = styled.div<{ withFlag?: boolean; active?: boolean; multiple?: boolean }>`
  ${({  withFlag, active, multiple }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    box-sizing: border-box;
    background: ${active && !multiple && '#7eb279'};
    font-family: sans-serif;

    & * {
      cursor: pointer;
    }

    &:hover {
      background: ${!multiple && '#7eb279'}60;
      color: ${!multiple && '#3d3d3b'};
    }

    & .icon {
      margin: ${withFlag ? `auto 16px auto 0}` : 'auto 0'};
    }
  `}
`;