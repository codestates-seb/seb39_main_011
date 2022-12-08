import React from "react";
import styled from "styled-components";
import { ReactComponent as CampingIcon } from "../../svg/camping.svg";

const BlankBox = () => {
  return (
    <Container>
      <CampingIcon viewBox="10 80 350 120" />
      <p>등록된 캠핑장이 없습니다.</p>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  padding: 50px;
  border: 3px solid var(--main-color-4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    padding: 50px 0 100px 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--main-color-4);

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export default BlankBox;
