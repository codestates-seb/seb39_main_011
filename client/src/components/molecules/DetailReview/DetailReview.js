import React from "react";
import StarRender from "../../atoms/StarRender";
import * as S from "./style";
import IconText from "../../atoms/IconText";

import { ReactComponent as UserIcon } from "./../../../svg/profile.svg";

const DetailReview = ({ review }) => {
  return (
    <S.ReviewContainer>
      <S.Info>
        <IconText
          icon={<UserIcon width="20" height="20" fill="var(--main-color-1)" />}
        >
          {`${review.writer} ${new Date(review.date).toLocaleDateString()}`}
        </IconText>
        <StarRender rating={review.star} />
      </S.Info>
      <S.Content>
        <S.ImgBox>
          <img src={review.file_path} alt="img" />
        </S.ImgBox>
        <div>{review.review}</div>
      </S.Content>
    </S.ReviewContainer>
  );
};

export default DetailReview;
