import React from "react";
import styled from "styled-components";
import { OutlineBtn } from "../atoms/Button";
import { useLocation } from "react-router-dom";
import { instance } from "../../apis/instance";
import Toast from "../atoms/Toast";

import { ReactComponent as ProfileIcon } from "../../svg/profile.svg";
import { ReactComponent as CampingIcon } from "../../svg/camp.svg";
import { ReactComponent as PhoneIcon } from "../../svg/phone.svg";
import { ReactComponent as CalendarIcon } from "../../svg/calendar.svg";
import { ReactComponent as CoinIcon } from "../../svg/coin.svg";
import { ReactComponent as NoteIcon } from "../../svg/note.svg";
import { ReactComponent as CampingPic } from "../../svg/camping.svg";

const RezItem = ({ item, openReviewHandler }) => {
  const { pathname } = useLocation();

  const deleteReservation = async () => {
    try {
      await instance.delete(`/client/info/rez/${item.rezId}`);
      Toast.fire({
        icon: "success",
        title: "예약이 취소되었습니다.",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ItemBox>
        <ImgBox>
          {item?.campFile_path ? (
            <Img src={item?.campFile_path} alt="camping" />
          ) : (
            <CampingPic viewBox="80 50 210 210" />
          )}
        </ImgBox>
        <ContentBox>
          {pathname === "/client/mypage/rez" ||
          pathname === "/client/mypage/pastrez" ? (
            <div className="inner">
              <div>
                <CampingIcon />
              </div>
              <div>캠핑장: {item.campName}</div>
            </div>
          ) : (
            <div className="inner">
              <div>
                <ProfileIcon
                  width="18"
                  height="18"
                  fill="var(--main-color-1)"
                />
              </div>
              <div>예약자: {item.name}</div>
            </div>
          )}

          <div className="inner">
            <div>
              <PhoneIcon width="20" height="20" />
            </div>
            <div>연락처: {item.phone}</div>
          </div>
          <div className="inner">
            <div>
              <CalendarIcon />
            </div>
            <div>이용 날짜: {item.date}</div>
          </div>
          <div className="inner">
            <div>
              <CoinIcon />
            </div>
            <div>결제 금액: {item.price}</div>
          </div>
          <div className="inner">
            <div>
              <NoteIcon />
            </div>
            <div>요청 사항: {item.note}</div>
          </div>
        </ContentBox>
        <ButtonBox>
          <OutlineBtn
            onClick={
              pathname === "/client/mypage/rez" ||
              pathname === "/admin/mypage/rez"
                ? () => deleteReservation()
                : () => openReviewHandler(item.rezId)
            }
          >
            {pathname === "/client/mypage/pastrez" ? "리뷰 작성" : "예약 취소"}
          </OutlineBtn>
        </ButtonBox>
      </ItemBox>
      <hr />
    </div>
  );
};

export default RezItem;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: 10px;
`;

const ContentBox = styled.div`
  flex: 2.5;
  font-size: 12px;

  .inner {
    display: flex;
    align-items: center;

    div {
      margin-right: 5px;
    }
  }

  p {
    margin: 7px;
    margin-left: 1rem;
  }

  @media ${(props) => props.theme.rezMobile} {
    font-size: 11px;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;

  @media ${(props) => props.theme.rezMobile} {
    width: 85px;
    height: 85px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  margin-right: 1rem;

  @media ${(props) => props.theme.rezMobile} {
    width: 85px;
    margin-right: 0;
  }
`;
