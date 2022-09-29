import React, { useState } from "react";
import styled from "styled-components";
import { FillBtn, OutlineBtn } from "../atoms/Button";
import BasicInput from "../atoms/BasicInput";

import { ReactComponent as ProfilePic } from "../../svg/profile.svg";
import { ReactComponent as IdIcon } from "../../svg/id.svg";
import { ReactComponent as NameIcon } from "../../svg/name.svg";
import { ReactComponent as EmailIcon } from "../../svg/email.svg";
import { ReactComponent as PhoneIcon } from "../../svg/phone.svg";

const MyInfoBox = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(user[0].id);
  const [editName, setEditName] = useState(user[0].name);
  const [editEmail, setEditEmail] = useState(user[0].email);
  const [editPhone, setEditPhone] = useState(user[0].phone);

  const toggleEdit = () => {
    setIsEdit(true);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditId(user[0].id);
    setEditName(user[0].name);
    setEditEmail(user[0].email);
    setEditPhone(user[0].phone);
  };

  const handleEdit = () => {};

  return (
    <Container>
      <ProfileBox>
        <ProfilePic width="130" height="130" />
      </ProfileBox>
      <InfoBox>
        <Label>
          <div>
            <IdIcon />
            <p>아이디</p>
          </div>
          <div>
            <NameIcon />
            <p>이름</p>
          </div>
          <div>
            <EmailIcon />
            <p>이메일</p>
          </div>
          <div>
            <PhoneIcon width="30" height="30" />
            <p>연락처</p>
          </div>
        </Label>
        <Info>
          {isEdit ? (
            <div className="edit">
              <BasicInput
                value={editId}
                onChange={(e) => setEditId(e.target.value)}
              />
              <BasicInput
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <BasicInput
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <BasicInput
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
            </div>
          ) : (
            <div className="info">
              <div>{user[0].id}</div>
              <div>{user[0].name}</div>
              <div>{user[0].email}</div>
              <div>{user[0].phone}</div>
            </div>
          )}
        </Info>
      </InfoBox>
      <ButtonBox>
        {isEdit ? (
          <>
            <OutlineBtn onClick={handleQuitEdit}>취소</OutlineBtn>
            <FillBtn onClick={() => alert("회원정보 수정을 완료하였습니다.")}>
              완료
            </FillBtn>
          </>
        ) : (
          <>
            <FillBtn onClick={toggleEdit}>수정</FillBtn>
            <OutlineBtn
              onClick={() => window.confirm("정말로 탈퇴하시겠습니까?")}
            >
              회원탈퇴
            </OutlineBtn>
          </>
        )}
      </ButtonBox>
    </Container>
  );
};

export default MyInfoBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileBox = styled.div`
  margin-top: 2rem;
`;

const InfoBox = styled.div`
  display: flex;
  margin: 2.5rem 0;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-right: 2rem;
`;

const Label = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--main-color-0);
  font-weight: 600;
  font-size: 19px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  p {
    margin-left: 7px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 45px;
  }

  .edit {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
