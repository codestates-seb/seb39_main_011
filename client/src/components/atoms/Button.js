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

export const LoginBtn = styled(ButtonPrimary)`
  color: ${(props) => props.color || "#fff"};
  background: ${(props) => props.bgc || "#CEAB93"};
  height: ${(props) => props.height || "43px"};
  width: ${(props) => props.height || "100%"};
  border: 2px solid ${(props) => props.border || "#CEAB93"};
  border-radius: ${(props) => props.radius || "7px"};
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBgc || "#AD8B73"};
    border: 1px solid ${(props) => props.hoverBorder || "#AD8B73"};
    color: ${(props) => props.hoverColor || "#fff"};
  }
`;

export const BasicBtn = styled(ButtonPrimary)`
  width: ${(props) => props.width || "85px"};
  height: 35px;
  background-color: #adadad;
  color: #fff;
  border: #adadad;
  border-radius: 5px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 13px;
  font-weight: 700;

  &:hover {
    background-color: #989898;
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

export const CalendarBtn = styled(ButtonPrimary)`
  line-height: 3px;
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
  onClick,
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
      onClick={onClick}
    >
      {text}
    </ButtonPrimary>
  );
};

export default Button;
