import React from "react";
import styled from "styled-components";
import { BasicBtn } from "../atoms/Button";
import ReadTextField from "../atoms/ReadTextField";

const MyInfoBox = () => {
  return (
    <>
      <InfoBox>
        <ReadTextField label="아이디" value="abc123" />
        <ReadTextField label="이름" value="김코딩" />
        <ReadTextField label="이메일" value="abc123@naver.com" />
        <ReadTextField label="연락처" value="010-1234-5678" />
      </InfoBox>
      <ButtonBox>
        <BasicBtn width="75px">수정하기</BasicBtn>
      </ButtonBox>
    </>
  );
};

export default MyInfoBox;

const InfoBox = styled.div``;
const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 3rem;
`;
