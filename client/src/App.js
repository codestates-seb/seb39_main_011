import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/templates/Navigation/Navigation";

import { useDispatch } from "react-redux";
import { login } from "./redux/reducers/authSlice";
import Loading from "./components/atoms/Loading";

const Main = lazy(() => import("./pages/Main/Main"));
const Detail = lazy(() => import("./pages/Detail/Detail"));
const Login = lazy(() => import("./pages/Login"));
const Join = lazy(() => import("./pages/Join"));
const AdminPost = lazy(() => import("./pages/admin-mypage/AdminPost"));
const AdminRez = lazy(() => import("./pages/admin-mypage/AdminRez"));
const AdminReview = lazy(() => import("./pages/admin-mypage/AdminReview"));
const ClientRez = lazy(() => import("./pages/client-mypage/ClientRez"));
const ClientPastRez = lazy(() => import("./pages/client-mypage/ClientPastRez"));
const ClientReview = lazy(() => import("./pages/client-mypage/ClientReview"));
const MypageLayout = lazy(() => import("./components/templates/MypageLayout"));
const MyInfo = lazy(() => import("./pages/Myinfo"));

function App() {
  const dispatch = useDispatch();
  const Token = sessionStorage.getItem("Token");

  useEffect(() => {
    if (Token) {
      dispatch(login());
    }
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          <Route path="/admin/mypage" element={<MypageLayout />}>
            <Route path="myinfo" element={<MyInfo />} />
            <Route path="post" element={<AdminPost />} />
            <Route path="rez" element={<AdminRez />} />
            <Route path="review" element={<AdminReview />} />
          </Route>

          <Route path="/client/mypage" element={<MypageLayout />}>
            <Route path="myinfo" element={<MyInfo />} />
            <Route path="rez" element={<ClientRez />} />
            <Route path="pastrez" element={<ClientPastRez />} />
            <Route path="review" element={<ClientReview />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
