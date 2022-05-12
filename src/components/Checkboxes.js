import React from "react";
import { ReactComponent as Erase } from "../assets/erase.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 1px red;
  margin: 8px 4px;
  background: #fff;
  border-radius: 4px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px;
`;

const CheckboxContainer = (props) => (
  <div
    style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
  >
    {props.checkboxes.map((item) => (
      <StyledButton
        key={item.id}
        // active={item.isChecked}
        onClick={props.onChange}
      >
        <Erase />
        {item.label}
      </StyledButton>
    ))}
  </div>
);

export default CheckboxContainer;
