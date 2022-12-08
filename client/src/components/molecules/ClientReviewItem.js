import React, { useState } from "react";
import styled from "styled-components";
import { OutlineBtn2 } from "../atoms/Button";
import StarRender from "../atoms/StarRender";
import moment from "moment";
import TextArea from "../atoms/TextArea";
import StarClick from "../atoms/StarClick";
import SingleImageUploader from "../atoms/SingleImageUploader";
import { ReactComponent as CampIcon } from "../../svg/camp.svg";
import Swal from "sweetalert2";
import { ReactComponent as CampingPic } from "../../svg/camping.svg";

const ClientReviewItem = ({
  item,
  review,
  star,
  file_path,
  userId,
  campId,
  rezId,
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
  const [editImages, setEditImages] = useState(file_path);

  const clickStarHandler = (e) => {
    setEditStar(e);
  };

  const handleRemove = () => {
    Swal.fire({
      icon: "warning",
      text: "해당 리뷰를 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      confirmButtonColor: "#AD8B73",
      cancelButtonColor: "#BEBCBA",
    }).then((result) => {
      if (result.isConfirmed) {
        onRemoveReview(item.revId);
      }
    });
  };

  // 수정 취소
  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditReview(review);
  };

  // 수정 완료
  const handleEdit = () => {
    onUpdateReview(
      item.revId,
      editReview,
      editStar,
      editImages,
      userId,
      campId,
      rezId
    );
    toggleIsEdit();
  };

  return (
    <>
      <ItemBox>
        <ContentBox>
          <InnerBox>
            <CampIcon />
            <span className="camping">{item.campName}</span>
            <span className="hide">{date}</span>
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

            <ButtonBox>
              {isEdit ? (
                <>
                  <OutlineBtn2
                    height="35px"
                    onClick={handleQuitEdit}
                    width="50px"
                  >
                    취소
                  </OutlineBtn2>
                  <OutlineBtn2 height="35px" onClick={handleEdit} width="50px">
                    완료
                  </OutlineBtn2>
                </>
              ) : (
                <>
                  <OutlineBtn2
                    height="35px"
                    onClick={handleRemove}
                    width="50px"
                  >
                    삭제
                  </OutlineBtn2>
                  <OutlineBtn2
                    height="35px"
                    onClick={toggleIsEdit}
                    width="50px"
                  >
                    수정
                  </OutlineBtn2>
                </>
              )}
            </ButtonBox>
          </InnerBox>

          <ImgBox>
            {isEdit ? (
              <SingleImageUploader
                images={editImages}
                setImages={setEditImages}
              />
            ) : (
              <div>
                {item?.file_path ? (
                  <Img src={item?.file_path} alt="camping" />
                ) : (
                  <div className="default_image">
                    <CampingPic viewBox="80 80 210 210" />
                  </div>
                )}
              </div>
            )}

            {isEdit ? (
              <div className="textarea_box">
                <TextArea
                  rows="4"
                  value={editReview}
                  onChange={(e) => setEditReview(e.target.value)}
                />
              </div>
            ) : (
              <div>{review}</div>
            )}
          </ImgBox>
          {item?.comments.length !== 0 && (
            <CommentBox>
              <div className="top-style">
                <div className="title">🙋 사장님 댓글</div>
                <div className="date">{item?.comments[0]?.date}</div>
              </div>
              <div className="message">{item?.comments[0]?.message}</div>
            </CommentBox>
          )}
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
    margin-right: 5px;

    @media ${(props) => props.theme.postMobile} {
      height: 80px;
    }
  }
  .textarea_box {
    width: 100%;
    margin-top: 0.5rem;
  }

  .default_image {
    width: 110px;
    height: 80px;
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
    color: var(--main-color-1);
    margin-right: 5px;

    @media ${(props) => props.theme.postMobile} {
      font-size: 13px;
      font-weight: 500;
    }
  }

  > .camping {
    font-size: 16px;

    @media ${(props) => props.theme.postMobile} {
      font-size: 13px;
      font-weight: 600;
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

const CommentBox = styled.div`
  margin-top: 1rem;

  > .top-style {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    > .title {
      color: var(--main-color-0);
      font-size: 15px;
      font-weight: 600;
      margin-right: 7px;
    }

    > .date {
      color: gray;
    }
  }

  > .message {
    font-size: 13px;
  }
`;
