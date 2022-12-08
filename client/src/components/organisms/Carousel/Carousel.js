import React, { useState, useEffect } from "react";
import * as S from "./style";

const Carousel = ({ picture }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 3000);

    return () => {
      clearInterval();
    };
  }, [count]);

  return (
    <S.CarouselContainer>
      <S.ImgBoxs count={count}>
        <S.Img src={picture} />
        <S.Img src={`${process.env.PUBLIC_URL} /assets/images/camping3.jpg`} />
        <S.Img src={`${process.env.PUBLIC_URL} /assets/images/camping4.jpg`} />
      </S.ImgBoxs>
    </S.CarouselContainer>
  );
};

export default Carousel;
