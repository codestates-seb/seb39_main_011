import React, { useState } from "react";
import styled from "styled-components";
import { OutlineBtn, FillBtn } from "../../atoms/Button";
import RequiredInput from "../../atoms/RequiredInput";
import TextArea from "../../atoms/TextArea";
import PopupPostcode from "../PopupPostcode";
import SingleImageUploader from "../../atoms/SingleImageUploader";
import { ReactComponent as CampIcon } from "../../../svg/camp.svg";
import { ReactComponent as PhoneIcon } from "../../../svg/phone.svg";
import { ReactComponent as MapIcon } from "../../../svg/location.svg";
import { ReactComponent as CoinIcon } from "../../../svg/coin.svg";
import { ReactComponent as TeamIcon } from "../../../svg/team.svg";
import { ReactComponent as NoteIcon } from "../../../svg/note.svg";

const EditCamping = ({ resData, onUpdatePost, getPost, onRemovePost }) => {
  console.log("Edit", resData);

  const [editName, setEditName] = useState(resData?.name);
  const [editPrice, setEditPrice] = useState(resData?.price);
  const [editPhone, setEditPhone] = useState(resData?.phone);
  const [editCapacity, setEditCapacity] = useState(resData?.capacity);
  const [editPlace, setEditPlace] = useState(resData?.place);
  const [editNote, setEditNote] = useState(resData?.note);
  const [editPhoto, setEditPhoto] = useState(resData?.file_path);

  const userId = localStorage.getItem("userId");

  const editData = {
    name: editName,
    price: editPrice,
    phone: editPhone,
    capacity: editCapacity,
    place: editPlace,
    note: editNote,
    file_path: editPhoto,
    userId: userId,
  };

  console.info("editData", editData);

  console.log("editName", editName);

  const [isEdit, setIsEdit] = useState(false);

  // 수정 버튼 클릭시 수정 input 화면으로 변경
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  // 수정 취소
  const hanldeQuitEdit = () => {
    setIsEdit(false);
    setEditName(resData?.name);
    setEditPrice(resData?.price);
    setEditPhone(resData?.phone);
    setEditCapacity(resData?.capacity);
    setEditPlace(resData?.place);
    setEditNote(resData?.note);
    setEditPhoto(resData?.file_path);
  };

  console.log("수정 resData", resData.name);
  console.log("isEdit", isEdit);

  // 수정 완료
  const handleEdit = () => {
    onUpdatePost(
      // editName,
      // editPrice,
      // editPhone,
      // editCapacity,
      // editPlace,
      // editNote,
      // editPhoto
      editData
    );
    toggleIsEdit();
  };

  console.info("name", editName);

  return (
    <div>
      <Box>
        <div>
          <div className="left_box">
            <span>
              <CampIcon />
            </span>
            {isEdit ? (
              <>
                <div>
                  <RequiredInput
                    label="캠핑장 이름"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <Inner>
                  <p>캠핑장 이름</p>
                  <div>{resData?.name}</div>
                </Inner>
              </>
            )}
          </div>
          <div className="right_box">
            <span>
              <CoinIcon />
            </span>
            <RequiredInput
              type="number"
              label="가격"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="left_box">
            <span>
              <PhoneIcon width="22" height="22" />
            </span>
            <RequiredInput
              label="연락처"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
          </div>
          <div className="right_box">
            <span>
              <TeamIcon />
            </span>
            <RequiredInput
              label="하루 최대 수용 팀"
              value={editCapacity}
              type="number"
              onChange={(e) => setEditCapacity(e.target.value)}
            />
          </div>
        </div>
      </Box>
      <Box>
        <div className="address">
          <div className="left">
            <span>
              <MapIcon />
            </span>
            <div>
              <RequiredInput
                label="캠핑장 위치"
                name="place"
                onChange={(e) => setEditPlace(e.target.value)}
                value={editPlace}
              />
            </div>
          </div>
          <div className="right">
            <PopupPostcode setAddress={setEditPlace} />
          </div>
        </div>
      </Box>
      <Box>
        <div className="note">
          <span>
            <NoteIcon />
          </span>
          <p>캠핑장 소개</p>
        </div>

        <TextArea
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
          rows="8"
        />
      </Box>
      <Box>
        <Photos>
          <PhotoTitle>Photo</PhotoTitle>
          <div>※ 사진은 최대 1장까지 업로드 가능합니다.</div>
        </Photos>

        <PhotoBox>
          <div>
            <SingleImageUploader images={editPhoto} setImages={setEditPhoto} />
          </div>
          <div className="button_box">
            {isEdit ? (
              <>
                {" "}
                <OutlineBtn width="51px" onClick={hanldeQuitEdit}>
                  취소
                </OutlineBtn>
                <FillBtn width="51px" onClick={handleEdit}>
                  완료
                </FillBtn>
              </>
            ) : (
              <>
                {" "}
                <OutlineBtn onClick={onRemovePost} width="51px">
                  삭제
                </OutlineBtn>
                <OutlineBtn onClick={toggleIsEdit} width="51px">
                  수정
                </OutlineBtn>
              </>
            )}
          </div>
        </PhotoBox>
        <div className="warning">
          ※ 하나 계정으로 하나의 캠핑장 등록이 가능합니다.
        </div>
      </Box>
    </div>
  );
};

export default EditCamping;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  .note {
    margin-top: 5px;
    display: flex;
  }

  div {
    display: flex;
    align-items: flex-start;

    span {
      margin: 8px 6px 0 0;
    }

    .left_box {
      display: flex;
      flex: 2.8;
      padding-right: 1rem;

      div {
        width: 100%;
      }
    }

    .right_box {
      display: flex;
      flex: 2;

      div {
        width: 100%;
      }
    }
  }

  label {
    font-weight: bold;

    @media ${(props) => props.theme.mobile} {
      font-size: 16px;
    }
  }

  p {
    font-size: 13px;
    font-weight: bold;
    color: var(--main-color-1);
    margin-top: 10px;

    @media ${(props) => props.theme.mobile} {
      font-size: 12px;
    }
  }

  .address {
    display: flex;

    .left {
      flex: 1.35;
      margin-right: 5px;

      div {
        width: 100%;
      }
    }

    .right {
      flex: 1;
      height: 100%;
      margin-top: 1.3rem;
    }
  }

  .button_box {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    gap: 10px;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
    margin: 10px;
    background-color: antiquewhite;

    @media ${(props) => props.theme.postMobile} {
      margin: 7px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Photos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  div {
    margin-top: 1.1rem;
    font-size: 11px;
    color: #8f8f8f;
  }
`;

const PhotoTitle = styled.span`
  width: 65px;
  height: auto;
  padding: 7px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  background-color: var(--main-color-3);
  border: 1px solid var(--main-color-3);
  border-radius: 20px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }
`;
