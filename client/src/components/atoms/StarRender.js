import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRender = ({ rating }) => {
  const [percent, setPercent] = useState("20%");

  const ratingConversion = (rating) => {
    let result = (rating / 5) * 100;
    setPercent(`${result}%`);
  };

  useEffect(() => {
    ratingConversion(rating);
  }, [rating]);

  return (
    <StarContainer>
      <Yellow percent={percent}>
        <FontAwesomeIcon icon={faStar} color={"#f7b603"} />
        <FontAwesomeIcon icon={faStar} color={"#f7b603"} />
        <FontAwesomeIcon icon={faStar} color={"#f7b603"} />
        <FontAwesomeIcon icon={faStar} color={"#f7b603"} />
        <FontAwesomeIcon icon={faStar} color={"#f7b603"} />
      </Yellow>
      <Gray>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </Gray>
    </StarContainer>
  );
};

const StarContainer = styled.div`
  width: 67.5px;
  position: relative;
  overflow: hidden;
`;

const Yellow = styled.div`
  width: ${(props) => props.percent || "20%"};
  position: absolute;
  z-index: 999;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  svg {
  }
`;

const Gray = styled.div`
  color: #e5e5e5;
`;

export default StarRender;
