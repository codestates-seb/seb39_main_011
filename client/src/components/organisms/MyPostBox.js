import React, { useState } from "react";
import styled from "styled-components";
import { FillBtn, OutlineBtn } from "../atoms/Button";
import RequiredInput from "../atoms/RequiredInput";
import TextArea from "../atoms/TextArea";
import axios from "axios";
import ImageUpload from "../atoms/ImageUpload";
import PopupPostcode from "../molecules/PopupPostcode";

import { ReactComponent as CampIcon } from "../../svg/camp.svg";
import { ReactComponent as PhoneIcon } from "../../svg/phone.svg";
import { ReactComponent as MapIcon } from "../../svg/location.svg";
import { ReactComponent as CoinIcon } from "../../svg/coin.svg";
import { ReactComponent as TeamIcon } from "../../svg/team.svg";
import { ReactComponent as NoteIcon } from "../../svg/note.svg";

const MyPostBox = () => {
  const [camping, setCamping] = useState({});
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    let input = {};
    input[e.target.name] = e.target.value;
    let register = { ...camping, ...input };
    setCamping(register);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post("/admin/post", camping);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuit = () => {
    window.confirm("캠핑장 등록을 취소하시겠습니까?");
    setCamping("");
    setPhoto("");
    setAddress("");
    window.location.reload();
  };

  return (
    <Container>
      <Box>
        <div>
          <div className="left_box">
            <span>
              <CampIcon />
            </span>
            <div>
              <RequiredInput
                label="캠핑장 이름"
                name="name"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="right_box">
            <span>
              <CoinIcon />
            </span>
            <RequiredInput
              label="가격"
              name="price"
              onChange={(e) => handleChange(e)}
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
              name="phone"
              onChange={(e) => handleChange(e)}
              placeholder="하이픈(-)을 제외한 숫자 11자리만 입력해주세요."
            />
          </div>
          <div className="right_box">
            <span>
              <TeamIcon />
            </span>

            <RequiredInput
              label="하루 최대 수용 팀"
              name="capacity"
              type="number"
              onChange={(e) => handleChange(e)}
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
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
          </div>
          <div className="right">
            <PopupPostcode setAddress={setAddress} />
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
        <TextArea name="note" onChange={(e) => handleChange(e)} />
      </Box>

      <Box>
        <Photos>
          <PhotoTitle>Photo</PhotoTitle>
          <div>※ 사진은 최대 3장까지 업로드 가능합니다.</div>
        </Photos>

        <PhotoBox>
          <div>
            <ImageUpload photo={photo} setPhoto={setPhoto} />
            <ImageUpload photo={photo} setPhoto={setPhoto} />
            <ImageUpload photo={photo} setPhoto={setPhoto} />
          </div>

          <div className="button_box">
            <OutlineBtn width="51px" onClick={handleQuit}>
              취소
            </OutlineBtn>
            <FillBtn width="51px" onClick={handleSubmit}>
              등록
            </FillBtn>
          </div>
        </PhotoBox>
        <div className="warning">
          ※ 하나 계정으로 하나의 캠핑장 등록이 가능합니다.
        </div>
      </Box>
    </Container>
  );
};

export default MyPostBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  .note {
    display: flex;
    align-items: center;
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
    color: var(--main-color-0);
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

  .warning {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    font-size: 11px;
    color: #8f8f8f;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button_box {
    margin-top: 2rem;
    gap: 10px;
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
  background-color: var(--main-color-1);
  border: 1px solid var(--main-color-1);
  border-radius: 20px;
`;
