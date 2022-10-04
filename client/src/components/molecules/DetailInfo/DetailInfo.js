import React from "react";
import * as S from "./style";

import IconText from "../../atoms/IconText";
import KakaoMap from "../../atoms/KakaoMap";

import { ReactComponent as CampIcon } from "./../../../svg/camp.svg";
import { ReactComponent as PhoneIcon } from "./../../../svg/phone.svg";
import { ReactComponent as LocationIcon } from "./../../../svg/location.svg";
import { ReactComponent as CoinIcon } from "./../../../svg/coin.svg";

const DetailInfo = () => {
  return (
    <S.TabInfoContainer>
      <KakaoMap />
      <S.Info>
        <IconText icon={<CampIcon width="20" height="20" />}>캠핑장:</IconText>
        <IconText icon={<PhoneIcon width="20" height="20" />}>연락처:</IconText>
        <IconText icon={<LocationIcon width="20" height="20" />}>
          주소:
        </IconText>
        <IconText icon={<CoinIcon width="20" height="20" />}>가격:</IconText>
      </S.Info>

      <S.Content>
        <IconText icon={<CampIcon />}>⭕⭕ 캠핑장을 소개합니다.</IconText>
        <div>
          <div>인사말</div>
          <div>안녕하세요. 좋은 캠핑장 입니다. 즐거운 캠핑되시길 바랍니다.</div>
        </div>
        <div>
          <div>시설 및 레저</div>
          <ul>
            <li>기본 시설: 화장실, 샤워실, 개수대, 매점</li>
            <li>부가 시설: 수영장, 족구장, 산책로</li>
            <li>인근 레저: 물놀이, 등산, 기타</li>
          </ul>
        </div>
        <div>
          <div>이용시간</div>
          <ul>
            <li>체크인: 15:00</li>
            <li>체크아웃: 12:00</li>
            <li>매너 타임: 21:00 ~ 06:00</li>
          </ul>
        </div>
        <div>
          <div>주의사항</div>
          <div>상대방을 배려하며 캠핑을 즐깁시다.</div>
        </div>
      </S.Content>
    </S.TabInfoContainer>
  );
};

export default DetailInfo;
