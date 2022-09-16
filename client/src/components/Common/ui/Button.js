import styled from "styled-components";

export const ButtonPrimary = styled.button`
  color: ${(props) => props.color || "#000000"};
  background: ${(props) => props.background || "#ffffff"};
  border: 1px solid ${(props) => props.border || "#e5e5e5"};
  border-radius: 3px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "8px 10.4px"};
  margin: ${(props) => props.margin || "none"};
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbackground || "#e5e5e5"};
  }
`;

export const LoginButton = styled.button`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};

  color: ${(props) => props.color || "#fffff"};
  background: ${(props) => props.background || "#D9D9D9"};
  border: 1px solid ${(props) => props.border || "#D9D9D9"};
  border-radius: 5px;

  padding: ${(props) => props.padding || "10px 0"};
  margin: ${(props) => props.margin || "10px 0"};
  font-size: 12px;
`;
