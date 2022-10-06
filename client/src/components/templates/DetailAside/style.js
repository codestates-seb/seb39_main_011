import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: ${(props) => (props.mobile ? "320px" : "300px")};
  height: 640px;
  padding: ${(props) => (props.mobile ? "10px 30px" : "10px 20px")};
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: ${(props) => (props.mobile ? "relative" : "sticky")};
  top: ${(props) => (props.mobile ? "0" : "90px")};
  z-index: 990;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
  }

  .closeBtn {
    position: absolute;
    top: 5px;
    right: 5px;
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
