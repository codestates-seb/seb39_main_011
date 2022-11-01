import React from "react";
import styled from "styled-components";
import { OutlineBtn, FillBtn } from "../atoms/Button";
import StarRender from "../atoms/StarRender";
import moment from "moment";
import { ReactComponent as CommentIcon } from "../../svg/review.svg";
import { ReactComponent as IdIcon } from "../../svg/id.svg";

const AdminReviewItem = ({ item, openReviewHandler, onRemoveReview }) => {
  const date = moment(item.date).format("YYYY.MM.DD");

  const handleRemove = () => {
    if (window.confirm("해당 댓글을 삭제하시겠습니까?")) {
      onRemoveReview(item.comments[0]?.commentId);
    }
  };

  return (
    <>
      <ItemBox>
        <ContentBox>
          <InnerBox>
            <IdIcon width="20" height="20" />
            <p>{item.writer}</p>
            <span className="hide">{date}</span>
            <StarRender rating={item.star} />
          </InnerBox>

          <ImgBox>
            <Img src={item?.file_path} alt="camping" />
            <div>{item.review}</div>
            {item.comments.length === 0 && (
              <ButtonBox>
                <OutlineBtn
                  onClick={() => openReviewHandler(item.revId)}
                  height="40px"
                  width="70px"
                  fontSize="12px"
                >
                  댓글 달기
                </OutlineBtn>
              </ButtonBox>
            )}
          </ImgBox>
        </ContentBox>
      </ItemBox>

      {item.comments.length !== 0 && (
        <Layout>
          <div className="title_style">
            ㄴ <CommentIcon fill="var(--main-color-1)" /> 댓글
          </div>
          <Box>
            <div>{item.comments[0].message}</div>
            <div className="button_box">
              <FillBtn onClick={handleRemove} fontSize="11px">
                삭제
              </FillBtn>
              <OutlineBtn fontSize="11px">수정</OutlineBtn>
            </div>
          </Box>
        </Layout>
      )}
    </>
  );
};

export default AdminReviewItem;

const Layout = styled.div`
  background-color: #f6f6f6;
  padding: 1rem;

  .title_style {
    display: flex;
    gap: 3px;
    font-size: 13px;
    font-weight: bold;
    color: var(--main-color-1);
  }
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 1rem;
  }

  .button_box {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-left: 5px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 10px 0;

  div {
    margin-right: 5px;
    flex: 3;

    @media ${(props) => props.theme.postMobile} {
      height: 80px;
    }
  }

  @media ${(props) => props.theme.postMobile} {
    gap: 10px;
  }
`;

const ContentBox = styled.div`
  flex: 5;
  font-size: 12px;
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin: 0 3px 0 5px;
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: var(--main-color-1);
    margin: 0 7px;

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
  width: 85px;
  height: 85px;
  border-radius: 10px;

  @media ${(props) => props.theme.postMobile} {
    width: 75px;
    height: 75px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-right: 1rem;
`;
