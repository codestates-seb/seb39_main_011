import styled from "styled-components";

export const ModalContainer = styled.div`
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

export const Modal = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 90%;
  border-radius: 5px;
  position: relative;
  z-index: 999;

  padding: 40px 30px 30px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #e5e5e5;
  }

  .closeBtn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    border: 1px solid red;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
`;
