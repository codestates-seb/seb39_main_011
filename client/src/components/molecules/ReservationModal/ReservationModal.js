import React from "react";
import styled from "styled-components";

const ReservationModal = (props) => {
  return (
    <ModalContainer>
      <Content>
        <CloseBtn className="closeBtn">X</CloseBtn>
        {props.children}
      </Content>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #ffffff;
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.width || "90%"};
  padding: 30px 20px 20px 20px;
  border-radius: 5px;
  position: relative;
  z-index: 999;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
`;

export default ReservationModal;
