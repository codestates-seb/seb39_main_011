import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import styled from "styled-components";
import { ReactComponent as ProfilePic } from "../../../svg/profile.svg";
import { ReactComponent as NavbarPic } from "../../../svg/navbar.svg";
import { ReactComponent as Logo } from "../../../svg/logo.svg";
import NavDropdown from "../../atoms/NavDropdown";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NaviContainer>
      <S.Nav>
        <Link to="/">
          <div>
            <Logo width="180" height="50" viewBox="150 70 190 80" />
          </div>
        </Link>
        <Box>
          {isLogin ? (
            <ProfilePic
              width="50"
              height="50"
              fill="var(--main-color-1)"
              onClick={toggleDropdown}
            />
          ) : (
            <NavbarPic onClick={toggleDropdown} />
          )}

          {isOpen && <NavDropdown isOpen={isOpen} isLogin={isLogin} />}
        </Box>
      </S.Nav>
    </S.NaviContainer>
  );
};

export default Navigation;

const Box = styled.div`
  position: relative;
  cursor: pointer;
`;
