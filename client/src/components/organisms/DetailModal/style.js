import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .closeBtn {
    position: absolute;
    top: 20px;
    right: 85px;
    font-size: 20px;
    font-weight: 600;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    z-index: 999;
  }
`;

export const Modal = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 90%;
  padding: 30px 20px 20px 20px;
  border-radius: 5px;
  position: relative;
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #e5e5e5;
  }
`;
