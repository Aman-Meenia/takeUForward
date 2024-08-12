import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { UserContext } from "./store/User";

const App = () => {
  const { userLogin, setUserLogin } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminlogin" element={<Login />} />
      {userLogin && <Route path="/dashboard" element={<Dashboard />} />}
      <Route path="*" element={<Home />} />

      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;
