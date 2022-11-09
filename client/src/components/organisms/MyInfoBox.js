import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FillBtn, OutlineBtn2 } from "../atoms/Button";
import BasicInput from "../atoms/BasicInput";
import Toast from "../atoms/Toast";

import { ReactComponent as ProfilePic } from "../../svg/profile.svg";
import { ReactComponent as IdIcon } from "../../svg/id.svg";
import { ReactComponent as EmailIcon } from "../../svg/email.svg";
import { ReactComponent as PhoneIcon } from "../../svg/phone.svg";
import Swal from "sweetalert2";
// import { ReactComponent as NameIcon } from "../../svg/name.svg";

const MyInfoBox = ({ user, onEditInfo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  useEffect(() => {
    setEditName(user.name);
    setEditEmail(user.email);
    setEditPhone(user.phone);
  }, [user]);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditPhone(user.phone);
  };

  const userInfoData = {
    editName,
    editEmail,
    editPhone,
  };

  const handleEdit = () => {
    onEditInfo(userInfoData);
  };

  const userDeleteHandler = () => {
    Swal.fire({
      icon: "info",
      text: "준비중인 기능입니다.",
    });
  };

  return (
    <Container>
      <ProfileBox>
        <ProfilePic width="130" height="130" fill="var(--main-color-2)" />
      </ProfileBox>
      <InfoBox>
        <Label>
          <div>
            <IdIcon width="25" height="25" />
            <p>이름</p>
          </div>
          <div>
            <EmailIcon />
            <p>이메일</p>
          </div>
          <div>
            <PhoneIcon width="25" height="25" />
            <p>연락처</p>
          </div>
        </Label>
        <Info>
          {isEdit ? (
            <div className="edit">
              <BasicInput
                name="editName"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <BasicInput
                width="200px"
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
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </div>
          )}
        </Info>
      </InfoBox>
      <ButtonBox>
        {isEdit ? (
          <>
            <OutlineBtn2 onClick={handleQuitEdit}>취소</OutlineBtn2>
            <FillBtn onClick={handleEdit}>완료</FillBtn>
          </>
        ) : (
          <>
            <FillBtn onClick={toggleEdit}>수정</FillBtn>
            <OutlineBtn2 onClick={userDeleteHandler}>회원 탈퇴</OutlineBtn2>
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
  margin-top: 4rem;
`;

const InfoBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 4rem 0;

  @media ${(props) => props.theme.mobile} {
    width: 290px;
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding-right: 2rem;
`;

const Label = styled.div`
  flex: 1;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: var(--main-color-1);
  font-weight: 600;
  font-size: 17px;

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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 48px;
  }

  .edit {
    display: flex;
    flex-direction: column;
    gap: 23px;
  }
`;
