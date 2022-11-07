import React, { useEffect, useState } from "react";
import * as S from "./style";
import DetailContent from "../../components/templates/DetailContent/DetailContent";
import DetailAside from "../../components/templates/DetailAside/DetailAside";
import { useMediaQuery } from "react-responsive";
import useScrollTop from "../../utils/useScrollTop";
import { useParams } from "react-router-dom";

import { instance } from "../../apis/instance";

const Detail = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 820 });
  const [campInfo, setCamp] = useState({});
  const [campReviews, setCampReviews] = useState([]);
  const [maximumAcceptance, setMaximumAcceptance] = useState({});
  const campId = useParams();

  useScrollTop();

  const getCampingData = async () => {
    try {
      const { data } = await instance.get(`/detail/${campId.id}`);
      setCamp(data.dto);
      setCampReviews(data.reviews);
      setMaximumAcceptance(data.map);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCampingData();
  }, []);

  return (
    <S.DetailContainer>
      <DetailContent
        campInfo={campInfo}
        campReviews={campReviews}
        campId={campId}
        maximumAcceptance={maximumAcceptance}
      />
      {!isTabletOrMobile ? (
        <DetailAside
          campId={campId}
          campPrice={campInfo.price}
          capacity={campInfo.capacity}
          maximumAcceptance={maximumAcceptance}
        />
      ) : null}
    </S.DetailContainer>
  );
};

export default Detail;
