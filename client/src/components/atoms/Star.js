import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Star = () => {
  const [starNum, setStarNum] = useState(0);
  const stars = Array.from({ length: 5 });
  const handleStar = (idx) => {
    // idx가 4라면 모든 별에 class 추가
  };

  return (
    <StarContainer>
      {stars.map((_, idx) => (
        <FontAwesomeIcon
          icon={faStar}
          className="star"
          key={idx}
          onClick={(idx) => {
            handleStar(idx);
          }}
        />
      ))}
    </StarContainer>
  );
};

const StarContainer = styled.div`
  .star {
    color: #e5e5e5;
    cursor: pointer;
  }

  .clickStar {
    color: red;
  }
`;

export default Star;
