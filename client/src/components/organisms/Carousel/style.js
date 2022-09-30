import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const ImgBoxs = styled.div`
  display: flex;
  width: 300%;
  transition: all 1s;
  transform: ${(props) => `translateX(-${props.count * 33.3}%)`};
`;

export const Img = styled.img.attrs({
  alt: "이미지",
})`
  width: 33.3%;
  max-height: 350px;
  min-height: 280px;
  display: block;
  border-radius: 5px;
`;
