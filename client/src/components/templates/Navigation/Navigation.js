import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";
import styled from "styled-components";
import { ReactComponent as ProfilePic } from "../../../svg/profile.svg";
import { ReactComponent as NavbarPic } from "../../../svg/navbar.svg";
import { ReactComponent as Logo } from "../../../svg/logo.svg";
import NavDropdown from "../../atoms/NavDropdown";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (isOpen && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <S.NaviContainer>
      <S.Nav>
        <a href="/">
          <Logo width="180" height="50" viewBox="150 70 190 80" />
        </a>
        <Box ref={dropdownRef}>
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

          {isOpen && (
            <NavDropdown
              toggleDropdown={toggleDropdown}
              isOpen={isOpen}
              isLogin={isLogin}
            />
          )}
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
