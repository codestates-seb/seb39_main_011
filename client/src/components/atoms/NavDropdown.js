import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

const NavDropdown = ({ toggleDropdown }) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  const role = localStorage.getItem("role");

  let path = "";
  if (role === "ADMIN") {
    path = "/admin/mypage/post";
  } else if (role === "USER") {
    path = "/client/mypage/rez";
  }

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("Token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("campId");
  };

  return (
    <div>
      {!isLogin ? (
        <Layout>
          <Link to="/login">
            <li onClick={toggleDropdown}>로그인</li>
          </Link>
          <hr />
          <Link to="/join">
            <li onClick={toggleDropdown}>회원가입</li>
          </Link>
        </Layout>
      ) : (
        <Layout>
          <Link to={path}>
            <li onClick={toggleDropdown}>마이페이지</li>
          </Link>
          <hr />
          <li onClick={handleLogout}>로그아웃</li>
        </Layout>
      )}
    </div>
  );
};

export default NavDropdown;

const Layout = styled.div`
  width: 150px;
  height: 90px;
  position: absolute;
  top: 45px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  li {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--main-color-1);
  }

  hr {
    border: none;
    width: 100%;
    height: 1px;
    background-color: #e1e1e1;
  }
`;
