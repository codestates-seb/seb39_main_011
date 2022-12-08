import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const { kakao } = window;

const KakaoMap = ({ camp }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 600 });
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    var geocoder = new kakao.maps.services.Geocoder();

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(
      // "제주특별자치도 제주시 첨단로 242",
      // "부산 해운대구 APEC로 17 (우동, 센텀리더스마크)",
      `${camp}`,
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            text: "텍스트를 표시할 수 있어요!",
            image: markerImage,
          });
          marker.setMap(map);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );
  }, [camp]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: isTabletOrMobile ? "200px" : "300px" }}
      ></div>
    </>
  );
};

export default KakaoMap;
