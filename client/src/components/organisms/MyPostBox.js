import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import RequiredInput from "../atoms/RequiredInput";
import TextArea from "../atoms/TextArea";

const MyPostBox = () => {
  return (
    <Container>
      <Box>
        <RequiredInput label="캠핑장 이름" />
        <RequiredInput label="연락처" />
        <RequiredInput label="캠핑장 위치" />
        <RequiredInput label="가격" />
        <TextArea label="캠핑장 소개" />
      </Box>

      <Box>
        <RequiredInput label="하루 최대 수용 팀" type="number" />
        <div>
          <p>사진 추가</p>
          <PhotoBox>
            <div />
            <div />
            <div />
          </PhotoBox>
        </div>
        <TextArea label="주의사항" height="50px" />
        <ButtonBox>
          <BasicBtn>등록하기</BasicBtn>
        </ButtonBox>
      </Box>
    </Container>
  );
};

export default MyPostBox;

const Container = styled.div`
  display: flex;
  padding: 1rem;
`;

const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;

  label {
    font-weight: bold;
    color: #00000099;
  }

  p {
    font-size: 13px;
    font-weight: bold;
    color: #00000099;
    margin-top: 10px;
  }
`;

const PhotoBox = styled.div`
  display: flex;

  div {
    width: 65px;
    height: 65px;
    border: 1px solid #d9d9d9;
    margin: 10px 10px 0 0;
    background-color: #d9d9d9;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;
