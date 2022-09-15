import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Detail from "./pages/Detail";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        <Route path="/admin/mypage/myinfo" element={<AdminMyInfo />} />
        <Route path="/admin/mypage/post" element={<AdminPost />} />
        <Route path="/admin/mypage/rez" element={<AdminRez />} />
        <Route path="/admin/mypage/review" element={<AdminReview />} />

        <Route path="/client/mypage/myinfo" element={<ClientMyInfo />} />
        <Route path="/client/mypage/rez" element={<ClientRez />} />
        <Route path="/client/mypage/pastrez" element={<ClientPastRez />} />
        <Route path="/client/mypage/review" element={<ClientReview />} />
      </Routes>
    </>
  );
}

export default App;
