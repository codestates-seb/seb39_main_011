import React from "react";
import styled from "styled-components";
import { useDaumPostcodePopup } from "react-daum-postcode";
import ButtonPrimary from "../atoms/Button";

const PopupPostcode = ({ setAddress }) => {
  const popUp = useDaumPostcodePopup();

  const handlePostcode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    // console.info("fullAdress: ", fullAddress);
    // console.info("data.zonecode: ", data.zonecode);
    setAddress(fullAddress);
  };

  // 팝업창 중앙정렬 조정
  const popupWidth = 500;
  const popupHeight = 550;

  const popupX = window.screen.width / 2 - popupWidth / 2;
  const popupY = window.screen.height / 2 - popupHeight / 2;

  const handleClick = () => {
    popUp({
      onComplete: handlePostcode,
      left: popupX,
      top: popupY,
    });
  };

  return (
    <Container>
      <ButtonPrimary
        width="70px"
        bgc="lightgray"
        text="주소 검색"
        onClick={handleClick}
      />
    </Container>
  );
};

export default PopupPostcode;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 500px;
    background-color: aliceblue;
  }
`;
