import styled from "styled-components";

export const NaviContainer = styled.nav`
  width: 100%;
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
