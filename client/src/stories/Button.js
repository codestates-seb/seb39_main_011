import styled from "styled-components";

const ButtonPrimary = styled.button`
  color: ${(props) => props.color || "#000000"};
  background: ${(props) => props.bgc || "#ffffff"};
  border: 1px solid ${(props) => props.border || "#e5e5e5"};
  border-radius: ${(props) => props.radius || "3px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "8px 10.4px"};
  margin: ${(props) => props.margin || "none"};
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbgc || "#e5e5e5"};
  }
`;

const Button = ({
  text,
  color,
  bgc,
  border,
  radius,
  width,
  height,
  padding,
  margin,
  hoverbgc,
}) => {
  return (
    <ButtonPrimary
      color={color}
      bgc={bgc}
      border={border}
      radius={radius}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      hoverbgc={hoverbgc}
    >
      {text}
    </ButtonPrimary>
  );
};

export default Button;
