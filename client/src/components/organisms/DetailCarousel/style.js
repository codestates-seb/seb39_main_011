import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ImgBoxs = styled.div`
  display: flex;
  width: 300%;
  /* transform: translateX(-66.6%); */
`;

// export const ImgBox = styled.div`
//   width: 33.3%;
//   border: 2px solid red;
// `;

export const Img = styled.img.attrs({
  // src: `${process.env.PUBLIC_URL + "/assets/images/camping2.jpg"}`,
  alt: "이미지",
})`
  width: 33.3%;
  max-height: 350px;
  min-height: 280px;
  display: block;
  border-radius: 5px 5px 0 0;
`;
