import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import TextArea from "../atoms/TextArea";

const CommentItem = () => {
  return (
    <Layout>
      <p>ㄴ 댓글 작성</p>
      <Box>
        <div>
          <TextAreaStyle />
        </div>
        <BasicBtn width="50px" height="35px">
          등록
        </BasicBtn>
      </Box>
    </Layout>
  );
};

export default CommentItem;

const Layout = styled.div`
  background-color: #f6f6f6;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 20px;

  div {
    flex: 1;
  }
`;

const TextAreaStyle = styled(TextArea)`
  background-color: aliceblue;
`;
