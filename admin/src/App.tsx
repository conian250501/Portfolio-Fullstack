import { Avatar, InputBase, makeStyles, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRouter from "./global/routers/PrivateRouter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
