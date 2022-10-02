import React from "react";
import styled from "styled-components";
import { FillBtn } from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import { ReactComponent as CommentIcon } from "../../svg/review.svg";

const CommentItem = () => {
  return (
    <Layout>
      <div className="title_style">
        <div>ㄴ</div>
        <div>
          <CommentIcon fill="var(--main-color-1)" />
        </div>
        <div>댓글 작성</div>
      </div>
      <Box>
        <div className="textarea_style">
          <TextArea rows="4" />
          <FillBtn>등록</FillBtn>
        </div>
      </Box>
    </Layout>
  );
};

export default CommentItem;

const Layout = styled.div`
  background-color: #f6f6f6;
  padding: 1rem;

  .title_style {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 15px;
    font-weight: bold;
    color: var(--main-color-1);
  }

  .textarea_style {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  div {
    flex: 1;
  }
`;
