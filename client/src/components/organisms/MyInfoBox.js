import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../atoms/Button";
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
        <ButtonPrimary
          width="75px"
          height="40px"
          bgc="#ADADAD"
          color="#fff"
          border="#ADADAD"
          radius="5px"
          padding="0 10px"
          margin="10px 0"
          fontSize="15px"
          fontWeight="700"
          text="수정하기"
          hoverbgc="#989898"
        />
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
