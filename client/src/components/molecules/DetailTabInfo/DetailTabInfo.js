import React from "react";
import * as S from "./style";

const DetailTabInfo = () => {
  return (
    <S.Content>
      <S.EssentialInfo>
        <div className="important_img"></div>
        <div className="important_content">
          <div>캠핑장: 좋은 탬핑</div>
          <div>연락처: 010-1234-5678</div>
          <div>주소: 경기도 가평군 가평읍 개곡리</div>
          <div>가격: 50,000 원</div>
        </div>
      </S.EssentialInfo>
      <div>
        <div>캠핑장 소개</div>
        <div>안녕하세요. 좋은 캠핑장 입니다. 즐거운 캠핑되시길 바랍니다.</div>
        <div>시설 및 레저</div>
        <div>기본 시설: 화장실, 샤워실, 개수다, 매점</div>
        <div>부가 시설: 수영장, 족구장, 산책로</div>
        <div>인근 레저: 물놀이, 등산, 기타</div>
        <div>체크인: 15:00</div>
        <div>체크아웃: 12:00</div>
        <div>매너 타임: 21:00 ~ 06:00</div>
        <div>주의사항</div>
        <div>
          주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항주의사항
        </div>
      </div>
    </S.Content>
  );
};

export default DetailTabInfo;
