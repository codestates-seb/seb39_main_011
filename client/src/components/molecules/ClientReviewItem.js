import React, { useState } from "react";
import styled from "styled-components";
import { OutlineBtn } from "../atoms/Button";
import StarRender from "../atoms/StarRender";
import moment from "moment";
import TextArea from "../atoms/TextArea";
import StarClick from "../atoms/StarClick";

import { ReactComponent as CampIcon } from "../../svg/camp.svg";

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
            <CampIcon />
            <span>좋은 캠핑</span>
            <span className="hide">{date}</span>
            {/* <p>{item.name}</p> */}

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

            <ButtonBox>
              {isEdit ? (
                <>
                  <OutlineBtn
                    height="35px"
                    onClick={handleQuitEdit}
                    width="50px"
                  >
                    취소
                  </OutlineBtn>
                  <OutlineBtn height="35px" onClick={handleEdit} width="50px">
                    완료
                  </OutlineBtn>
                </>
              ) : (
                <>
                  <OutlineBtn height="35px" onClick={handleRemove} width="50px">
                    삭제
                  </OutlineBtn>
                  <OutlineBtn height="35px" onClick={toggleIsEdit} width="50px">
                    수정
                  </OutlineBtn>
                </>
              )}
            </ButtonBox>
          </InnerBox>

          <ImgBox>
            <Img src={item.revPhoto} alt="camping" />
            <Img src={item.revPhoto} alt="camping" />

            {isEdit ? (
              <TextArea
                value={editReview}
                onChange={(e) => setEditReview(e.target.value)}
              />
            ) : (
              <div>{review}</div>
            )}
          </ImgBox>
        </ContentBox>
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
  margin: 10px 0;

  div {
    width: 50%;
    margin-right: 5px;

    @media ${(props) => props.theme.postMobile} {
      width: 60%;
      height: 80px;
    }
  }

  @media ${(props) => props.theme.postMobile} {
    gap: 10px;
  }
`;

const ContentBox = styled.div`
  flex: 4;
  font-size: 12px;
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--main-color-0);
    margin: 0 5px;

    @media ${(props) => props.theme.postMobile} {
      font-size: 13px;
      font-weight: 500;
    }
  }

  .hide {
    @media ${(props) => props.theme.postMobile} {
      display: none;
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: aliceblue;

  @media ${(props) => props.theme.postMobile} {
    width: 75px;
    height: 75px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;
  gap: 10px;
`;
