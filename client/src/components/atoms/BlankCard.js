import React from "react";
import styled from "styled-components";
import { ReactComponent as CampingIcon } from "./../../svg/camping.svg";

const BlankCard = () => {
  return (
    <Container>
      <CampingIcon viewBox="10 80 350 120" />
      <p>Bear Mello</p>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 3px solid var(--main-color-4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > p {
    padding: 20px 0;
    font-size: 1.5rem;
    color: var(--main-color-4);
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export default BlankCard;
