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
      {review.comments.length !== 0 ? (
        <S.Answer>
          <div>⨽ 사장님 댓글 {review.comments[0].date}</div>
          <div>{review.comments[0].message}</div>
        </S.Answer>
      ) : null}
    </S.ReviewContainer>
  );
};

export default DetailReview;
