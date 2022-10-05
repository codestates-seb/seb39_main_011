import React from "react";
import styled from "styled-components";

const Modoal = (props) => {
  return (
    <Background>
      <Modal>
        <span onClick={props.onHandleModal}>&times;</span>
        <div>{props.children}</div>
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const Modal = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
  position: relative;

  > span {
    color: var(--main-color-2);
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
`;

export default Modoal;
