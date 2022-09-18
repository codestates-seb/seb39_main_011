import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const Img = styled.img.attrs({
  src: "/assets/images/camping1.jpg",
  alt: "이미지",
})`
  width: 100%;
  max-height: 300px;
  min-height: 280px;
  display: block;
  border-radius: 5px 5px 0 0;
`;
