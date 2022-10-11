import React, { useState } from "react";
import styled from "styled-components";
import { FillBtn, OutlineBtn } from "../../atoms/Button";
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

const EditCamping = ({ resData, onRemovePost, onUpdatePost }) => {
  console.log(resData);
  const [isEdit, setIsEdit] = useState(false);

  const [editImages, setEditImages] = useState(resData[0].file_path);
  const [editAddress, setEditAddress] = useState(resData[0].place);

  const initialData = {
    userId: resData[0].userId,
    editName: resData[0].name,
    editPrice: resData[0].price,
    editPhone: resData[0].phone,
    editCapacity: resData[0].capacity,
    editNote: resData[0].note,
  };

  const [editData, setEditData] = useState(initialData);
  const data = {
    ...editData,
    editAddress,
    editImages,
  };

  const { editName, editPrice, editPhone, editCapacity, editNote } = editData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...data, [name]: value });
  };

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleQuitEdit = () => {
    setEditData(initialData);
    toggleIsEdit();
  };

  const handleEdit = () => {
    onUpdatePost(data);
  };

  return (
    <div>
      <Box>
        <div>
          <div className="left_box">
            <span>
              <CampIcon />
            </span>
            {isEdit ? (
              <div>
                <RequiredInput
                  label="캠핑장 이름"
                  name="editName"
                  value={editName}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <Inner>
                <p>캠핑장 이름</p>
                <div>{resData[0]?.name}</div>
              </Inner>
            )}
          </div>
          <div className="right_box">
            <span>
              <CoinIcon />
            </span>
            {isEdit ? (
              <RequiredInput
                type="number"
                label="가격"
                name="editPrice"
                value={editPrice}
                onChange={handleChange}
              />
            ) : (
              <Inner>
                <p>가격</p>
                <div>{resData[0]?.price}</div>
              </Inner>
            )}
          </div>
        </div>
        <div>
          <div className="left_box">
            <span>
              <PhoneIcon width="22" height="22" />
            </span>
            {isEdit ? (
              <RequiredInput
                label="연락처"
                name="editPhone"
                value={editPhone}
                onChange={handleChange}
              />
            ) : (
              <Inner>
                <p>연락처</p>
                <div>{resData[0]?.phone}</div>
              </Inner>
            )}
          </div>
          <div className="right_box">
            <span>
              <TeamIcon />
            </span>
            {isEdit ? (
              <RequiredInput
                label="하루 최대 수용 팀"
                type="number"
                name="editCapacity"
                value={editCapacity}
                onChange={handleChange}
              />
            ) : (
              <Inner>
                <p>하루 최대 수용 팀</p>
                <div>{resData[0]?.capacity}</div>
              </Inner>
            )}
          </div>
        </div>
      </Box>
      <Box>
        <div className="address">
          {isEdit ? (
            <>
              <div className="left">
                <span>
                  <MapIcon />
                </span>
                <div>
                  <RequiredInput
                    label="캠핑장 위치"
                    name="editAddress"
                    onChange={(e) => setEditAddress(e.target.value)}
                    value={editAddress}
                  />
                </div>
              </div>
              <div className="right">
                <PopupPostcode setAddress={setEditAddress} />
              </div>
            </>
          ) : (
            <>
              <div className="left">
                <span>
                  <MapIcon />
                </span>
                <Inner>
                  <p>캠핑장 위치</p>
                  <div>{resData[0]?.place}</div>
                </Inner>
              </div>
            </>
          )}
        </div>
      </Box>
      <Box>
        {isEdit ? (
          <>
            <div className="note">
              <span>
                <NoteIcon />
              </span>
              <p>캠핑장 소개</p>
            </div>
            <TextArea
              name="editNote"
              value={editNote}
              onChange={handleChange}
              rows="8"
            />
          </>
        ) : (
          <>
            <div className="note">
              <span>
                <NoteIcon />
              </span>
              <Inner>
                <p>캠핑장 소개</p>
                <div>{resData[0]?.note}</div>
              </Inner>
            </div>
          </>
        )}
      </Box>
      <Box>
        <Photos>
          <PhotoTitle>Photo</PhotoTitle>
        </Photos>

        <PhotoBox>
          <div>
            {isEdit ? (
              <SingleImageUploader
                images={editImages}
                setImages={setEditImages}
              />
            ) : (
              <img src={resData[0]?.file_path} alt="alt" />
            )}
          </div>
        </PhotoBox>
        <div className="button_box">
          {isEdit ? (
            <>
              <OutlineBtn width="51px" onClick={handleQuitEdit}>
                취소
              </OutlineBtn>
              <FillBtn width="51px" onClick={handleEdit}>
                등록
              </FillBtn>
            </>
          ) : (
            <>
              <OutlineBtn onClick={onRemovePost} width="51px">
                삭제
              </OutlineBtn>
              <OutlineBtn onClick={toggleIsEdit} width="51px">
                수정
              </OutlineBtn>
            </>
          )}
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
    width: 90px;
    height: 90px;
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
