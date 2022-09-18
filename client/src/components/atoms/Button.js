import styled from "styled-components";

export const ButtonPrimary = styled.button`
  color: ${(props) => props.color || "#000000"};
  background: ${(props) => props.bgc || "#ffffff"};
  border: 1px solid ${(props) => props.border || "#e5e5e5"};
  border-radius: ${(props) => props.radius || "3px"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "8px 10.4px"};
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "auto"};
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbgc || "#e5e5e5"};
  }
`;

export const ReservationBtn = styled(ButtonPrimary)`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 1px solid #000000;
  display: none;

  @media (max-width: 820px) {
    display: block;
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
  fontSize,
  fontWeight,
}) => {
  return (
    <ButtonPrimary
      color={color}
      bgc={bgc}
      border={border}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      hoverbgc={hoverbgc}
      radius={radius}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </ButtonPrimary>
  );
};

export default Button;
