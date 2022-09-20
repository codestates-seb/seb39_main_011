import React, { useState, useEffect } from "react";
import * as S from "./style";

const Carousel = () => {
  const [count, setCount] = useState(0);
  // console.log(count);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 3000);

    return () => {
      clearInterval();
    };
  }, [count]);

  return (
    <S.CarouselContainer>
      {/* <S.ImgBoxs>
        <S.ImgBox>
          <S.Img
            src={`${process.env.PUBLIC_URL} /assets/images/camping2.jpg`}
          />
        </S.ImgBox>
        <S.ImgBox>
          <S.Img
            src={`${process.env.PUBLIC_URL} /assets/images/camping3.jpg`}
          />
        </S.ImgBox>
        <S.ImgBox>
          <S.Img
            src={`${process.env.PUBLIC_URL} /assets/images/camping4.jpg`}
          />
          </S.ImgBox>
        </S.ImgBoxs> */}
      <S.ImgBoxs>
        <S.Img src={`${process.env.PUBLIC_URL} /assets/images/camping2.jpg`} />
        <S.Img src={`${process.env.PUBLIC_URL} /assets/images/camping3.jpg`} />
        <S.Img src={`${process.env.PUBLIC_URL} /assets/images/camping4.jpg`} />
      </S.ImgBoxs>
    </S.CarouselContainer>
  );
};

export default Carousel;
