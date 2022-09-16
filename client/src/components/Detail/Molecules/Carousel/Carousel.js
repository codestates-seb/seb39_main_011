import React from "react";
import styled from "styled-components";

const Carousel = () => {
  return (
    <Container>
      <Img></Img>
    </Container>
  );
};

const Container = styled.div``;

const Img = styled.img.attrs({
  src: "/assets/images/camping1.jpg",
  alt: "이미지",
})`
  width: 100%;
  height: 300px;
  display: block;
`;

export default Carousel;
