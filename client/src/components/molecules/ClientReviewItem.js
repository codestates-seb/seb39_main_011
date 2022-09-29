import React, { useState } from "react";
import styled from "styled-components";
import { OutlineBtn } from "../atoms/Button";
import StarRender from "../atoms/StarRender";
import moment from "moment";
import TextArea from "../atoms/TextArea";
import StarClick from "../atoms/StarClick";

const ClientReviewItem = ({
  item,
  review,
  star,
  onRemoveReview,
  onUpdateReview,
}) => {
  const date = moment(item.date).format("YYYY.MM.DD");

  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  const [editReview, setEditReview] = useState(review);
  const [editStar, setEditStar] = useState(star);

  const clickStarHandler = (e) => {
    setEditStar(e);
  };

  const handleRemove = () => {
    if (window.confirm("해당 리뷰를 삭제하시겠습니까?")) {
      onRemoveReview(item.rev_id);
      window.location.reload();
    }
  };

  // 수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditReview(review);
  };

  // 수정 완료
  const handleEdit = () => {
    onUpdateReview(item.rev_id, editReview, editStar);
    toggleIsEdit();
  };

  return (
    <>
      <ItemBox>
        <ContentBox>
          <InnerBox>
            <p>{item.name}</p>

            {isEdit ? (
              <>
                <StarClick
                  value={editStar}
                  clickStarHandler={clickStarHandler}
                  onChange={(e) => setEditStar(e.target.value)}
                  star={star - 1}
                />
              </>
            ) : (
              <>
                <StarRender rating={star} />
              </>
            )}
          </InnerBox>

          <p>{date}</p>
          <ImgBox>
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />
          </ImgBox>
          {isEdit ? (
            <>
              <TextArea
                value={editReview}
                onChange={(e) => setEditReview(e.target.value)}
              />
            </>
          ) : (
            <p>{review}</p>
          )}
        </ContentBox>

        <ButtonBox>
          {isEdit ? (
            <>
              <OutlineBtn onClick={handleQuitEdit} width="50px">
                취소
              </OutlineBtn>
              <OutlineBtn onClick={handleEdit} width="50px">
                완료
              </OutlineBtn>
            </>
          ) : (
            <>
              <OutlineBtn onClick={handleRemove} width="50px">
                삭제
              </OutlineBtn>
              <OutlineBtn onClick={toggleIsEdit} width="50px">
                수정
              </OutlineBtn>
            </>
          )}
        </ButtonBox>
      </ItemBox>
      <hr />
    </>
  );
};

export default ClientReviewItem;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 1rem;
  margin: 1rem 0;
`;

const ContentBox = styled.div`
  flex: 3;
  font-size: 12px;

  p {
    margin: 7px;
    margin-left: 1rem;
  }
`;

const InnerBox = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: bold;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
  gap: 10px;
`;
