import React from "react";
import StarRender from "../../atoms/StarRender";
import * as S from "./style";
import IconText from "../../atoms/IconText";

import { ReactComponent as UserIcon } from "./../../../svg/profile.svg";

const DetailReview = () => {
  return (
    <S.ReviewContainer>
      <S.Info>
        <IconText
          icon={<UserIcon width="20" height="20" fill="var(--main-color-1)" />}
        >
          김코딩 2022.09.01
        </IconText>
        <StarRender rating={4.5} />
      </S.Info>
      <S.Content>
        <S.ImgBox>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/camping1.jpg"}
            alt="img"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/camping3.jpg"}
            alt="img"
          />
        </S.ImgBox>
        <div>
          캠핑장이 너무 좋아요~~ 다음에 또 올게요~~! 너무너무 좋아요 베어멜로
          최고😄
        </div>
      </S.Content>
    </S.ReviewContainer>
  );
};

export default DetailReview;
