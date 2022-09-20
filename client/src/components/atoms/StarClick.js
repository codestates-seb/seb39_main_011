import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarClick = ({ clickStarHandler }) => {
  const [click, setClick] = useState(-1);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 });

  const handleClick = (idx) => {
    setClick(idx);
  };

  const handleHover = (idx) => {
    setHover(idx);
  };

  useEffect(() => {
    clickStarHandler(click + 1);
  }, [click]);

  return (
    <StarContainer>
      {stars.map((_, idx) => (
        <FontAwesomeIcon
          icon={faStar}
          className={`star ${(idx <= click || idx <= hover) && "clickStar"}`}
          key={idx}
          onClick={() => {
            handleClick(idx);
          }}
          onMouseOver={() => {
            handleHover(idx);
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
    color: #f7b603;
  }
`;

export default StarClick;
