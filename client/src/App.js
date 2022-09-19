import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/templates/Navigation/Navigation";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login";
import Join from "./pages/Join";

import AdminMyInfo from "./pages/admin-mypage/AdminMyInfo";
import AdminPost from "./pages/admin-mypage/AdminPost";
import AdminRez from "./pages/admin-mypage/AdminRez";
import AdminReview from "./pages/admin-mypage/AdminReview";

import ClientMyInfo from "./pages/client-mypage/ClientMyInfo";
import ClientRez from "./pages/client-mypage/ClientRez";
import ClientPastRez from "./pages/client-mypage/ClientPastRez";
import ClientReview from "./pages/client-mypage/ClientReview";
import MypageLayout from "./components/templates/MypageLayout";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/admin/mypage" element={<MypageLayout />}>
          <Route path="myinfo" element={<AdminMyInfo />} />
          <Route path="post" element={<AdminPost />} />
          <Route path="rez" element={<AdminRez />} />
          <Route path="review" element={<AdminReview />} />
        </Route>

        <Route path="/client/mypage" element={<MypageLayout />}>
          <Route path="myinfo" element={<ClientMyInfo />} />
          <Route path="rez" element={<ClientRez />} />
          <Route path="pastrez" element={<ClientPastRez />} />
          <Route path="review" element={<ClientReview />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
