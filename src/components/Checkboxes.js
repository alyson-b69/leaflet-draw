import React from "react";
import { ReactComponent as Erase } from "../assets/erase.svg";
import { ReactComponent as Edit } from "../assets/pen-edit.svg";
import { ReactComponent as Draw } from "../assets/pen-draw.svg";
import styled from "styled-components";

const renderColor = (state) => {
  switch (state){
    case 'edit':
      return '#509be0';
    case 'create':
      return '#7eb279';
    case 'delete':
        return '#f6685d';
    default:
        return 'black';
  }
}

const renderIcon = (state) => {
  switch (state){
    case 'edit':
      return <Edit width={'24px'} />;
    case 'create':
      return <Draw width={'24px'}  />;
    case 'delete':
      return <Erase width={'24px'} />;
    default:
      return <Draw width={'24px'} />;
  }
}

const StyledButton = styled.button`
  border: solid 1px ${props => renderColor(props.name)};
  margin: 8px;
  background: ${props => props?.checked ? renderColor(props.name) : '#fff'};
  color: ${props => props?.checked ? '#fff' : '#000'};
  border-radius: 4px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  & svg {
    margin-right: 8px;
    & > g {
      stroke: ${props => props?.checked ? '#fff' : '#000'};
    }
  }
  
  &:hover {
    background: ${props => renderColor(props.name)};
    color: #fff;
    & svg {
      color: #fff;
      & > g {
        stroke: #fff;
      }
    }
  }
`;

const CheckboxContainer = (props) => (
  <div
    style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
  >
    {props.checkboxes.map((item) => {
      return (
          <StyledButton
              key={item.id}
              name={item.id}
              checked={item.isChecked}
              onClick={props.onChange}
          >
            {renderIcon(item.id)}
            {item.label}
          </StyledButton>
      )
    }
    )}

  </div>
);

export default CheckboxContainer;
