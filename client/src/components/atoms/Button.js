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
  background: ${(props) => props.bgc || "var(--main-color-2)"};
  height: ${(props) => props.height || "43px"};
  width: ${(props) => props.height || "100%"};
  border: 2px solid ${(props) => props.border || "var(--main-color-2)"};
  border-radius: ${(props) => props.radius || "7px"};
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverBgc || "var(--main-color-1)"};
    border: 1px solid ${(props) => props.hoverBorder || "var(--main-color-1)"};
    color: ${(props) => props.hoverColor || "#fff"};
  }
`;

export const LoginTabBtn = styled.button`
  color: var(--main-color-1);
  background-color: #fff;
  height: ${(props) => props.height || "43px"};
  width: ${(props) => props.height || "100%"};
  border: 2px solid var(--main-color-1);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border-radius: ${(props) => props.radius || "7px"};
`;

export const FillBtn = styled(ButtonPrimary)`
  color: #fff;
  background: var(--main-color-1);
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.height || "auto"};
  border: 2px solid var(--main-color-1);
  border-radius: 7px;
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.fontSize || "15px"};
  font-weight: ${(props) => props.fontWeight || "600"};

  &:hover {
    background-color: ${(props) => props.hoverBgc || "var(--main-color-5)"};
    border: 2px solid ${(props) => props.hoverBorder || "var(--main-color-5)"};
  }

  @media ${(props) => props.theme.rezMobile} {
    width: 55px;
    margin-right: 0;
  }
`;

export const OutlineBtn = styled(ButtonPrimary)`
  color: var(--main-color-1);
  background: #fff;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  border: 2px solid var(--main-color-1);
  border-radius: 7px;
  padding: ${(props) => props.padding || "none"};
  margin: ${(props) => props.margin || "none"};
  font-size: ${(props) => props.fontSize || "13px"};
  font-weight: ${(props) => props.fontWeight || "600"};

  &:hover {
    color: ${(props) => props.hoverColor || "#fff"};
    background-color: ${(props) => props.hoverBgc || "var(--main-color-5)"};
    border: 2px solid ${(props) => props.hoverBorder || "var(--main-color-5)"};
  }

  @media ${(props) => props.theme.rezMobile} {
    width: 55px;
    margin-right: 0;
  }
`;

export const OutlineBtnS = styled(OutlineBtn)`
  font-size: 11px;
  width: 66px;
  @media ${(props) => props.theme.rezMobile} {
    width: 66px;
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
